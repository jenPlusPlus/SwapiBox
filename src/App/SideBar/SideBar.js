import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({ film })=>{
  return (
    <div className="side-bar-wrapper">
      <p className="film-text">
        {film.scrollText}
      </p>
      <h2 className="film-text">
        {film.title}
      </h2>
      <h3 className="film-text">
        {film.releaseDate}
      </h3>
    </div>

  );
};

SideBar.propTypes = {
  film: PropTypes.object
};

export default SideBar;
