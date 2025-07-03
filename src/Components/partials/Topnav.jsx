import axios from '../../utils/Axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

function Topnav() {
  const [query,setquery]= useState("");

  const [searches,setserches]=useState([]);
  const getSearches = async () =>{
    try{
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setserches(data.results);
    }catch(e){
      console.error(e);
    }
  }

  useEffect(()=>{
    getSearches();
  },[query])

  return (
    <div className='w-full h-[8vh] relative flex items-center justify-start ml-[15%] my-2 '>
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input onChange={(e)=> setquery(e.target.value)} value={query} className='w-[60%] p-4 mx-5 text-zinc-200 text-xl outline-none border-none bg-transparent ' type="text" placeholder='Search anything' />
      
      {query.length>0 && <i onClick={()=>setquery("")} className={`text-zinc-400 text-3xl ri-close-large-line  ${ window.innerWidth <= 640 ? 'absolute top-3 left-64' : ''}`}></i>}

      <div className={`absolute z-50  top-[8vh]  max-h-[55vh] bg-zinc-200  overflow-auto rounded ${ window.innerWidth <= 640 ? 'w-[95.5%] -left-10' : 'w-[60%] left-[4vw]  '}`}>
        {searches.map((s,i)=>(  <Link  to={`/${s.media_type }/details/${s.id}`} key={i} className='hover:text-black hover:bg-zinc-300 duration-300  w-full py-3 px-5 flex items-center justify-start text-zinc-600 font-semibold border-b-2 border-zinc-100'>
          <img className='w-[18vh] h-[17vh] object-cover mr-6 shadow-lg' src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: noimage} alt="" />
          <span>{s.name || s.title || s.original_name}</span>
    </Link>))}
      </div>
    </div>
  )
}
export default Topnav
