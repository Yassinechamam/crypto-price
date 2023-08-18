import React from 'react';
import Crypto from "../../assets/wallet.png";
import "./discover.css";

export const Discover = () => {
  return (
    <div className='discover'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className='btn-container'>
                        
                        <a href="https://crypto.com/university/crypto-wallets"><button className='btn'>Learn More</button></a>
                    </div>
                </div>

            </div>
        </div>
  )
}
