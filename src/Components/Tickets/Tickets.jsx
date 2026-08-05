import React from 'react';
import TicketPoster from '../../Assets/Images/poster.jpg'; 
import './Tickets.scss';

export default function Tickets() {
  return (
    <div className="tickets-component">
      <h2>Get Your Tickets</h2>
      <div className="poster-container">
        <a 
          href="https://eventmanager.vbotickets.com/tickets.asp?Page=Event&eid=203119" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={TicketPoster} 
            alt="Event Poster" 
            className="ticket-poster" 
          />
        </a>
      </div>
      <a 
        href="https://eventmanager.vbotickets.com/tickets.asp?Page=Event&eid=203119" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-tickets"
      >
        Buy Tickets Now
      </a>
    </div>
  );
}