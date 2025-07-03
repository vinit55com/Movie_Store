import React from 'react'
import netflix from '/netfix.jpg';
import { useNavigate } from 'react-router-dom';
function About() {
  const navigate = useNavigate();
  return (
    <div className={`h-screen w-screen bg-[#1F1E24] py-[6%] text-white flex overflow-x-hidden overflow-y-auto ${window.innerWidth<=640 ? "pr-3 leading-5":"px-[20%]"}`}>
      <i onClick={() => navigate(-1)} className="hover:text-[#1F1E24] text-white text-3xl mr-2 ri-arrow-left-line"></i>
      <div>
        <h1 className={` font-bold ml-3  ${window.innerWidth<=640 ? "text-3xl mt-2":"text-4xl"}`}>About Our Movie App</h1>
        <div className='h-[1px] bg-zinc-500 my-4'></div>
        <p className='text-zinc-300' >Welcome to FilmFrenzy®️, your ultimate destination for exploring the world of entertainment! Whether you're a movie buff, a TV series fanatic, or simply curious about your favorite actors and directors, we’ve got you covered.</p>

        <h2 className='text-2xl font-bold mt-3'>What We Offer:</h2>
        <div className='h-[1px] bg-zinc-500 my-4 w-[23%]'></div>

        <p className='mt-4  text-zinc-300'><small className='text-xl text-white font-bold'>👉🏻 Movies: </small> Discover the latest blockbusters, timeless classics, and hidden gems from around the world. Browse by genre, rating, or search for specific titles to find your next watch.</p>
        <p  className='mt-4 text-zinc-300'><small className='text-xl text-white font-bold' >👉🏻 TV Shows: </small>From binge-worthy series to must-watch episodes, explore our wide range of TV shows. Keep up with the hottest releases or revisit iconic shows you love.
        </p>
        <p className='mt-4 text-zinc-300'><small className='text-xl text-white font-bold'>👉🏻 Persons: </small> Get to know the stars behind the screen! Our app provides detailed profiles of actors, directors, and crew members. Track their careers and see where they shine in movies and TV.</p>
      
        <div className={`flex gap-4 text-xl  ${window.innerWidth<=640 ? " mt-3 ml-10":"ml-[40%]  mt-10 "} `}>
        <a href="https://www.youtube.com/channel/UCF0EyUsA6HOzV5rOrtUSvBQ"><i class="ri-youtube-fill"></i></a>
        <a href="https://www.facebook.com/themoviedb/"><i class="ri-facebook-fill"></i></a>
        <a href="https://www.instagram.com/tbbd/"><i class="ri-instagram-line"></i></a>
        <a href="https://x.com/tbd"><i class="ri-twitter-x-fill"></i></a>
        <a href="https://www.themoviedb.org/tv/253384-dancing-for-the-devil-the-7m-tiktok-cult"><i class="ri-tiktok-fill"></i></a>
        <a href="https://es.linkedin.com/company/themoviedb.org"><i class="ri-linkedin-box-fill"></i></a>
        </div>
        <small className={` text-sm text-zinc-600  ${window.innerWidth<=640 ? "ml-24 ":"ml-[48%] "}`}>NikhilKumar®️</small>
      </div>
    </div>
  )
}

export default About
