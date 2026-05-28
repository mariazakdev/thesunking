import React from 'react';
import './SupportUs.scss'; // Ensure you have corresponding CSS for styling

function SupportUs() {
  return (
    <div className="support-us">
      <h2>Support "The Sun King"</h2>

      <section className="support-us__importance-of-support">
        <h3>Why Your Support Matters</h3>
        <p>Creating a high-quality theatre production requires significant resources, including funding for costumes, sets, rehearsal space, and talented actors. Your support helps us bring this ambitious project to life and ensures that we can deliver an unforgettable experience to our audience. Every contribution, big or small, makes a difference.</p>
      </section>
      
      <section className="ways-to-contribute">
        <h3>How You Can Support Us</h3>
        <ul>
          <li><strong>Donate:</strong> Make a one-time or recurring donation to help cover production costs.</li>
          <li><strong>Sponsor:</strong> Become a corporate sponsor and receive special recognition and benefits.</li>
          <li><strong>Volunteer:</strong> Offer your time and skills to assist with various aspects of the production.</li>
          <li><strong>Spread the Word:</strong> Share our campaign with your friends, family, and social media networks.</li>
        </ul>
      </section>
      
      <section className="acknowledgments">
        <h3>Our Thanks</h3>
        <p>We are deeply grateful for the generosity of our supporters. Your contributions enable us to pursue our passion for theatre and share the magic of storytelling with our community. As a token of our appreciation, all supporters will be acknowledged in our program, and major donors will receive exclusive perks such as backstage tours and meet-and-greet opportunities with the cast and crew.</p>
      </section>
    </div>
  )
}

export default SupportUs;
