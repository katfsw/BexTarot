import React from 'react'

const Readings = () => {
    return(
        <div>
            <div className="single-spreads">

                <div>
                    <h3>1 Card Spread</h3>
                    <img src={require('../images/SingleCard.png')} alt='Single Card Tarot Spread'/>
                    <p>$2.50</p>
                </div> 

                <div>
                    <h3>3 Card Spread</h3>
                    <img src={require('../images/ThreeCard.png')} alt='Three Card Tarot Spread'/>
                    <p>$8</p>
                </div> 

                <div>
                    <h3>8 Card Spread</h3>
                    <img src={require('../images/EightCard.png')} alt='Eight Card Tarot Spread'/>
                    <p>$15</p>
                </div> 

                
            </div>
            <div className="monthly-spreads">
                
            </div>
        </div>
    )   
}

export default Readings