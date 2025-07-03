import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/Axios';
import Loader from './Loader';
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';
function People() {
    document.title = "FilmFrenzy | people";

    // Initial state
    const [categories, setcategories] = useState("people"); // Changed default to "popular"
    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethashmore] = useState(true);

    // Fetch people shows from the API
    const getheaderpeople = async () => {
        try {
            const { data } = await axios.get(`/person/popular?page=${page}`);
            if (data.results.length > 0) {
                setpeople((prevState) => [...prevState, ...data.results]);
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
        setpeople([]); // Clear existing people shows
        sethashmore(true); // Reset hasMore flag
        getheaderpeople(); // Fetch data
    };

    // Re-fetch data when category or page changes
    useEffect(() => {
        refreshhandler();
    }, [categories]);

    const navigate = useNavigate();
 
    return people.length > 0 ? (
        <div className='bg-[#1F1E24] h-screen w-screen relative overflow-x-hidden'>
            <nav className={`px-[2%]  py-3 text-zinc-400 font-semibold text-2xl flex items-center justify-between ${ window.innerWidth <= 640 ? 'mt-[16%]' : ''}`}>
                <div className="flex items-center space-x-3">
                    <h1>
                        <i onClick={() => navigate(-1)} className="hover:text-[#1F1E24] mr-2 ri-arrow-left-line"></i>People 
                    </h1>
                </div>

                <div className={`flex-grow px-5 ${ window.innerWidth <= 640 ? 'absolute top-[0%] -left-10 z-20' : ''}`}>
                    <Topnav className="w-full h-[3rem] px-4 py-2 rounded-md text-lg" />
                </div>
            </nav>

            <InfiniteScroll
                dataLength={people.length}
                next={getheaderpeople} // Function to load more items
                hasMore={hasMore} // Boolean to control if more data can be loaded
                loader={<h1>Loading...</h1>} // Loading text or spinner
            >
            <div className={`${ window.innerWidth <= 640 ? 'mx-11' : ''}`}><Cards data={people} title="person" /></div>
            </InfiniteScroll>
        </div>
    ) : <Loader />;
}

export default People
