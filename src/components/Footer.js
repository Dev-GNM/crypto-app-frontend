import React from 'react';

 function Footer() {
  return (
    <div id="footer">
      <div className="about-us">
      <em><p>We are pleased to announce our intention to add support crypto enthusiasts. <br></br>
      fastest-growing cryptocurrency news and trading website worldwide.<br></br> 
      View breaking news and unbiased analysis on all coins.<br></br>
      </p></em>
      </div>
      <div className="support">
      <h3>We love to here from you!</h3>
      {/* <form id="contact-us">
        <input type="text" name="fname" value="First Name"/> 
        <input type="text" name="lname" value="Last Name"/>
        <input type="text" name="email" value="Email" placeholder="Email" required/>
        <textarea value="content" placeholder="Write here..."/>
        <input type="submit" value="Submit"/>
      </form> */}
      <strong><p>Designed with passion by Geoffrey</p></strong>
      </div> 
     
    </div>
 )};



export default Footer;