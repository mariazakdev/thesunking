import React from 'react';
import About from '../../Components/About/About';
import Hero from '../../Components/Hero/Hero';
import './HomePage.scss';

export default function HomePage() {
  return (
    <div className="homepage">
      <section id="home" className="home" title="Welcome to Our Theatre" modifier="home">
        <Hero />
     </section>
      <section id="about" className="about" title="About Us" modifier="about">
        <h2>About Us</h2>
        About Us Content
        <About />
      </section>
      <section id="shows" className="shows" title="Current Shows" modifier="shows">
        <h2>Current Shows</h2>
        Current Shows Content
      </section>
      <section id="tickets" className="tickets" title="Tickets" modifier="tickets">
        <h2>Tickets</h2>
        Tickets Content
      </section>
      <section id="gallery" className="gallery" title="Gallery" modifier="gallery">
        <h2>Gallery</h2>
        Gallery Content
      </section>
      <section id="news" className="news" title="News" modifier="news">
        <h2>News</h2>
        News Content
      </section>
      <section id="contact" className="contact" title="Contact Us" modifier="contact">
        <h2>Contact Us</h2>
        Contact Us Content
      </section>
      <section id="support" className="support" title="Support Us" modifier="support">
        <h2>Support Us</h2>
        Support Us Content
      </section>
    </div>
  );
}
