import React from 'react'
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Errorpage from './Errorpage';

function Trailer() {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const categories = pathname.includes("movie") ? "movie" : "tv" ;
    const ytvideo = useSelector((state)=> state[categories].info.videos);
  return (
    <div className='w-screen h-screen absolute z-[100] top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,.7)]'>
        <Link onClick={() => navigate(-1)} className="absolute  mr-2 ri-close-fill text-5xl top-[5%] right-[5%]"></Link>
      {ytvideo ?  <ReactPlayer controls height={600} width={1100} url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>:<Errorpage/>}
    </div>
  )
}

export default Trailer
