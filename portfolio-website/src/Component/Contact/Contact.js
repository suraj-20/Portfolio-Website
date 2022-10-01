import React, { useRef } from "react";
import './Contact.css';
import emailjs from 'emailjs-com';

function Contect() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_87i9vdi', 'template_03ah1vm', e.target, 'rlY-YE4GvwkqshyyU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    
    return (
        <>
            <section className="contact" id="contact">
                <h1><i className="fa fa-headset"></i>Get In <span>Touch</span></h1>

                <div className="contact-container">
                    <div className="container1">
                        <div className="img"></div>
                    </div>


                    <form id="contact-form" ref={form} onSubmit={sendEmail}>

                        <div class="form-group">
                            <div class="field">
                                <input type="text" name="name" placeholder="Name" required />
                                <i class='fas fa-user'></i>
                            </div>
                            <div class="field">
                                <input type="text" name="email" placeholder="Email" required />
                                <i class='fas fa-envelope'></i>
                            </div>
                            <div class="field">
                                <input type="text" name="phone" placeholder="Phone" />
                                <i class='fas fa-phone-alt'></i>
                            </div>
                            <div class="message">
                                <textarea placeholder="Message" name="message" required></textarea>
                                <i class="fas fa-comment-dots"></i>
                            </div>
                        </div>
                        <div class="button-area">
                            <button type="submit">
                                Submit <i class="fa fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contect;