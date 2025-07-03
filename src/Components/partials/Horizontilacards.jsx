import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import noimage from '/noimage.jpg'

function Horizontilacards({ data }) {
    return (
       
  
            <div className={`w-full   flex gap-4  overflow-x-auto overflow-y-hidden mb-8  ${ window.innerWidth <= 640 ? 'h-[45vh]' : 'h-[54vh]'}`}>

                {data.map((d, i) => (
                    <Link to={`/${d.media_type }/details/${d.id}`} key={i} className={` relative hover:scale-110 duration-75  shadow-lg   shadow-black bg-zinc-900 ${ window.innerWidth <= 640 ? 'min-w-[60%] h-[40vh]' : 'min-w-[22%] h-[48vh]'}`}>
                        <i className="absolute py-[1px] px-3 text-yellow-500 rounded-sm  top-[1%] font-semibold ri-star-fill"></i>
                        <img className={`w-full object-cover ${ window.innerWidth <= 640 ? 'h-[20vh]' : 'h-[25vh]'}`} src={d.backdrop_path || d.profile_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`:noimage} alt="" />
                        <div className='p-2'>
                            <h1 className='text-xl font-black text-white'>
                                {d.name || d.title || d.original_title || d.original_name}
                            </h1>
                            <p className='w-full text-sm my-2 leading-4'>{d.overview.slice(0, 50)}...
                                <Link className='text-zinc-400'>more</Link>
                            </p>
                        </div>
                    </Link>
                ))}

            </div>
    )
}

export default Horizontilacards
