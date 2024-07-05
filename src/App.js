import React from 'react';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';
import './App.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Section id="home" title="Welcome to Our Theatre" modifier="home">
        Home Content
      </Section>
      <Section id="about" title="About Us" modifier="about">
        About Us Content
      </Section>
      <Section id="shows" title="Current Shows" modifier="shows">
        Current Shows Content
      </Section>
      <Section id="tickets" title="Tickets" modifier="tickets">
        Tickets Content
      </Section>
      <Section id="gallery" title="Gallery" modifier="gallery">
        Gallery Content
      </Section>
      <Section id="news" title="News" modifier="news">
        News Content
      </Section>
      <Section id="contact" title="Contact Us" modifier="contact">
        Contact Us Content
      </Section>
      <Section id="support" title="Support Us" modifier="support">
        Support Us Content
      </Section>
    </div>
  );
};

export default App;
