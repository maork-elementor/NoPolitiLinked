import React from 'react';
import logo from '../../assets/img/no-more-politics-5be390.jpg';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>No-PolitiLinked</h1>
      <h3>
        All the news you want to know, without the politics you don't.
      </h3>
    </div>
  );
};

export default Popup;
