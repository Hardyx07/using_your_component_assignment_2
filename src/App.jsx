// App.jsx
import { useState } from 'react';
import PostCard from './components/postcard'; 
import './App.css';

function App() {
  const initialPosts = [
    {
      id: 1,
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      username: 'Amit Sharma',
      content: 'Maa ne bola 2 roti kha… Dil ne bola 4… Pet ne bola bhai bas kar! 🤰😂',
      isLiked: false,
    },
    {
      id: 2,
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      username: 'Priya Verma',
      content: 'Gym join kiya tha, par ek hafte baad gym wale hi bol rahe hain “Didi aap rehne do” 🏋️‍♀️😅',
      isLiked: true,
    },
    {
      id: 3,
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      username: 'Rahul Gupta',
      content: 'Padhai start karne jaa raha tha… Tabhi doston ne yaad dilaya ki exam next month hai. Thank you doston! 📚😌',
      isLiked: false,
    },
    {
      id: 4,
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      username: 'Sneha Kapoor',
      content: 'Aaj fir online shopping ki… Bas payment karna bhool gayi… Abhi tak gharwale khush hain! 🛍️😂',
      isLiked: true,
    },
    {
      id: 5,
      profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      username: 'Vikram Singh',
      content: 'Rishtedaar: Beta kya kar rahe ho aajkal?' , 
      Me: 'Bas aunty, aapki blessings leke so raha hoon. 😴😂',
      isLiked: false,
    }
];



  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, isLiked: !post.isLiked } : post
    ));
  };

  return (
    <div className="app">
      <h1>Social Media Feed</h1>
      <div className="post-list">
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            post={post} 
            onToggleLike={() => toggleLike(post.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;