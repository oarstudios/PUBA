import React from "react";
import "./WhatWeDo.css";
import './wwdMedia.css';
import { Link } from 'react-router-dom';

// Image Imports (Update the paths to match your setup)
import ActingImg from "../../Images/acting.jpg";
import WritingImg from "../../Images/writing.jpg";
import ProductionManagingImg from "../../Images/production.jpg";
import DirectionImg from "../../Images/direction.jpg";
import FilmmakingImg from "../../Images/filmMaking.jpg";
import MusicImg from "../../Images/music.jpg";


const WhatWeDo = () => {
  return (
    <div className="what-we-do-container">
      <h2 className="what-we-do-title">What we do</h2>
      <div className="grid-container">
        {/* Grid Items */}
      
        <Link to="/submit-profile" className="grid-item acting">
          <div className="giBlur"></div>
          <img src={ActingImg} alt="Acting" />
          <span className="grid-text">ACTING</span>
          
        </Link>
  
        
        <Link to="/submit-profile" className="grid-item writing">
        <div className="giBlur"></div>
          <img src={WritingImg} alt="Writing" />
          <span className="grid-text">WRITING</span>
          </Link>
  
      
        <Link to="/submit-profile" className="grid-item production">
        <div className="giBlur"></div>
          <img src={ProductionManagingImg} alt="Production Managing" />
          <span className="grid-text">PRODUCTION MANAGING</span>
          </Link>

        
        <Link to="/submit-profile" className="grid-item direction">
        <div className="giBlur"></div>
          <img src={DirectionImg} alt="Direction" />
          <span className="grid-text">DIRECTION</span>
          </Link>
       
     
        <Link to="/submit-profile" className="grid-item filmmaking">
        <div className="giBlur"></div>
          <img src={FilmmakingImg} alt="Filmmaking" />
          <span className="grid-text">FILMMAKING</span>
          </Link>
    
        
        
        <Link to="/submit-profile" className="grid-item music">
        <div className="giBlur"></div>
          <img src={MusicImg} alt="Music" />
          <span className="grid-text">MUSIC</span>
          </Link>
      
    
      </div>
    </div>
  );
};

export default WhatWeDo;
