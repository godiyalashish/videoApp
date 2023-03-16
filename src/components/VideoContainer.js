import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_API_LINK } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    useEffect(()=>{
        getVideos();
    },[]);
    const[videos, setVideos] = useState([])
    const getVideos = async() =>{
        const data = await fetch(YOUTUBE_API_LINK);
        const json = await data.json();
        setVideos(json.items);
    }
    if(videos.length<1) return(<div>Loading.....</div>)
  return (
    <div className='flex flex-wrap justify-center'>
    {videos.map((video) => {
        return(
            <Link key={video.id} to={"/watch?v="+video.id}>
                <VideoCard info = {video} />
            </Link>
        )
    })}
        
    </div>
  )
}

export default VideoContainer