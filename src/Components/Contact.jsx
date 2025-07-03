import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  // web3 from code
  const [result, setResult] = React.useState("");
  const [submit,SetSubmit] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "76aa202c-ce09-4bc3-a78c-bea6237300c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      SetSubmit(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  // web3 from code

  return (
    <div className={`h-screen w-screen bg-[#1F1E24]  py-[6%] text-white flex overflow-y-auto overflow-x-hidden  ${window.innerWidth<=640 ? "pr-7 leading-5":"px-[20%] "}`}>
      <i onClick={() => navigate(-1)} className="hover:text-[#1F1E24] text-white text-3xl mr-2 ri-arrow-left-line"></i>
      <div className='w-full'>
        <h1 className={` font-bold  ${window.innerWidth<=640 ? "text-3xl ":"text-4xl ml-3 "}`}><i className="ri-phone-fill text-[#6556CD] "></i>  Contact US </h1>
        <div className='h-[1px] bg-zinc-500 my-4'></div>


        {/* form */}
        <form onSubmit={onSubmit} className='flex flex-col '>
          <label htmlFor="name" className='text-xl uppercase ml-2 mb-1'> name</label>
          <input type="text" name="name" required className='bg-zinc-900 outline-none px-5 py-2 rounded-lg text-xl mb-2' />

          <label htmlFor="email" className='text-xl uppercase ml-2 mb-1'> email</label>
          <input type="email" name="email" required className='bg-zinc-900 outline-none px-5 py-2 rounded-lg text-xl mb-2' />

          <label htmlFor="message" className='text-xl uppercase ml-2 mb-1'> Enter your issue</label>
          <textarea name="message" required  className='bg-zinc-900 outline-none px-5 py-2 rounded-lg text-xl mb-2' ></textarea>

         
          {
            submit ?
             (<div  className={`py-2 bg-yellow-600  rounded text-xl ${window.innerWidth<=640 ? " w-[40%] pl-7":"w-[20%]  ml-[40%] pl-10 "}`}>Done 👍🏻</div>):( <button type="submit" className={`px-3 py-2 bg-[#6556CD]  rounded text-xl hover:bg-[#423591] ${window.innerWidth<=640 ? " w-[30%]":"w-[20%]  ml-[40%]"}`}>Submit</button>)
          }

        </form>


        <h1 className={` font-bold mt-3 ${window.innerWidth<=640 ? "text-2xl ":"text-3xl"}`}>Terms and Conditions : </h1>
        <div className='h-[1px] bg-zinc-500 my-4'></div>
        <p className='mt-4  text-zinc-300'>By using FilmFrenzy®️, you agree to comply with these terms. Content provided on this app is for personal use only and may not be redistributed. We are not liable for any inaccuracies or interruptions in the service. Users must respect copyright laws and refrain from any unlawful activities. We reserve the right to modify or terminate the app and its services at any time without notice. By creating an account, you agree to receive communications from us.</p>
        <i className={`ri-team-fill  text-[#6556CD]  ${window.innerWidth<=640 ? "text-6xl ml-[35%]":"text-9xl ml-[40%]"}`}></i>

        <div className={`flex gap-4 text-xl  ${window.innerWidth<=640 ? " mt-3 ml-10":"ml-[37%]  mt-1 "} `}>
          <a href="https://www.youtube.com/channel/UCF0EyUsA6HOzV5rOrtUSvBQ"><i className="ri-youtube-fill"></i></a>
          <a href="https://www.facebook.com/themoviedb/"><i className="ri-facebook-fill"></i></a>
          <a href="https://www.instagram.com/tbbd/"><i className="ri-instagram-line"></i></a>
          <a href="https://x.com/tbd"><i className="ri-twitter-x-fill"></i></a>
          <a href="https://www.themoviedb.org/tv/253384-dancing-for-the-devil-the-7m-tiktok-cult"><i className="ri-tiktok-fill"></i></a>
          <a href="https://es.linkedin.com/company/themoviedb.org"><i className="ri-linkedin-box-fill"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
