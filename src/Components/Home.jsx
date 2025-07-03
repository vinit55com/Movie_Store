import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import Header from './partials/Header'
import axios from '../utils/Axios'
import Horizontilacards from './partials/Horizontilacards'
import Dropdown from './partials/Dropdown'
import Loader from './Loader'
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from './LoginPage'

function Home() {
    document.title ="FilmFrenzy | HomePage"

    const [wallpaper,setwallpaper] = useState(null);
    const [trending,settrending] = useState([]);
    const [categories, setcategories] = useState("all");
    const { isAuthenticated} = useAuth0();

    const getheaderwallpaper = async()=>{
      try{
        const {data} = await axios.get('/trending/all/day');
        let randomdata = data.results[(Math.random()*data.results.length).toFixed()];
        setwallpaper(randomdata);
        
      }catch(err){
        console.log(err);
      }
    }
// console.log(wallpaper);
// console.log(trending);
// console.log(categories);
    const getheadertrending = async () => {
      try {
        const { data } = await axios.get(`/trending/${categories.toLowerCase()}/day`);
        settrending(data.results);
      } catch (err) {
        console.log(err);
      }
    };    
    

    useEffect(()=>{
      getheadertrending();
      !wallpaper && getheaderwallpaper();
    },[categories])  

  return wallpaper && trending ?(
      isAuthenticated ? (
        <div className='w-screen h-screen bg-[#1F1E24] text-white flex overflow-hidden relative '>
        { window.innerWidth <= 640 ?<i className="ri-menu-fill text-[#6556CD] absolute z-10 text-3xl top-5 left-2"></i>:<h1></h1>}
          <Sidenav/>
        <div className={`h-full   overflow-y-auto overflow-x-hidden  ${ window.innerWidth <= 640 ? 'w-screen' : 'w-[77%] '}`}>
          <Topnav/>
          <Header data={wallpaper}/>

          <div className='flex justfiy-btween my-4 mx-5 '>
                <div  ><h1 className='text-3xl text-zinc-400 font-bold'>Trending</h1></div>
               <div className={`  ${ window.innerWidth <= 640 ? 'ml-[30%]' : 'ml-[57%]'}`}> <Dropdown title="Filter" options={["TV","Movie","ALL"]} func={(e)=>setcategories(e.target.value)} /></div>
            </div>
          <Horizontilacards data={trending} fnc={setcategories}/>
        </div>
      </div>
      ):(<LoginPage/>)
  ):<Loader/>
}

export default Home


//domain
//dev-s8h85aeixs6zmjoj.us.auth0.com
//client id
//HWAmGV2N3jAa9V3EBNApiDly4Y5533iF