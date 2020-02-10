import React from 'react';
import { Formik } from 'formik';

function Contact() {
  return (
   <div class="contact-form" id="contact_form">
       <form action="mailto:brujamama18@gmail.com" method="post" enctype="text/plain">
           <p><b><i>Standard Tarot Readings</i></b> <br/>
           <b>- Standard 3 Card Spread</b> <br/>
           <b>- Standard 1 Week 8 Card Spread</b> <br/>
           <b>- Daily Card 1 Card/Day</b></p>
            <select name="Standard Tarot Readings">
                <option value="default"> Standard Tarot Readings </option>
                <option value="3card"> 3 Card Spread : $8.00</option>
                <option value="8card"> 8 Card Spread : $15.00</option>
                <option value="1card"> 1 Card Spread : $2.50 a day per card</option>
            </select>
            <br/>
            <p><b><i>Monthly Tarot Readings</i></b> <br/>
           <b>- Standard 3 Card Spread</b> <br/>
               <i> ( 4 Readings a Month, Every Wednesday ) </i><br/>
           <b>- Standard 1 Week 8 Card Spread</b> <br/>
                <i> 4 Readings a Month, Every Monday ) </i><br/>
           <b>- Daily Card 1 Card/Day</b> <br/>
                <i>( 1 Reading a Day, every Day )</i></p>
            <select name="Monthly Tarot Readings (1/week)">
                <option value="default"> Monthly Tarot Readings </option>
                <option value="3card"> 3 Card Spread : $32.00</option>
                <option value="8card"> 8 Card Spread : $60.00</option>
                <option value="1card"> 1 Card Spread : $35.00</option>
            </select>
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
