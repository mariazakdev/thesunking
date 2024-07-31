import React from 'react';
import About from '../../Components/About/About';
import Hero from '../../Components/Hero/Hero';
import ContactPage from '../ContactPage/ContactPage';
import Gallery from '../../Components/Gallery/Gallery';
import SupportUs from '../../Components/SupportUs/SupportUs';
import './HomePage.scss';

export default function HomePage() {
  return (
    <div className="homepage">
      <section id="home" className="home" title="Welcome to Our Theatre" modifier="home">
        <Hero />
     </section>
      <section id="about" className="about" title="About Us" modifier="about">
        <About />
      </section>
      {/* <section id="team" className="team" title="The Team" modifier="team">
        <h2>Meet The Team</h2>
      <CrewCast/>
      </section> */}
      {/* <section id="tickets" className="tickets" title="Tickets" modifier="tickets">
        <h2>Tickets</h2>
        Tickets 
      </section> */}
      <section id="gallery" className="gallery" title="Gallery" modifier="gallery">
        <Gallery  />
      </section>
      {/* <section id="news" className="news" title="News" modifier="news">
        <h2>News</h2>
        News 
      </section> */}
      <section id="contact" className="contact" title="Contact Us" modifier="contact">
       <ContactPage/>
      </section>
      <section id="support" className="support" title="Support Us" modifier="support">
      <  SupportUs />
      </section>
    </div>
  );
}
