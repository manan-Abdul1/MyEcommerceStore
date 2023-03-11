import React from "react";
import './Rating.css'
const Rating = ({ value }) => {
  const MAX_STARS = 5;
  const stars = [];

  for (let i = 0; i < MAX_STARS; i++) {
    if (i < value) {
      stars.push(<i className="fa fa-star checked" key={i}></i>);
    } else {
      stars.push(<i className="fa fa-star" key={i}></i>);
    }
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
