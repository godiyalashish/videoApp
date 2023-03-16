import React from 'react';
import User from "../assets/user.png";

const Comment = ({data}) => {
  return (
    <div className='p-2 bg-green-200 flex items-center shadow-lg my-2'>
    <img className='h-10 w-10 mx-2' alt='user' src={User} />
    <div>
      <p className='text-lg font-bold'>{data?.name}</p>
      <p>{data?.comment}</p>
    </div>
    </div>
  )
}

export default Comment