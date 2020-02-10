import React from 'react';

let BioSection = () => {

    return (
        <div class="bio-section" id="about_me">
           <img class="beximg" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/80874700_2444702225769576_4840277685592653824_n.jpg?_nc_cat=108&_nc_ohc=8Ej9yDvHdN8AX_zhgY1&_nc_ht=scontent-ort2-1.xx&oh=2f349bd8635bd5286ad4b094f7e5cd31&oe=5E9F6DCC"/>
           
           <div class="bio-about">
               <h3> About Me: </h3>
               <p>
                   I'm Rebecca! I'm a beginner witch who's still learning! I have my small family whom I love to pieces! An amazing finace, and two little girls. I sell Tarot Readings and have several different packages to subscribe for!
               </p>
               <p className="bio-money">
                 <i class="fas fa-envelope"/>Email: brujamama18@gmail.com<br/>
                 <i class="fas fa-money-check-alt"/>CashApp: $mamabex18<br/>
                 <i class="fab fa-cc-paypal"/>PayPal:   bumgardnerr066@gmail.com
               </p>
           </div>
        </div>
    )
}

export default BioSection;