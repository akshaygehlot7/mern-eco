import { Rating } from '@material-ui/lab'
import React from 'react'
import profile from "../../Assets/images/Profile.png"

const ReviewCard = ({ review}) => {
    const options = {
        value: review.rating,
        readOnly: true,
        precision: 0.5,
      };
  return (
    <div className='reviewCard'>
        <img src={profile} alt="User" />
        <p>{review.name}</p>
        <Rating {...options}/>
        <span className='reviewCardComment'>{review.comment}</span>
    </div>
  );
};

export default ReviewCard
