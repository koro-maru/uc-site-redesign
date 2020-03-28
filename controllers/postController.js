const express = require('express')
const validator = require('express-valdidator')
const Post = require('.,/models/post')

exports.getPosts = (req, res, next) => {
    Post.find().then((posts)=>{
        res.render('../views/postViews/postList.njk', {posts: posts})
    })
}

exports.getCreatePost = (req, res, next) => {
    
}

exports.createPost = (req, res, next) => {

}


exports.getEditPost = (req, res, next) => {
    
}

exports.editPost = (req, res, next) => {

}

exports.getDeletePost = (req, res, next)=>{

}

exports.deletePost = (req, res, next)=>{

}

