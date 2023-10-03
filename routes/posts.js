const express = require('express');
const mongoose =require('mongoose');
const Posts = require('../models/post');

const router = express.Router();
//save posts
// router.post('/post/save', async (req, res) => {
//   try {
//     const newPost = new Posts(req.body);
//     await newPost.save();
    
//     res.status(200).json({
//       success: "Post saved successfully"
//     });
//   } catch (error) {
//     res.status(400).json({
//       error: error.message || "An error occurred while saving the post"
//     });
//   }
// });

module.exports = router;
