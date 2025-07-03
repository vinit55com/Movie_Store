import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

function Cards({ data,title }) {
  return (
    <div className='flex flex-wrap gap-6 w-full bg-[#1F1E24] pl-[2.5%] pt-2 '>
      {data.map((c,i)=>(
        <Link  to={`/${c.media_type || title}/details/${c.id}`} className='w-[35vh] mr-[1.4vw] mb-5 relative' key={i}>
            <img className='h-[55vh] object-cover shadow-2xl hover:scale-110 duration-100' src={c.poster_path || c.backdrop_path || c.profile_path ?`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`:noimage} alt="" />
            <h1 className='text-2xl text-zinc-300 font-bold mt-2'>{c.name || c.title || c.original_title || c.original_name}</h1>
            {c.vote_average && (<div className='absolute right-[-10%] bottom-[25%] h-[7vh] w-[7vh] bg-yellow-600 rounded-full flex items-center justify-center text-xl text-white'>{(c.vote_average*10).toFixed()} <sup>%</sup></div>)}
            
        </Link>
      ))}
    </div>
  )
}

export default Cards

