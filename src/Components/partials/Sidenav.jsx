import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect ,logout} = useAuth0();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed sm:static bg-[#1F1E24] h-full border-r-2 border-zinc-500 pt-6 px-8 z-20 transition-all duration-300 ${
        isOpen ? 'w-[80%]' : 'w-0 sm:w-[23%]'
      } ${isOpen || window.innerWidth >= 640 ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden absolute top-4 right-4 text-2xl text-[#6556CD] z-50"
      >
        {isOpen ? <i className="ri-xing-line"></i> : <i className="ri-menu-fill text-[#6556CD]"></i>}
      </button>

      {/* Sidebar Content */}
      {isOpen || window.innerWidth >= 640 ? (
        <div className='flex flex-col'>
          {/* Logo */}
          <div className='flex justify-center sm:justify-start mb-3'>
            <i className="text-[#6556CD] mr-2 ri-tv-fill text-2xl "></i>
            <h2 className='text-xl sm:text-2xl font-bold flex'>
              <span className='hover:text-[#6556CD]'>Film</span>
              <span className='text-[#6556CD] hover:text-white'>Frenzy</span>
            </h2>
          </div>

          {/* Navigation Links */}
          <h2 className='text-lg sm:text-[1.3vw] mb-1 mt-2 font-semibold text-center sm:text-left'>New Feeds</h2>
          <nav className='flex flex-col items-center sm:items-start'>
            <Link to="/trending" className='hover:bg-[#6556CD] w-full hover:text-white mt-3 px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
              <i className="ri-fire-fill mr-1"></i>Trending
            </Link>
            <Link to="/popular" className='hover:bg-[#6556CD] w-full hover:text-white mt-3 sm:mt-[1vw] px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
              <i className="ri-bar-chart-fill mr-2"></i>Popular
            </Link>
            <Link to="/movies" className='hover:bg-[#6556CD] w-full hover:text-white mt-3 sm:mt-[1vw] px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
              <i className="ri-movie-2-fill mr-2"></i>Movies
            </Link>
            <Link to="/tvShows" className='hover:bg-[#6556CD] w-full hover:text-white mt-3 sm:mt-[1vw] px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
              <i className="ri-tv-2-fill mr-2"></i>TV Shows
            </Link>
            <Link to="/people" className='hover:bg-[#6556CD] w-full hover:text-white mt-3 sm:mt-[1vw] px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
              <i className="ri-group-fill mr-2"></i>People
            </Link>
          </nav>

          <hr className='h-[1px] mt-1 border-none bg-zinc-400' />

          {/* Website Information Links */}
          <h2 className='text-lg sm:text-[1.3vw] mb-1 mt-3 font-semibold text-center sm:text-left'>Website Information</h2>
          <nav className='flex flex-col items-center sm:items-start'>
            <Link to="/about" className='hover:bg-[#6556CD] w-full hover:text-white mt-3 px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
              <i className="ri-information-2-fill mr-2"></i>About
            </Link>
            <Link to="/contact" className='hover:bg-[#6556CD] w-full hover:text-white mt-2 px-4 py-3 rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400'>
              <i className="ri-phone-fill mr-2"></i>Contact Us
            </Link>
            
            <div><button className='hover:bg-[#6556CD] w-full hover:text-white mt-1 pr-[11.2vw]  pl-4 py-3  rounded-md text-base sm:text-[1.1vw] duration-300 text-zinc-400' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><i className="ri-logout-circle-line mr-2"></i>Log Out</button></div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

export default Sidenav;
