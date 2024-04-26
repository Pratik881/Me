
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './post.css'

function Post() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/posts');
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    getAllPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      setPosts(posts.filter(post => post._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSeeMore = (id) => {
    const selected = posts.find(post => post._id === id);
    setSelectedPost(selected);
  };

  return (
    <div className="post-container">
      {loading ? (
        <p>Loading posts...</p>
      ) : selectedPost ? (
        <div>
          <div className="post-details">
            <h3>{selectedPost.title}</h3>
            <p>{selectedPost.content}</p>
            <p>Date Created: {new Date(selectedPost.date).toLocaleDateString()}</p>
          </div>
          <div className="post-actions">
            <button className="delete" onClick={() => handleDelete(selectedPost._id)}>Delete</button>
            <button className="update"><Link to={`/update/${selectedPost._id}`}>Update</Link></button>
            <button onClick={() => setSelectedPost(null)}>Back</button>
          </div>
        </div>
      ) : (
        <ul className="post-list">
          {posts.map(post => (
            <li key={post._id} className="post-item">
              <div className="post-details">
                <h3>{post.title}</h3>
                {/* <p>{post.content}</p> */}
                <p>Date Created: {new Date(post.date).toLocaleDateString()}</p>
              </div>
              <div className="post-actions">
                <button className="delete" onClick={() => handleDelete(post._id)}>Delete</button>
                <button className="update"><Link to={`/update/${post._id}`}>Update</Link></button>
                <button onClick={() => handleSeeMore(post._id)}>See More</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className="add-new-button"><Link to="/add">Add New Post</Link></button>
    </div>
  );
}

export default Post;
