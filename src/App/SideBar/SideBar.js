import React from 'react';

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

export default SideBar;
