import React from "react";
import { Link } from "react-router-dom";
import Back from "../assets/icons/back.png";
import { AiFillCaretLeft } from "react-icons/ai";

export default function Header({ back }) {
  return (
    <header className="header">
      <div className="width-container">
        { back && <Link to="/">
          <AiFillCaretLeft/>
        </Link>}
        <h1>
          <Link to="/">Coiner</Link>
        </h1>
        <a className="link-connect" href="https://web3inbox.com/?utm_source=w3i&utm_medium=web&utm_campaign=web3inbox">
          <div className="connect">Connect Your Wallet</div>  
        </a>
        
      </div>
    </header>
  );
}
