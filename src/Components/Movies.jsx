import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/Axios';
import Loader from './Loader';
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

function Movies() {
    document.title = "FilmFrenzy | Movies";
    
    const [categories, setcategories] = useState("now_playing");
    const [movies, setmovies] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethashmore] = useState(true);

    const getheadermovies = async () => {
      try {
        const { data } = await axios.get(`/movie/${categories.toLowerCase()}?page=${page}`);
        if (data.results.length > 0) {
          setmovies((prevState) => [...prevState, ...data.results]);
          setpage((prevPage) => prevPage + 1);
        } else {
          sethashmore(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const refreshhandler = () => {
      setpage(1);
      setmovies([]);
      sethashmore(true);
      getheadermovies();
    };

    useEffect(() => {
      refreshhandler();
    }, [categories]);

    const navigate = useNavigate();

    return movies.length > 0 ? (
      <div className='bg-[#1F1E24] h-screen w-screen relative overflow-x-hidden'>
        <nav className={`px-[2%]  py-3 text-zinc-400 font-semibold text-2xl flex items-center justify-between ${ window.innerWidth <= 640 ? 'mt-[13%]' : ''}`}>
          <div className="flex items-center space-x-3">
            <h1>
              <i onClick={() => navigate(-1)} className="hover:text-[#1F1E24] mr-2 ri-arrow-left-line"></i>Movies
            </h1>
          </div>

          <div  className={`flex-grow px-5 ${ window.innerWidth <= 640 ? 'absolute top-[0%] -left-10 z-20' : ''}`}>
            <Topnav className="w-full h-[3rem] px-4 py-2 rounded-md text-lg" />
          </div>

          <div className={`flex items-center  space-x-2 ${ window.innerWidth <= 640 ? 'w-[60%] ' : 'w-[20%]'}`}>
            <Dropdown
              title="Filter"
              options={[ "top_rated", "upcoming", "now_playing","popular"]}
              func={(e) => setcategories(e.target.value)}
              className="w-1/2 h-full px-2 text-sm"
            />
          </div>
        </nav>

        <InfiniteScroll
          dataLength={movies.length}
          next={getheadermovies}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <div className={`${ window.innerWidth <= 640 ? 'mx-11' : ''}`}><Cards data={movies} title="movie" /></div>
        </InfiniteScroll>
      </div>
    ) : <Loader />;
}

export default Movies;
