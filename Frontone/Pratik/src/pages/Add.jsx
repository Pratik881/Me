// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Add = () => {
//     const [blog, setBlog] = useState({
//         title: "",
//         content: ""
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setBlog(prev => ({
//             ...prev,
//             [e.target.name]: e.target.value
//         }));
//     };

//     const handleClick = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/posts', blog);
//             navigate('/');
//         } catch (err) {
//             console.log(err.message); // Log error message for better understanding
//         }
//     };

//     return (
//         <div className='form'>
//             <h1>Add new blog</h1>
//             <input type='text' placeholder='title' onChange={handleChange} name="title" />
//             <input type='text' placeholder='content' onChange={handleChange} name="content" />
//             <button onClick={handleClick}>Add</button>
//         </div>
//     );
// };

// export default Add;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './add.css'

const Add = () => {
  const [blog, setBlog] = useState({
    title: '',
    content: ''
  });

  const navigate = useNavigate();

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
      await axios.post('http://localhost:5000/posts', blog);
      navigate('/');
    } catch (err) {
      console.log(err.message); // Log error message for better understanding
    }
  };

  return (
    <div className="add-form">
      <h1>Add New Blog</h1>
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
      <button onClick={handleClick} className="add-button">
        Add
      </button>
    </div>
  );
};

export default Add;
