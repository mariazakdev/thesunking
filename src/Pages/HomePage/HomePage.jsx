import React from 'react';
import About from '../../Components/About/About';
import Hero from '../../Components/Hero/Hero';
import ContactPage from '../ContactPage/ContactPage';
import CrewCast from '../../Components/CrewCast.jsx/CrewCast';
import './HomePage.scss';


export default function HomePage() {
  return (
    <div className="homepage">
      <section id="home" className="home" title="Welcome to Our Theatre" modifier="home">
        <Hero />
     </section>
      <section id="about" className="about" title="About Us" modifier="about">
        <h2>About Us</h2>
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
        <h2>Gallery</h2>
        Gallery 
      </section>
      {/* <section id="news" className="news" title="News" modifier="news">
        <h2>News</h2>
        News 
      </section> */}
      <section id="contact" className="contact" title="Contact Us" modifier="contact">
        <h2>Contact Us</h2>
       <ContactPage/>
      </section>
      <section id="support" className="support" title="Support Us" modifier="support">
        <h2>Support Us</h2>
        Support Us 
      </section>
    </div>
  );
}
