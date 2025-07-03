import React from 'react'
import { Link } from 'react-router-dom'

function Header({data}) {
    
    return (
        <div 
        style={{
            background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}
        className='h-[60vh] w-full p-[5%] flex flex-col items-start justify-end'>

        <h1 className={`font-black text-white ${ window.innerWidth <= 640 ? 'text-3xl font-bold w-full' : 'w-[70%] text-5xl '}`}>
            {data.name || data.title || data.original_title || data.original_name}
        </h1>

        <p className={` my-2 leading-5 ${ window.innerWidth <= 640 ? 'w-full' : 'w-[70%]'}`}>{data.overview.slice(0,200)}...
            <Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-400'>more</Link>
        </p>

        <p>
        <i className="text-yellow-500  ri-megaphone-fill"></i> {data.release_date || "No Information"}
        <i className="text-yellow-500  ml-5 ri-album-fill"></i> {data.media_type.toUpperCase()}
        </p>

        <Link to={`/${data.media_type}/details/${data.id}/trailer`}  className='bg-[#6556CD] p-3 mt-4 rounded-sm'>Watch Trailer</Link>
    </div>


  )
}

export default Header
