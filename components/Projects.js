import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import arrow from '../Assets/right-arrow.png'
import external from '../Assets/external.png';
import vitalflowlogo from '../Assets/vitalflowlogo.png';
import portfoliologo from '../Assets/portfoliologo.png';
import artoslogo from '../Assets/artoslogo.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const imageRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Apply VanillaTilt only on the image refs
    imageRefs.current.forEach((img) => {
      if (img && !img.vanillaTilt) {
        VanillaTilt.init(img, {
          max: 15,
          speed: 400,
          scale: 1.05,
        });
      }
    });
  }, []);

  const projects = [
    {
      id: 1,
      img: vitalflowlogo,
      title: 'Vital Flow',
      description:
        'Vital Flow is a streamlined platform that facilitates timely connections between blood donors and recipients.',
      url: 'https://vital-flow.netlify.app/',
      type: 'code',
    },
    {
      id: 2,
      img: portfoliologo,
      title: 'Personal Portfolio',
      description:
        'A showcase of creativity and innovation in web development and design.',
      url: 'https://udayvenkat.netlify.app/',
      type: 'code',
    },
    {
      id: 3,
      img: artoslogo,
      title: 'Artos Soft Drinks',
      description:
        'A vibrant blend of taste and refreshment for bold experiences.',
      url: 'https://artosdrinks.netlify.app/',
      type: 'code',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="sm:p-3 p-2">
       <p
        className="mt-2 pb-3 text-[#5ce8cb] font-cyberpunk font-bold sm:text-[30px] text-[20px] cursor-default text-center"
        data-aos="zoom-in"
      >
        Some Of My Latest Work
      </p>
     

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-9 px-3 sm:px-9 mt-7">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="grid-cols-1 place-items-center"
            data-aos="fade-up"
          >
            <div>
              {/* Tilt only on image */}
<img
  ref={(el) => (imageRefs.current[index] = el)}
  className="w-[85%] mx-auto mt-1 rounded-sm border-2 border-white"
  src={project.img}
  alt={project.title}
/>              <div>
                <p className="text-lg font-semibold sm:mt-1 mt-1 pl-6 text-white font-cyberpunk pt-3">
                  {project.title}
                </p>
                <p className="text-[#c5d3f9] text-[11px] ml-3  pl-3 font-cyberpunk">
                  {project.description}
                </p>
                <div className="flex flex-row">
                  <p
                    className="text-xs ml-3 pl-3 mt-1 text-[#5ce8cb] cursor-pointer font-cyberpunk"
                    onClick={() => openModal(project)}
                  >
                    View Project
                  </p>
                  <img className="h-4 w-4 mt-1" src={external} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
      <Link to='/work'>
<div className="flex justify-end items-center pr-9 pt-3">
  <p className="font-cyberpunk text-[#5CE8CB] mr-2 text-md">Explore All</p>
  <img src={arrow} className="h-5 w-5" alt="arrow" />
</div></Link>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-3"
          onClick={closeModal}
        >
          <div
            className="bg-gray-200 p-4 rounded-sm max-w-sm w-full mx-4 sm:mx-0 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              x
            </button>
            <img
              className="scale-95 object-cover rounded mt-4"
              src={selectedProject.img}
              alt={selectedProject.title}
            />
            <h3 className="text-xl font-semibold mt-4 text-center">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 mt-2 text-center text-sm">
              {selectedProject.description}
            </p>
            <a
              className="text-blue-500 mt-4 block text-center text-sm"
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live URL
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
