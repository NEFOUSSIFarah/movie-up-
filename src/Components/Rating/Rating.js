import { Rate } from 'antd';
import React from 'react';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = ({isMovieRating, rating, setRating, movieRating}) => {
 const handleChange = value => {
    setRating(value)
 }

  return (
    isMovieRating  ? 
    <span>
        <Rate disabled  value={movieRating} />
   </span>
   : 
    <span>
      <Rate tooltips={desc}
      onChange={handleChange} 
      value={rating}
       />
    </span>
  );
};

export default Rating;