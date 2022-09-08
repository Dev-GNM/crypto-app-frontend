import React from 'react';

 function Footer() {
  return (
    <div id="footer">
      <div className="about-us">
      <em><p>With over half of the world's population using social media, platforms like Facebook,<br></br>
      Instagram or Twitter a natural place to reach new and highly targeted potential customers.<br></br>
      Think people only connect with brands they already know on social media? <br></br>
      Consider that 83 percent of people say they discover new products on the platform.
      </p></em>
      </div>
      <div className="support">
      <h3>We love to here from you!</h3>
      <form id="contact-us">
        <input type="text" name="fname" value="First Name"/> 
        <input type="text" name="lname" value="Last Name"/>
        <input type="text" name="email" value="Email" placeholder="Email" required/>
        <textarea value="content" placeholder="Write here..."/>
        <input type="submit" value="Submit"/>
      </form>
      <strong><p>Designed with passion by Geoffrey</p></strong>
      </div> 
     
    </div>
 )};



export default Footer;