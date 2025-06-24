import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiBehance } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-[#0a0a0a] text-[#c3d2f6] px-6 sm:px-16 pt-0 pb-10 font-cyberpunk overflow-hidden">

      {/* SVG Wave Top Border */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,00 L0,0 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

      {/* Floating Neon Glow */}
      <div className="absolute w-72 h-72 bg-[#5ce8cb]/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>

      {/* Footer Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-y-6 px-2">
        
        {/* Brand & Tagline */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-[#5ce8cb]">Uday Venkat</h1>
          <p className="text-sm text-[#c3d2f6] mt-1">Designs that think. Code that speaks.</p>
          <p className="font-barcode text-lg text-[#5ce8cb] tracking-wider mt-2">*Designs that think. Code that speaks.*</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-5 text-sm md:text-base text-[#c3d2f6]">
          <li className="hover:text-[#5ce8cb] transition duration-200">
            <Link to="/work">Projects</Link>
          </li>
          <li className="hover:text-[#5ce8cb] transition duration-200">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="hover:text-[#5ce8cb] transition duration-200">
            <Link to="/follow">Follow</Link>
          </li>
          <li className="hover:text-[#5ce8cb] transition duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-[#5ce8cb] text-xl">
          <a
            href="https://github.com/Udayvenkat4578"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/uday-venkat-07a177221/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.behance.net/udayvenkat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <SiBehance />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-[#a1aecc]">
        © {new Date().getFullYear()} Uday Venkat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
