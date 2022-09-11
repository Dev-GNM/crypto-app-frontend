import React from 'react';

function Nav() {
    return (
        <nav id="nav-list">
             <div className="logo">
                <h1><span>Crypto</span>NewsHub</h1>
            </div>
            <div className="nav-bar">
            <li><a href="/">Home</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="#footer">About</a></li> 
            
            </div>
            
        </nav>
    );
}

export default Nav;