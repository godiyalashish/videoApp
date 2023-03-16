import React from 'react'

const ButtonsList = () => {
    const btn = ["All", "mixes", "Music", "Thriller", "Gaming", "Live", "News", "Entertainment"]
  return (
    <div className='flex items-center gap-x-2 px-2 pt-5'>
    {btn.map((b, i)=>{
        return(<button key = {i} className='border-gray-200 border-1 rounded-xl px-2 py-1 bg-slate-200'>{b}</button>)
    })}
        
    </div>
  )
}

export default ButtonsList