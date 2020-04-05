const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')

router.get('/', postController.getPosts);

router.get('/:id', postController.getPostView);

router.get('/new', postController.getCreatePost);

router.post('/new', postController.createPost);

router.get('/edit', postController.getEditPost);

router.put('/edit/:id', postController.editPost);

router.post('/:id', postController.deletePost);

module.exports = router;