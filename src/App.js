import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Tradable from './components/Tradable';
import PublishPost from './components/PublishPost';
import Header from './components/Header';
// import Delete from './components/Delete';
import Footer from './components/Footer';



function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch ("http://localhost:9292/posts")
    .then((response) => Response.json)
    .then((data) => {
      setPosts (data);
    })
},[]);
  return (
    <div className="App">
     <Nav />
     <Slider />
     <Tradable />
     <PublishPost post={posts}/>
     {/* <Delete /> */}
     <Header />
     <Footer />
    </div>
  );
}

export default App;

