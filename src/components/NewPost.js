import React, { useState } from "react";


function NewPost({ onHandleAddPost }) {
const [formData, setFormData] = useState ({
    date: "",
    author: "",
    topic: "",
    content: ""
})

function handleChange(e) {
setFormData({...formData, [e.target.name]: e.target.value})
}

    // const [date, setDate] = useState('')
    // const [author, setAuthor] = useState('')
    // const [topic, setTopic] = useState('')
    // const [content, setContent] = useState('')


    function handleSubmit(e) {
        e.preventDefault()

        e.target.reset();


        // const newPost = {
        //     "Date": date,
        //     "Author": author,
        //     "Topic": topic,
        //     "Content": content

        // }
        fetch("http://localhost:9292/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            date: formData.date,
            author: formData.author,
            topic: formData.topic,
            content: formData.content
            })

        })
            .then((resp) => resp.json())
            .then((data) => {
                onHandleAddPost(data)
                setFormData({...formData, date: "", author:"", topic:"", content:""})
            })

// newPost();
        alert("New Post added successfully!");


    }


    return (
        <div className="new-posts-container" style={{ margin: "auto", width: '95%', height: 90 + "vh", color: "white", backgroundColor: "black", borderRadius: "15px", padding: "15px", marginTop: "5px"}}>
            <div className="links">
                {/* <button>Login</button>
                <button>Subscribe</button> */}
            </div>
                {/* <h1 style={{ textAlign: "center", marginTop: 50 + "px" }}> New Post</h1>
                <hr color="black" size="3px" /> */}
            <div className="new-post-content">

                <form className="new-post" onSubmit={handleSubmit}>

                    {/* <div className="new-post">
                        <label >Date </label>

                        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Date" onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    <div className="new-post">
                        <label >Author </label>

                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
                    </div>

                    <div>

                        <label for="exampleFormControlInput1" class="form-label">Topic</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Topic" onChange={(e) => setTopic(e.target.value)} required />
                    </div>

                    <div className="new-post">
                        <label for="exampleFormControlTextarea1" class="form-label">Content </label>
                        <textarea type="text" class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e) => setContent(e.target.value)} required />
                    </div> */}

                    <input type="text" name="date" placeholder="date" value={formData.date} onChange={handleChange}/>
                    <input type="text" name="author" placeholder="author" value={formData.author} onChange={handleChange}/>
                    <input type="text" name="topic" placeholder="topic" value={formData.topic} onChange={handleChange}/>
                    <input type="text" name="content" placeholder="content" value={formData.content} onChange={handleChange}/>
                    {/* <button>Reset</button> */}
                    <button type="submit">Submit Post</button>

                </form>
            </div>
        </div>

    )
}
export default NewPost;