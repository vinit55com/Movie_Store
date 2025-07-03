import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/Axios';
import Loader from './Loader';
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

function Popular() {
    document.title ="FilmFrenzy | Popular Movies"
    const [categories, setcategories] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore,sethashmore] = useState(true);
  
    const getheaderpopular = async () => {
      try {
        const { data } = await axios.get(`${categories.toLowerCase()}/popular?page=${page}`);
          if(data.results.length > 0) {
            setpopular((prevStarte)=>[...prevStarte, ...data.results]);
            setpage(page + 1);
          }else{
            sethashmore(false);
          }
      } catch (err) {
        console.log(err);
      }
    };
  
    const refreshhandler =()=>{
      if(popular.length===0){
        getheaderpopular();
      }else{
        setpage(1);
        setpopular([]);
        getheaderpopular(); 
      }
    }
    
    useEffect(() => {
      refreshhandler();
    }, [categories])
  
    const navigate = useNavigate();
    return popular.length > 0 ? (
        <div className='bg-[#1F1E24] h-screen w-screen relative overflow-x-hidden'>
          <nav className={`px-[2%]  py-3 text-zinc-400 font-semibold text-2xl flex items-center justify-between ${ window.innerWidth <= 640 ? 'mt-[13%]' : ''}`}>
            <div className="flex items-center space-x-3">
              <h1>
                <i onClick={() => navigate(-1)} className="hover:text-[#1F1E24] mr-2 ri-arrow-left-line"></i>Popular
              </h1>
            </div>
    
            <div  className={`flex-grow px-5 ${ window.innerWidth <= 640 ? 'absolute top-[0%] -left-10 z-20' : ''}`}>
              <Topnav className="w-full h-[3rem] px-4 py-2 rounded-md text-lg" />
            </div>
    
            <div className={`flex items-center  space-x-2 ${ window.innerWidth <= 640 ? 'w-[50%] ' : 'w-[20%]'}`}>
              <Dropdown
                title="Filter"
                options={["ALL","TV", "Movie"]}
                func={(e) => setcategories(e.target.value)}
                className="w-1/2 h-full px-2  text-sm"
              />
              
            </div>
    
          </nav>
          <InfiniteScroll
            dataLength={popular.length}
            next={getheaderpopular}
            hasMore={hasMore}
            loader={<h1>Loading..</h1>}
          >
            <div className={`${ window.innerWidth <= 640 ? 'mx-11' : ''}`}><Cards data={popular} title={categories}/></div>
          </InfiniteScroll>
        </div>
      ) : <Loader />
}

export default Popular
