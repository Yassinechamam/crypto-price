import React from 'react';
import "./hero.css";
import Crypto from "../../assets/hero-img.png"

export const Hero = () => {
  return (
    <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    
                    <h1>Invest in Cryptocurreny with Your IRA</h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className='btn-container'>
                        
                        <a href="https://crypto.com/"><button className='btn'>Create Your Wallet</button></a>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
  )
}
