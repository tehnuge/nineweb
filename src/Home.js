import React from 'react';
import Card from './Card';

const Home = props => {
  return (
    <div className="body">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <img data-aos="fade-left" src={props.imgBg} alt="server" className="main-image" />
          <h2>Leader in Cloud Web Hosting</h2>
        </div>
        <div className="d-flex cards justify-content-between">
          {props.cards.map(card => {
            return (
              <Card name={card.name} li={card.li} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home;