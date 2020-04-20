import React from 'react';
import './Loader.scss';

const Loader = () => (
  <div className="loader-container">
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

Loader.propTypes = {

};

export default Loader;
