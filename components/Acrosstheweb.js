import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import behance from '../Assets/behance.png';
import github from '../Assets/github.png';
import medium from '../Assets/med.png';
import linkd from '../Assets/linkd.jpeg';
import figma from '../Assets/figma.png';

import pp from '../Assets/pp.jpeg';
import pp1 from '../Assets/pp1.png';
import pp4 from '../Assets/pp4.jpg';
import u from '../Assets/u.png';

const socialLinks = [
  {
    name: 'Behance',
    url: 'https://www.behance.net/udayvenkat',
    icon: behance,
    avatar: pp,
    tags: ['#behance', '#design'],
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Udayvenkat4578',
    icon: github,
    avatar: pp1,
    tags: ['#coding', '#git'],
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@udayvenkat4578',
    icon: medium,
    avatar: pp4,
    tags: ['#write', '#blogs'],
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/uday-venkat-07a177221/',
    icon: linkd,
    avatar: pp,
    tags: ['#hiring', '#jobs'],
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com/files/user/1163099546294117296?fuid=1163099546294117296',
    icon: figma,
    avatar: u,
    tags: ['#figma', '#wireframe'],
  },
];

const Followme = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="C1" className="lg:px-14 px-6 py-10">
      <div data-aos="zoom-in">
        <p className="mt-2 mb-8 text-[#5ce8cb] font-cyberpunk font-bold md:text-[32px] text-[20px] text-center">
          Across The Web
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto"
        data-aos="fade-up"
      >
        {socialLinks.map((item, index) => (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group relative rounded-xl overflow-hidden shadow-lg border border-[#1c2230] bg-[#0f172a] hover:scale-[1.03] transition-all duration-300 min-w-[260px]"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-full h-48 object-cover sm:object-fill rounded-t-xl"
            />

            {/* Tags top-right */}
            <div className="absolute top-2 right-2 flex flex-wrap gap-1">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#5ce8cb]/20 text-[#5ce8cb] text-[10px] px-2 py-[2px] rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Username bottom-left */}
            <div className="absolute bottom-2 left-2 flex items-center space-x-2 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
              <img src={item.avatar} alt="avatar" className="w-5 h-5 rounded-full object-cover" />
              <span className="text-xs text-[#c3d2f6] font-medium">Uday_ Venkat_</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Followme;
