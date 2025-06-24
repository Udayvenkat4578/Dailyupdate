import React ,{useEffect} from 'react'
import behance from '../Assets/behance.png'
import pp from '../Assets/pp.jpeg'
import linkd from '../Assets/linkd.jpeg'
import github from '../Assets/github.png'
import pp1 from '../Assets/pp1.png'
import medium from '../Assets/med.png'
import pp4 from '../Assets/pp4.jpg'
import figma from '../Assets/figma.png'
import dribble from '../Assets/dribble.png'
import u from '../Assets/u.png'
import u1 from '../Assets/u1.png'
import AOS from 'aos';
import 'aos/dist/aos.css'



const Followme = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])

  return (
    <div id='C1'className='lg:px-11 lg:ml-5 lg:pr-7 lg:mr-5 md:px-11 mg:mx-11 px-0 ml-6 pr-0 mr-6 '><div data-aos="zoom-in">

        
        <p className='mt-2 mb-1 text-2xl cursor-default   text-center  text-white font-bold sm:text-[36px] text-[24px] sm:pb-11 pb-4'>Follow Me</p></div>
        <div data-aos="fade-up" data-aos-duration="1000">
        <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 place-items-center sm:gap-6 gap-3 '>
            <div><a href='https://www.behance.net/udayvenkat'>
                <div className='p-1 bg-white rounded-md mb-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 '>
                    <img className='h-24 w-60 rounded-[4px]' src={behance} alt='behance'/>
                    <p className='flex flex-row'><span><img className='h-6 w-6 mt-2 ml-1 rounded-full' src={pp} alt="dh"/></span><span className='font-medium text-sm ml-2 mt-2 '>Uday_ Venkat_</span></p>
                    <p><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium mr-2 ml-6'>#behance</span><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium '>#design </span></p>
                    <p className='text-[12px] font-medium px-2 mt-2 '>Behance is a leading platform to showcase & discover creative work.</p>
                    <p className=' mr-6 text-end text-[12px] font-semibold text-[#053eff]  mt-1'><a href='https://www.behance.net/udayvenkat'>visit</a></p>
                </div></a>
            </div>
 <div><a href='https://github.com/Udayvenkat4578'>
                <div className='p-1 bg-white rounded-md mb-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 '>
                    <img className='h-24 w-60 rounded-[4px]' src={github} alt='behance'/>
                    <p className='flex flex-row'><span><img className='h-6 w-6 mt-2 ml-1 rounded-full' src={pp1} alt="dh"/></span><span className='font-medium text-sm ml-2 mt-2 '>Uday_ Venkat_</span></p>
                    <p><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium mr-2 ml-4'>#coding</span><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium mr-2 '>#git</span></p>
                    <p className='text-[12px] font-medium px-2 mt-2 '>GitHub, platform for version control and development.
                    </p>
                    <p className=' mr-6 text-end text-[12px] font-semibold text-[#053eff]  mt-1'><a href='https://github.com/Udayvenkat4578'>visit</a></p>
                </div></a>
            </div>
            <div><a href='https://dribbble.com/uday_venkat__'>
                <div className='p-1 bg-white rounded-md mb-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 '>
                    <img className='h-24 w-60 rounded-[4px]' src={dribble} alt='behance'/>
                    <p className='flex flex-row'><span><img className='h-6 w-6 mt-2 ml-1 rounded-full' src={u1} alt="dh"/></span><span className='font-medium text-sm ml-2 mt-2 '>Uday_ Venkat_</span></p>
                    <p><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium mr-2 ml-6'>#dribble</span><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium '>#design </span></p>
                    <p className='text-[12px] font-medium px-2 mt-2 '>Dribble is a leading online platform to showcase & discover creative work.</p>
                    <p className=' mr-6 text-end text-[12px] font-semibold text-[#053eff]  mt-1'><a href='https://dribbble.com/uday_venkat__'>visit</a></p>
                </div></a>
            </div>
             <div><a href='https://medium.com/@udayvenkat4578'>
                <div className='p-1 bg-white rounded-md mb-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 '>
                    <img className='h-24 w-60 rounded-[4px] ' src={medium} alt='behance'/>
                    <p className='flex flex-row'><span><img className='h-6 w-6 mt-2 ml-1 rounded-full' src={pp4} alt="dh"/></span><span className='font-medium text-sm ml-2 mt-2 '>Uday_ Venkat_</span></p>
                    <p><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium mr-2 ml-6'>#write</span><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium '>#Blogs </span></p>
                    <p className='text-[12px] font-medium px-2 mt-2 '>Medium is a publishing platform where people can read stories and blog</p>
                    <p className=' mr-6 text-end text-[12px] font-semibold text-[#053eff]  mt-1'><a href='https://medium.com/@udayvenkat4578'>visit</a></p>
                </div></a>
            </div> 
            <div><a href='https://www.linkedin.com/in/uday-venkat-07a177221/'>
                <div className='p-1 bg-white rounded-md mb-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 '>
                    <img className='h-24 w-60 rounded-[4px] ' src={linkd} alt='behance'/>
                    <p className='flex flex-row'><span><img className='h-6 w-6 mt-2 ml-1 rounded-full' src={pp} alt="dh"/></span><span className='font-medium text-sm ml-2 mt-2 '>Uday_ Venkat_</span></p>
                    <p><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium mr-2 ml-6'>#hiring</span><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium '>#jobs </span></p>
                    <p className='text-[12px] font-medium px-2 mt-2 '>LinkedIn is the world's largest professional network on the internet.</p>
                    <p className=' mr-6 text-end text-[12px] font-semibold text-[#053eff]  mt-1'><a href='https://www.linkedin.com/in/uday-venkat-07a177221/'>visit</a></p>
                </div></a>
            </div>
            <div><a href='https://www.figma.com/files/user/1163099546294117296?fuid=1163099546294117296'>
                <div className='p-1 bg-white rounded-md mb-6 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 '>
                    <img className='h-24 w-60 rounded-[4px]' src={figma} alt='behance'/>
                    <p className='flex flex-row'><span><img className='h-6 w-6 mt-2 ml-1 rounded-full' src={u} alt="dh"/></span><span className='font-medium text-sm ml-2 mt-2 '>Uday_ Venkat_</span></p>
                    <p><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium mr-2 ml-6'>#wireframe</span><span className='bg-gray-300 rounded-full text-gray-800 px-2 py-1 text-[10px] font-medium '>#figma </span></p>
                    <p className='text-[12px] font-medium px-2 mt-2 '>Figma is a tool to create, share,test designs for websites and apps.</p>
                    <p className=' mr-6 text-end text-[12px] font-semibold text-[#053eff]  mt-1'><a href='https://www.figma.com/files/user/1163099546294117296?fuid=1163099546294117296'>visit</a></p>
                </div></a>
            </div> 

        </div></div>
    </div>
  )
}

export default Followme