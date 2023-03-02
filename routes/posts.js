import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { getFeedPosts, getUserPosts, likePosts } from '../controllers/post.js';


const router = express.Router();

router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);
router.patch('/:id/like', verifyToken, likePosts);

export default router;
