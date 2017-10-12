import React from 'react';

const SideBar = ({ film })=>{
  return (
    <div className="side-bar-wrapper">
      <p className="film-text">
        {film.scrollText}
        <br />
        {film.title}
        <br />
        {film.releaseDate}
      </p>
    </div>

  );
};

export default SideBar;
