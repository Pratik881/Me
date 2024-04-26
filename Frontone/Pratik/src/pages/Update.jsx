// import React, { useState } from 'react';
// import { useNavigate ,useLocation} from 'react-router-dom';
// import axios from 'axios';


// const Update = () => {
//     const [blog, setBlog] = useState({
//         title: "",
//         content: ""
//     });

//     const navigate = useNavigate();
//     const location=useLocation()
//     const blogId=location.pathname.split("/")[2]

//     const handleChange = (e) => {
//         setBlog(prev => ({
//             ...prev,
//             [e.target.name]: e.target.value
//         }));
//     };

//     const handleClick = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put('http://localhost:5000/posts/'+ blogId,blog);
//             navigate('/');
//         } catch (err) {
//             console.log(err.message); // Log error message for better understanding
//         }
//     };

//     return (
//         <div className='form'>
//             <h1>Update new post</h1>
//             <input type='text' placeholder='title' onChange={handleChange} name="title" />
//             <input type='text' placeholder='content' onChange={handleChange} name="content" />
//             <button onClick={handleClick}>Update</button>
//         </div>
//     );
// };

// export default Update;

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './update.css'

const Update = () => {
  const [blog, setBlog] = useState({
    title: '',
    content: ''
  });

  const navigate = useNavigate();
  const location = useLocation();
  const blogId = location.pathname.split('/')[2];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/posts/${blogId}`, blog);
      navigate('/');
    } catch (err) {
      console.log(err.message); // Log error message for better understanding
    }
  };

  return (
    <div className="update-form">
      <h1>Update Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={blog.title}
        onChange={handleChange}
        name="title"
        className="input-field"
      />
      <textarea
        placeholder="Content"
        value={blog.content}
        onChange={handleChange}
        name="content"
        className="input-field"
      ></textarea>
      <button onClick={handleClick} className="update-button">
        Update
      </button>
    </div>
  );
};

export default Update;
