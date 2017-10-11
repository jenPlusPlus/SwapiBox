import React from 'react';

const SideBar = ({film})=>{
return(
  <div>
    <p>
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
