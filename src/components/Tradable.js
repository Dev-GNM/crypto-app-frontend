import React, {useState, useEffect } from 'react';
// import Delete from './Delete';

 function Tradable() {

  const [posts, setPosts] = useState ([])
// const handlePostDelete = (index) => {
//   const list = [...posts]
//   list.splice(index, 1)
//   setPosts(list)
// }

  useEffect(() => {
    fetch("http://localhost:9292/posts")
    .then((response) => response.json())
    .then((data) =>{
      setPosts(data)
      console.log(data)
    })
  },[]);
   return (
    <div className='post-container'>
              { posts.map((post) => (
                <ol id={post.id} key={post.id} >
                <p>Date: {post.date}</p>
                <p>Topic: {post.topic}</p>
                <p>Author: {post.author}</p>
                <p>Content: {post.content}</p>
                <button>Edit</button>
                <button className="delete-btn"
                >
                Delete
                </button>
                </ol>
            ))}
    </div>
);
}

export default Tradable;