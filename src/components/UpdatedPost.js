import React from "react";


function UpdatedPost({ onDelete, post }) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/posts/${post.id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(() => 
                onDelete(post)
            
            )
    }


    return (

        <div>
            {/* <p> <span  type = "button" role="img" aria-label="delete">
        </span> </p> */}
            <div><span>{post.date}</span></div>
            <div><span>{post.author}</span></div>
            <div><span>{post.topic}</span></div>
            <div><span>{post.content}</span>
            </div>
            <div>
                <button onClick={handleDeleteClick}>Delete</button>
            </div>



        </div>
    )
}


export default UpdatedPost;