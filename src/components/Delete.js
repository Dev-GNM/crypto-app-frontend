import React from "react";





function Delete({onDelete, id}){
    
    function handleDeleteClick(){
        fetch (`http://localhost:9292/posts/${id}`, {
            method: "DELETE",
            headers:{"Content-Type": "application/json"}
        
        })
        onDelete(id)
    }


return (
    
    <div>
        <p> <span  type = "button" role="img" aria-label="delete">
        </span> </p>

    </div>
)}


export default Delete;