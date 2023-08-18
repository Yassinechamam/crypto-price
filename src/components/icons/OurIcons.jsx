import React from 'react';
import "./icons.css"
import one from "../../assets/icons/1.png";
import two from "../../assets/icons/2.webp";
import three from "../../assets/icons/3.png";
import four from "../../assets/icons/4.png";
import five from "../../assets/icons/5.png";
import six from "../../assets/icons/6.webp";

export const OurIcons = () => {
  return (
    <div className='icons-container'>
        <div className='icon'>
            <img src={one} alt="" />
        </div>

        <span className='icon'>
            <img src={two} alt="" />
        </span>

        <span className='icon'>
            <img src={three} alt="" />
        </span>

        <span className='icon'>
            <img src={four} alt="" />
        </span>

        <span className='icon'>
            <img src={five} alt="" />
        </span>

        <span className='icon'>
            <img src={six} alt="" />
        </span>
    </div>
  )
}
