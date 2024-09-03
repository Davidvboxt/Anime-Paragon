import React from "react";
import { Link } from "react-router-dom";

export const Cardrecommended = ({ all }) => {
  return (
    <Link to={`/anime/${all.title}`}>
      <div className='card'>
        <div className='cardImg'>
          <img src={all.images.jpg.image_url} alt='' />
        </div>
        {/* <h1>{all.title}</h1> */}
      </div>
    </Link>
  );
};
