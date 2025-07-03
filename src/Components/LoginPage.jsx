import bg from '../../public/bg.jpg'
import { useAuth0 } from "@auth0/auth0-react";
function LoginPage() {
    const { loginWithRedirect } = useAuth0();
  return (
    <div
    style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.9)), url(${bg})`,
        backgroundPosition: "top",
        backgroundSize: "cover"
    }}
     className='h-screen w-screen '>
      <nav className='flex px-[17%] py-4'>
        <i className="text-[#6556CD] mr-2 ri-tv-fill text-4xl "></i>
        <h2 className='text-xl sm:text-2xl font-bold flex mt-2 text-[#cfcce4]'>FilmFrenzy</h2>
      </nav>
          
        <div className='flex flex-col items-center '>
          <h1 className={`text-white  mt-32  ${ window.innerWidth <= 640 ? 'text-4xl font-bold' : 'text-6xl font-extrabold '}`}>Unlimited movies,</h1>
          <h1 className={`text-white ${ window.innerWidth <= 640 ? 'text-4xl font-bold' : 'text-6xl font-extrabold'}`}>TV shows and more</h1>
          <h3 className='text-white text-xl mt-2'>Starts at Free. Enjoy Every time.</h3>
          <button className={` py-3 bg-[#6556CD] rounded mt-8 text-white text-xl  ${ window.innerWidth <= 640 ? 'px-7' : 'px-12'}`} onClick={() => loginWithRedirect()}>LogIn <i className="ri-arrow-right-line ml-3"></i></button> 
        </div>
      </div>
  )
}
export default LoginPage
