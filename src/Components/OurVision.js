import React from 'react'
import '../Components/os.css'
import { useEffect } from 'react';

function OurVision() {

useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

  return (
    <div className='osMain'>
      <h1>Our Vision</h1>
      <p>To architect and produce narratives that are intellectually rich, emotionally resonant, and visually arresting—stories that interrogate, celebrate, and reimagine the Indian experience in all its multiplicity. We are committed to fostering creative ecosystems that empower visionary storytellers, embrace cross-disciplinary collaboration, and uphold the highest standards of cinematic integrity. Through every frame, we seek to provoke thought, evoke feeling, and spark dialogue across borders and generations.</p>
    </div>
  )
}

export default OurVision