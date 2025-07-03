import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/Axios';
import Loader from './Loader';
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
   document.title ="FilmFrenzy | Trending Movies"
  const [categories, setcategories] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore,sethashmore] = useState(true);

  const getheadertrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${categories.toLowerCase()}/${duration}?page=${page}`);
        if(data.results.length > 0) {
          settrending((prevStarte)=>[...prevStarte, ...data.results]);
          setpage(page + 1);
        }else{
          sethashmore(false);
        }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshhandler =()=>{
    if(trending.length===0){
      getheadertrending();
    }else{
      setpage(1);
      settrending([]);
      getheadertrending(); 
    }
  }
  
  useEffect(() => {
    refreshhandler();
  }, [categories, duration])

  const navigate = useNavigate();
  return trending.length > 0 ? (
    <div className={`bg-[#1F1E24] h-screen w-screen relative overflow-x-hidden`}>
      <nav className={`px-[2%]  py-3 text-zinc-400 font-semibold text-2xl flex items-center justify-between ${ window.innerWidth <= 640 ? 'mt-[13%]' : ''}`}>
        <div className="flex items-center space-x-3">
          <h1>
            <i onClick={() => navigate(-1)} className={`hover:text-[#1F1E24] mr-2 ri-arrow-left-line `}></i>Trending
          </h1>
        </div>

        <div className={`flex-grow px-5 ${ window.innerWidth <= 640 ? 'absolute top-[0%] -left-10 z-20' : ''}`}>
          <Topnav className={`w-full h-[3rem] px-4 py-2 rounded-md text-lg  `} />
        </div>

        <div className={`flex items-center  space-x-2 ${ window.innerWidth <= 640 ? 'w-[70%]' : 'w-[20%]'}`}>
          <Dropdown
            title="Filter"
            options={["ALL","TV", "Movie"]}
            func={(e) => setcategories(e.target.value)}
            className="w-1/2 h-full px-2  text-sm"
          />
          <Dropdown
            title="Duration"
            options={["day","week"]}
            func={(e) => setduration(e.target.value)}
            className="w-1/2 h-full px-2 py-1 text-sm"
          />
        </div>

      </nav>
      <InfiniteScroll
        dataLength={trending.length}
        next={getheadertrending}
        hasMore={hasMore}
        loader={<h1>Loading..</h1>}
      >
        <div className={`${ window.innerWidth <= 640 ? 'mx-11' : ''}`}><Cards data={trending} title={categories}/></div>
      </InfiniteScroll>
    </div>
  ) : <Loader />
}

export default Trending


