import React from 'react';

 function Tradable() {
  return (
    <div className="trends">
      <h3>Crypto Trends</h3>
      <form>
        <input type="text" placeholder="search by topic" />
        <input type="submit" value="Search" />
        <div className="post">
            <li>Post</li>
            <li>Author</li>
            <li>Comments</li>
        </div>
      </form>
    </div>
  );
}

export default Tradable;