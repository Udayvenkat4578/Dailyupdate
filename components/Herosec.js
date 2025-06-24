import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import arrow from '../Assets/expand-arrows.png'
import LinkedinLogo from '../Assets/linkedin1.png'
import githublogo from '../Assets/githublogo.png'
import behancelogo from '../Assets/behancelogo.png'
import mediumlogo from '../Assets/mediumlogo.png'
import instagramlogo from '../Assets/instagramlogo.png'


const Herosec = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="overflow-x-hidden sm:pb-3 pb-4 sm:pt-4 pt-11 ">



      <div className="grid grid-cols-1  cursor-default z-30 ">
        <div
          className="sm:ml-11 sm:pl-11 ml-4 mr-4 sm:mr-0 sm:pt-3 pt-1"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-out" 
        >
<h1 className="text-[48px] md:text-[96px] font-cyberpunk font-bold text-[#c3d2f6]">
  Uday Venkat.
</h1>
          
          <span
            style={{
              color: '#5ce8cb',
              fontWeight: 'bold',
              fontSize: '1.75em',
              font: 'cyberpunk'
            }}
          >
            <Typewriter
              words={[
                'I am a Frontend Developer',
                'I am a Ui/UX Designer',
                'I am a ReactJS Developer',
                'I’m a MERN Stack aspirant',
              ]}
              loop={170}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={70}
              delaySpeed={700}
            />
          </span>
<div className='grid md:grid-cols-2 grid-cols-1 gap-11'>
  <div>
          <p className="text-[13px] mt-1 text-[#c3d2f6] sm:mb-11 mb-2 font-cyberpunk">
            I'm a <span className="text-[#FDA50F]">Frontend</span> and
            <span className="text-[#FDA50F]"> MERN developer</span> with a background in
            <span className="text-[#FDA50F]"> UI/UX design</span>. Focusing on creating top-notch
            web applications that not only look stunning but also deliver exceptional performance with better
            <span> user Experience</span>.
                      <div>
<ul className="flex flex-row gap-x-5">
  <li className="relative group text-[17px] font-cyberpunk font-bold text-[#c3d2f6] md:pt-5 pt-3">
    <Link
      to="/work"
      className="transition-all duration-300 ease-in-out group-hover:text-[#5ce8cb] group-hover:scale-110 inline-block"
    >
      Work
    </Link>
  </li>

  <li className="relative group text-[17px] font-cyberpunk font-bold text-[#c3d2f6] md:pt-5 pt-3">
    <Link
      to="/follow"
      className="transition-all duration-300 ease-in-out group-hover:text-[#5ce8cb] group-hover:scale-110 inline-block"
    >
      Social
    </Link>
  </li>

  <li className="relative group text-[17px] font-cyberpunk font-bold text-[#c3d2f6] md:pt-5 pt-3">
    <Link
      to="/skills"
      className="transition-all duration-300 ease-in-out group-hover:text-[#5ce8cb] group-hover:scale-110 inline-block"
    >
      About Me
    </Link>
  </li>
</ul>
          </div>
                                <div>
<ul className="flex flex-row gap-x-5">
  <li className="relative group text-[17px]  font-bold text-[#c3d2f6] md:pt-4 pt-3">
  <a href='https://www.linkedin.com/in/uday-venkat-07a177221/'><img src={LinkedinLogo} className='h-6 w-6' /></a>
  </li>
    <li className="relative group text-[17px]  font-bold text-[#c3d2f6] md:pt-4 pt-3">
  <a href='https://github.com/Udayvenkat4578'><img src={githublogo} className='h-7 w-7' /></a>
  </li>
  <li className="relative group text-[17px]  font-bold text-[#c3d2f6] md:pt-4 pt-3">
  <a href='https://www.behance.net/udayvenkat'><img src={behancelogo} className='h-7 w-7' /></a>
  </li>
  <li className="relative group text-[17px]  font-bold text-[#c3d2f6] md:pt-4 pt-3">
  <a href='https://medium.com/@udayvenkat4578'><img src={mediumlogo} className='h-7 w-7' /></a>
  </li>
    <li className="relative group text-[17px]  font-bold text-[#c3d2f6] md:pt-4 pt-3">
 <a href=''> <img src={instagramlogo} className='h-6 w-6' /></a>
  </li>



</ul>
          </div>




          </p>
        </div>
           <div className='pt-1 text-right pr-3 md:pr-11 md:pt-11 md:pb-4 pb-4 md:mt-6 mt-0   '>
<div className="md:grid hidden justify-end">
   <Link to='/hire'> 
  <h1 className="flex items-center sm:pr-3 pr-1 text-[20px] font-semibold text-[#5ce8cb] font-cyberpunk transition-all duration-300 ease-in-out  hover:scale-110  ">
      Let's Talk
    <span className="ml-2">
      <img className="w-4 h-4" src={arrow} alt="arrow" />
    </span>

  </h1></Link>
</div>
    <h1 className="text-[48px] md:text-[54px] font-cyberpunk font-bold text-[#c3d2f6]  ">
  Designer &
</h1>
<h1 className="text-[48px] md:text-[54px] font-cyberpunk font-bold text-[#c3d2f6] md:pb-6 pb-0">
  Developer
</h1>
<h1 className='grid text-right md:hidden justify-end '>   
      <Link to='/hire'> 
<h1 className="flex items-center sm:pr-3 pr-1 text-[16px] font-semibold text-[#5ce8cb] font-cyberpunk ">
Let's Talk
    <span className="ml-2">
      <img className="w-4 h-4" src={arrow} alt="arrow" />
    </span>
  </h1></Link>
</h1>

   </div>

   </div>     
</div>        

      </div>
    </div>
  );
};

export default Herosec;
