import React from 'react';

function Nav() {
    return (
        <nav id="nav-list">
             <div className="logo">
                <h1><span>Crypto</span> Base</h1>
            </div>
            <div className="nav-bar">
            <li><a href="/">Home</a></li>
            <li><a href=".new-post-form">Login</a></li>
            <li><a href="#footer">Register</a></li> 
            <li><a href="#footer">Market</a></li> 
            </div>
        </nav>
    );
}

export default Nav;