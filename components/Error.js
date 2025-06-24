import React from 'react'
import err from '../Assets/err.webp'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='grid sm:grid-cols-2 cols-1 place-items-center sm:py-11 py-1 sm:pb-11 pb-2 sm:pt-11 pt-2 '>
        <div>       <img src={err} alt=""/></div>
        <div className='sm:py-11 py-1 sm:pb-11 pb-2 sm:pt-11 pt-2'> <span className='text-xl font-semibold text-bold text-white'>oops! We messed up messed something!</span> <p className='text-2xl font-bold text-white hover:text-[#5ce8cb] '><Link to="/">Go Home</Link></p></div>
 
    </div>
  )
}

export default Error