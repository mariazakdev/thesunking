import React from 'react';
import vid1 from '../../Assets/Images/VID-20251124-WA0000.mp4';

import './SupportUs.scss'; // Ensure you have corresponding CSS for styling

function SupportUs() {
  return (
    <div className="support-us">
      <h2>Support "The Sun King"</h2>

      <section className="support-us__importance-of-support">

  <div className="support-text">
    <h3>Why Your Support Matters</h3>
    <p>Creating a high-quality theatre production requires significant resources...</p>

    <h3>How You Can Support Us</h3>
    <ul>
      <li><strong>Donate:</strong> Make a one-time or recurring donation...</li>
      <li><strong>Sponsor:</strong> Become a corporate sponsor...</li>
      <li><strong>Volunteer:</strong> Offer your time and skills...</li>
      <li><strong>Spread the Word:</strong> Share our campaign...</li>
    </ul>

    <h3>Our Thanks</h3>
    <p>We are deeply grateful for the generosity of our supporters...</p>
  </div>

  <div className="support-video">
    <video src={vid1} controls muted loop />
  </div>

</section>

    </div>
  )
}

export default SupportUs;
