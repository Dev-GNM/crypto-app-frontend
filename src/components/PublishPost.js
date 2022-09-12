import React, {useState} from "react";
import NewPost from "./NewPost";



function PublishPost(){

    const [newBlogPost, setNewBlogPost]=useState([])
                  



    function handleAddPost(newData){

        setNewBlogPost([...newBlogPost, newData]) 
    }
    

    
    return (
        <div >
            <NewPost onHandleAddPost={handleAddPost} />
            
        </div>

    )
    }

export default PublishPost;