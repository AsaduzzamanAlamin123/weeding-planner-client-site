import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div class="card w-full bg-primary text-white-content">
        <div class="card-body jutify center items-center text-center">
          <h2 class="card-title font-mono">Cookies!</h2>
          <p className='font-mono'>{review.Text}</p>
                                        <div class="flex justify-between  items-center">
                                        <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-20">
    <img src={review.img} />
  </div>
</div>
            <div>
                <h2 className='2xl'>{review.name}</h2>
                <p>california</p>

            </div>
           
        </div>
        </div>
      </div>
    );
};

export default ReviewCard;