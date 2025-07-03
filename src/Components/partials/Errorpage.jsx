import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Errorpage() {
  const navigate = useNavigate();
  return (
    <div className='h-screen w-screen bg-black flex items-center justify-center flex-col'>
      <Link onClick={() => navigate(-1)} className="absolute z-50  mr-2 ri-close-fill text-5xl top-[5%] right-[5%]"></Link>
      <img className='h-[50%] w-[30%]  bg-black' src="/x.webp" alt="" />
      <h1 className='text-2xl font-bold ml-8'>Not Available!😥</h1>
    </div>
  );
}

export default Errorpage;
