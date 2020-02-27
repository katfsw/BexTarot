import React from 'react';
import { Formik } from 'formik';

function Contact() {
  return (
   <div class="contact-form" id="contact_form">
       <form action="mailto:brujamama18@gmail.com" method="post" enctype="text/plain">
          
            <div class="input-form">
                <input type="text" name="My_Name" id="name" placeholder="Your Name" />
            </div>
            <div class="input-form">
                <input type="text" name="My_Email" id="email" placeholder="Your E-Mail" />
            </div>
            <div class="input-form">
                <textarea  name="Tarot_Reading_Message" id="message" defaultValue="I would like to set up a time for a Tarot Reading! ✨"></textarea>
            </div>
            <div class="input-form">
                <input class="contact-button" type="submit" value="Contact Me! 🔮" />
            </div>


		</form>						
   </div>
  );
}

export default Contact;
