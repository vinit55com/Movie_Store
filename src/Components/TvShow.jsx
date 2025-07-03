import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/Axios';
import Loader from './Loader';
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

function TvShow() {
    document.title = "FilmFrenzy | TV Shows";

    // Initial state
    const [categories, setcategories] = useState("popular"); // Changed default to "popular"
    const [TV, setTV] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethashmore] = useState(true);

    // Fetch TV shows from the API
    const getheaderTV = async () => {
        try {
            const { data } = await axios.get(`/tv/${categories.toLowerCase()}?page=${page}`);
            if (data.results.length > 0) {
                setTV((prevState) => [...prevState, ...data.results]);
                setpage((prevPage) => prevPage + 1);  // Correct way to update page
            } else {
                sethashmore(false); // No more data
            }
        } catch (err) {
            console.log(err);
        }
    };

    // Refresh when category changes
    const refreshhandler = () => {
        setpage(1); // Reset page to 1
        setTV([]); // Clear existing TV shows
        sethashmore(true); // Reset hasMore flag
        getheaderTV(); // Fetch data
    };

    // Re-fetch data when category or page changes
    useEffect(() => {
        refreshhandler();
    }, [categories]);

    const navigate = useNavigate();

    // Render the TV shows or Loader component
    return TV.length > 0 ? (
        <div className='bg-[#1F1E24] h-screen w-screen relative overflow-x-hidden'>
            <nav className={`px-[2%]  py-3 text-zinc-400 font-semibold text-2xl flex items-center justify-between ${ window.innerWidth <= 640 ? 'mt-[13%]' : ''}`}>
                <div className="flex items-center space-x-3">
                    <h1>
                        <i onClick={() => navigate(-1)} className="hover:text-[#1F1E24] mr-2 ri-arrow-left-line"></i>TV Shows 
                    </h1>
                </div>

                <div className={`flex-grow px-5 ${ window.innerWidth <= 640 ? 'absolute top-[0%] -left-10 z-20' : ''}`}>
                    <Topnav className="w-full h-[3rem] px-4 py-2 rounded-md text-lg" />
                </div>

                <div className={`flex items-center  space-x-2 ${ window.innerWidth <= 640 ? 'w-[60%] ' : 'w-[20%]'}`}>
                    <Dropdown
                        title="Filter"
                        options={["popular", "top_rated", "on_the_air", "airing_today"]}
                        func={(e) => setcategories(e.target.value)}
                        className="w-1/2 h-full px-2 text-sm"
                    />
                </div>
            </nav>

            <InfiniteScroll
                dataLength={TV.length}
                next={getheaderTV} // Function to load more items
                hasMore={hasMore} // Boolean to control if more data can be loaded
                loader={<h1>Loading...</h1>} // Loading text or spinner
            >
                <div className={`${ window.innerWidth <= 640 ? 'mx-11' : ''}`}><Cards data={TV} title="tv" /></div>
            </InfiniteScroll>
        </div>
    ) : <Loader />;
}

export default TvShow;
