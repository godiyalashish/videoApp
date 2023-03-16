import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='w-72 rounded-xl m-2 shadow-lg'>
        <img className="rounded-xl" alt="video" src ={thumbnails.medium.url}/>
        <div className='flex flex-col p-2'>
            <div className='font-bold py-2'>{channelTitle}</div>
            <div>{title}</div>
            <div>{statistics.viewCount} Views</div>
        </div>
    </div>
  )
}

export default VideoCard