import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_contactform', e.target, 'user_cdvonKz6X8JzmdDP5ifc3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
      <div>
 <div className = 'container'>
    <form onSubmit={sendEmail}>
        <div>
            <input type ="text" className="form-control" placeholder="Name" name = "name" />
        </div>
        <div>
            <input type ="email" className="form-control" placeholder="Email Address" name = "email" />
        </div>
        <div>
            <input type ="text" className="form-control" placeholder="Subject" name = "subject" />
        </div>
        <div>
            <textarea type ="text" className="form-control" cols="30" rows="8" placeholder="Message" name = "message" />
        </div>
        <div>
            <input type ="submit" className="btn btn-info" value="Send Message"></input>
        </div>
    </form>
 </div>
 </div>
  );
};

export default Contact