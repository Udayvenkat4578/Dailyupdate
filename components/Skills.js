import React from "react";
import { Link, Outlet, } from "react-router-dom";
import brush from '../Assets/brush.png'
import code from '../Assets/code.png'
import research from '../Assets/research.png'
import exp from '../Assets/exp.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Navbar from "../Gcomponents/Navbar";
import comic4 from '../Assets/comic4.webp'
import Skill1 from '../Gcomponents/Skill1'

function Products() {
  
  useEffect(()=>{
    AOS.init({duration:1000})
},[])
        return (
          <div>
                    <div className='fixed inset-0'>
                <img className="object-cover w-screen h-screen  opacity-10   " src={comic4} alt="background" />
                </div>

                <div className='z-10 relative'>
        <Navbar/>
        </div>
    <div className="pt-2 px-9 " data-aos="fade-up"  data-aos-offset="300"
    data-aos-easing="ease-in-out sm:h-full h-screen">
      <div><p className="text-center pt-8 font-semibold text-lg cursor-default sm:font-bold text-[#aab7d7] ">"Unlocking My Skills: A Visual Matrix of Proficiency"</p></div>
<div className=" ml-11 pl-1 text-[#aab7d7] font-bold text-xl"><p>#tags</p></div>
<div className="grid grid-cols-1 sm:grid-cols-4 px-11 pl-11 pr-11 gap-5 sm:gap-11 mt-2 "
     >
<div className="grid grid-cols-1 place-items-center border-2 py-4  border-[#5ce8cb] rounded-md cursor-pointer transition-all ease-in-out hover:scale-110">
    <div><img className="h-8 w-8" src={brush} alt=''/></div>
    <div> <p className="text-[#aab7d7] font-medium sm:font-medium text-lg">Frontend Developer</p></div>
  </div>
  <div className="grid grid-cols-1 place-items-center border-2 py-4  border-[#5ce8cb] rounded-md cursor-pointer transition-all ease-in-out hover:scale-110">
    <div><img className="h-8 w-8" src={code} alt=''/></div>
    <div> <p className="text-[#aab7d7] font-medium sm:font-medium text-lg">MERN Stack Developer</p></div>
  </div>
  <div className="grid grid-cols-1 place-items-center border-2 py-4  border-[#5ce8cb] rounded-md cursor-pointer transition-all ease-in-out hover:scale-110">
    <div><img className="h-8 w-8" src={research} alt=''/></div>
    <div> <p className="text-[#aab7d7] font-medium sm:font-medium text-lg">Web Designer</p></div>
  </div>
  <div className="grid grid-cols-1 place-items-center border-2 py-4  border-[#5ce8cb] rounded-md cursor-pointer transition-all ease-in-out hover:scale-110">
    <div><img className="h-8 w-8" src={exp} alt=''/></div>
    <div> <p className="text-[#aab7d7] font-medium sm:font-medium text-lg">User Experience Designer</p></div>
  </div>


  
</div>
<Skill1/>
<div className=" text-[#5ce8cb] ml-11 sm:mt-11 mt-6 sm:mb-0 mb-4 ">Click on Each skill for code</div> 
    <div className="grid sm:grid-cols-2 grid-cols-1  ">
      <div className="grid grid-cols-2 text-[#aab7d7] font-medium cursor-pointer text-[18px] place-items-center sm:mb-11 mb-3 pb-0.5  sm:ml-0 ml-6">
      <div>      <ul className="mr-7 cursor-defaultpt-9">
        <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/html"> HTML </Link></li>      
  <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/css"> CSS </Link></li>
  <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/tailwind"> Tailwind CSS</Link></li>
 <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/javascript"> javascript</Link></li>
 <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/reac"> React</Link></li>
 <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/express"> Express</Link></li>
 <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/firebase"> Firebase</Link></li>





        </ul></div>

<div>      <ul className="mr-7 cursor-default ">
       <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/redux">Redux</Link></li>
       <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/node"> Node Js</Link></li>
       <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/mongo"> Mongo DB </Link></li>
       <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/git"> Git </Link></li>
       <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/next"> Next Js</Link></li>
       <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/figma"> Figma</Link></li>
       <li className="cursor-pointer transition-all ease-in hover:text-[#5ce8cb] "> <Link to="/skills/java"> java</Link></li>





        </ul></div>
 

 
        </div>
        <div className="sm:ml-11 mt-2">
      <Outlet />
      </div>
    </div>
    <div className="text-end pb-3 text-white text-xs">The code maybe either config file, handbook or basic syntax</div>
    </div></div>
  );
}

export default Products;
