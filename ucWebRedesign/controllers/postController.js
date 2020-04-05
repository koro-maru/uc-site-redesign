const express = require('express')
const { check, body, validationResult } = require('express-validator');
const Post = require('../models/post')

exports.getPosts = (req, res, next) => {
    Post.find().exec((err, posts)=>{
        if(err)
            return next(err);
        
        res.render('postViews/postList.njk', {posts: posts})
       // res.render('../views/postViews/postList.njk', {posts: posts})
    })
}

exports.getCreatePost = (req, res, next) => {
    res.render('postViews/createPost.njk')
}

//../views/postViews/

exports.createPost = [
     body('title').not().isEmpty().trim().escape(),
     body('body').not().isEmpty().trim().escape(),
    
     (req, res, next)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            for(let i = 0; i < errors.array(); i++){
                console.log(errors.array()[i].msg);
            }
            return res.sendStatus(422);
        }

        var post = new Post({
            title : req.body.title,
            body: req.body.body,
            image: req.body.image,
            dateCreated: Date.now(),
            tags: req.body.tags
        });

        post.save(err=>{
            if(err)
                return next(err);
        })
        res.redirect('/');
        
     }

     

];

exports.getPostView = (req, res, next) => {
    Post.findById(req.params.id)
    .exec((err, result) => {
        if (err)
            return next(err)
        res.render('postViews/postView.njk', {title: result.title, body: result.body})
    })
}

exports.getEditPost = (req, res, next) => {
    Post.findById(req.params.id)
    .exec((err, result) =>{
        if (err)
            return next(err)
     res.render('postViews/edit.njk', {title: result.title, body: result.body})
    })
    
}

exports.editPost = (req, res, next) => {
    var updatedPost = new Post({
        title: req.body.title,
        body: req.body.body,
        image: req.body.image,
        tags: req.body.tags,
        _id: req.params.id
    })

    Post.findByIdAndUpdate(req.params.id, updatedPost)
    .exec((err, result)=>{
        if(err)
            return next(err)
        console.log(result || hm)
      return res.json(result);
    })
}

exports.deletePost = (req, res, next)=>{
    Post.findByIdAndDelete(req.params.id, (err)=>{
        if(err)
            return next(err)
    })
    res.redirect('/')
}
