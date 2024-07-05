import React from 'react';
import { Element } from 'react-scroll';
import './Section.scss';

const Section = ({ id, title, children, modifier }) => {
  return (
    <Element name={id} className={`section section--${modifier}`}>
      <div className="section__title">{title}</div>
      <div className="section__content">{children}</div>
    </Element>
  );
};

export default Section;
