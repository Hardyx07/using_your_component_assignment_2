// PostCard.jsx
import React from 'react';
import LikeButton from '../components/likebutton'; // Import the LikeButton component
import '../App.css'; 

const PostCard = ({ post, onToggleLike }) => {
    return (
        <div className="post-card">
            <div className="post-header">
                <img src={post.profileImage} alt={post.username} className="profile-picture" />
                <h3 className="username">{post.username}</h3>
            </div>
            <p className="post-content">{post.content}</p>
            <LikeButton isLiked={post.isLiked} onToggle={onToggleLike} />
        </div>
    );
};

export default PostCard;