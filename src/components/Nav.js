import React from 'react';

function Nav() {
    return (
        <nav id="nav-list">
             <div className="logo">
                <h1><span>Crypto</span>inSightsy</h1>
            </div>
            <div className="nav-bar">
            <li><a href="/">Home</a></li>
            <li><a href=".new-posts-container">Subscribe</a></li>
            <li><a href="/">Login</a></li> 
            <li><a href="#footer">About</a></li> 
            {/* <NavLink to = "/NewPost"> 
            post

            </NavLink> */}
            
            </div>
            
        </nav>
    );
}

export default Nav;