import React from 'react';
import comic1 from '../Assets/comic1.png';
import comic2 from '../Assets/comic2.png';
import comic3 from '../Assets/comic3.jpg';
import comic4 from '../Assets/comic4.webp';
import comic2crop from '../Assets/comic2crop.png';
import cropcomic from '../Assets/comic3.jpg'

const Background = () => {
  return (
    <div className="  z-2  opacity-10 ">
      {/* Display different images based on screen size */}
      <img className="object-cover w-screen h-screen sm:block hidden" src={comic1} alt="background" />
      <img className="object-cover w-screen h-screen sm:block hidden" src={comic2} alt="background" />
      <img className="object-cover w-screen h-screen sm:block hidden" src={comic4} alt="background" />
      <img className="object-cover w-screen  sm:block hidden " src={comic3} alt="background" />
      <img className="object-cover w-screen  sm:block hidden " src={cropcomic} alt="background" />

      {/* Show a different image for mobile view */}
      <img className="object-cover w-screen h-screen sm:hidden block " src={comic1} alt="background" />
      <img className="object-cover w-screen h-screen sm:hidden block " src={comic2} alt="background" />
      <img className="object-cover w-screen h-screen sm:hidden block " src={comic4} alt="background" />
      <img className="object-cover w-screen h-screen sm:hidden block " src={comic3} alt="background" />
      <img className="object-cover w-screen h-screen sm:hidden block " src={comic1} alt="background" />
      <img className="object-cover w-screen h-screen sm:hidden block " src={comic2} alt="background" />
      <img className="object-cover w-screen h-screen sm:hidden block " src={comic4} alt="background" />
      <img className="object-cover w-screen h-screen sm:hidden block " src={comic1} alt="background" />
      <img className="object-cover w-screen h-screen sm:hidden block " src={comic2} alt="background" />

      {/* <img className="object-cover w-screen  sm:hidden block " src={comic2crop} alt="background" /> */}
      <img className="object-cover w-screen  sm:hidden block " src={comic2crop} alt="background" />


    </div>
  );
};

export default Background;
