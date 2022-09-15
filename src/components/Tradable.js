import React, {useState, useEffect } from 'react';
import NewPost from './NewPost';
import UpdatedPost from './UpdatedPost';


 function Tradable() {

  const [posts, setPosts] = useState ([]);
  
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
      // console.log(data)
    })
  },[]);


  function handleAddPost(newData){

    setPosts([...posts, newData]) 
}


function handleDeletePost (deletedPost){
const updatedPost = posts.filter((post) => post.id !== deletedPost.id)
setPosts(updatedPost) 
}




// function handleAddPost(newPost) {
// setPosts([...posts, newPost]);
// }


// function handleDeletPost(deletePost) {
// const updatePosts = post.filter((post) = post.id !== deletedPost.id)
// setPosts(updatedPosts)
// }

   return (
    <div className='post-container'>
              {/* { posts.map((post) => (
                <ol id={post.id} key={post.id} >
                <p>Date: {post.date}</p>
               <strong><p>Topic: {post.topic}</p></strong> 
                <p>Author: {post.author}</p>
                <p>Content: {post.content}</p>
                <button>Edit</button> */}
                {posts.map((post) => (
          <UpdatedPost id={post.id} key={post.id} post={post}  onDelete={handleDeletePost} />
        ))}
           
                {/* </ol>
            ))} */}
            <NewPost onHandleAddPost={handleAddPost}/>
    </div>
);
}

export default Tradable;