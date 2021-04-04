import React from 'react';
import '../assets/styles/Card.scss';
import logo from '../assets/static/triangleLogo.png';
const Card = ({ title, superHost, type, beds, rating, photo }) => {
  return (
    <div className="card">
      <figure className="card-img-container">
        <img src={photo} alt="" />
      </figure>
      <div className="card-stats">
        <div className="card-stats-wrapper">
          {superHost && <span className="card-host">super host</span>}
          <span className="card-size">
            {type}. {beds ? `${beds} beds` : ''}
          </span>
        </div>

        <span className="card-rate">
          <img src={logo} alt="" />
          {rating}
        </span>
      </div>
      <p className="card-location">{title}</p>
    </div>
  );
};

export default Card;
