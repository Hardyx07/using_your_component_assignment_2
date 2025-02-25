import react from 'react';
import '../App.css';

const LikeButton = ({ isLiked, onToggle }) => {
    return (
        <button 
            className={`like-button ${isLiked ? 'liked' : ''}`} 
            onClick={onToggle}
        >
            {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>
    );
};

export default LikeButton;