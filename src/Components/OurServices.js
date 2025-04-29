import React from 'react'
import { useEffect } from 'react';

function OurServices() {

useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

  return (
    <div className='osMain'>
        <h1>Our Services</h1>
        <p>We provide comprehensive creative and production solutions, including:</p>
        <ul>
            <li>Script Development & Writing</li>
            <li>Creative Direction
            </li>
            <li>Casting & Talent Management
            </li>
            <li>Production Planning & Execution
            </li>
            <li>Post-Production (Editing, Sound, VFX)
            </li>
        </ul>
        <p>Our strength lies in delivering high-impact, story-driven content for films, OTT platforms, and digital media.</p>
    </div>
  )
}

export default OurServices