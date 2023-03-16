import React from 'react'
import UserIcon from "../assets/user.png"



const LiveMessage = ({name, message}) => {
  return (
    <div className='flex gap-x-2 p-2 items-center hover:bg-slate-200'>
        <img className='h-5 w-5' alt={name} src={UserIcon}/>
        <span className='font-bold'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default LiveMessage