import React from 'react';

 function Tradable() {
  const [posts, setPosts] = useState ([])
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
                <p>:Title {post.title}</p>
                <p>:Author {post.author}</p>
                <p>:Content {post.content}</p>
                </ol>
            ))}
    </div>
);
}

export default Tradable;