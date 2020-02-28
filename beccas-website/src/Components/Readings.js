import React from 'react'

const Readings = () => {
    return(
        <div className="readings-spreads">
          
          <h1>One-Time Purchase</h1>
            <div className="single-spreads">

                

                <div className="single-card">
                    <h3>1 Card Spread</h3>
                    <img src={require('../images/SingleCardV2.png')} alt='Single Card Tarot Spread'/>
                    <p>$2.50</p>
                </div> 

                <div>
                    <h3>3 Card Spread</h3>
                    <img src={require('../images/ThreeCardV2.png')} alt='Three Card Tarot Spread'/>
                    <p>$8</p>
                </div> 

                <div>
                    <h3>8 Card Spread</h3>
                    <img src={require('../images/EightCardV2.png')} alt='Eight Card Tarot Spread'/>
                    <p>$15</p>
                </div> 

                
            </div>
            
            <h1>One-Month Subscription</h1>
            <div className="monthly-spreads">
                
                <div>
                    <h3>3 Card Spread</h3>
                    <img src={require('../images/ThreeCardV2.png')} alt='Monthly Three Card Tarot Spread'/>
                    <p>$32</p>
                    <p>* 4 Readings in a Month, every Wednesday</p>
                </div> 

                <div>
                    <h3>8 Card Spread</h3>
                    <img src={require('../images/EightCardV2.png')} alt='Monthly Eight Card Tarot Spread'/>
                    <p>$60</p>
                    <p>* 4 Readings in a Month, every Wednesday</p>
                </div> 

            </div> 
        </div>
    )   
}

export default Readings