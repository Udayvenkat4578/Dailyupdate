import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleResumeClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.open(
        'https://drive.google.com/file/d/1hUSOgB_l94Vl3pn38OfT0KKv1EMjLynL/view?usp=sharing',
        '_blank'
      );
      setLoading(false);
    }, 800);
  };

  return (
    <div>
      <p
        className="mt-4 mb-1 text-[#5ce8cb] font-cyberpunk font-bold md:text-[32px] text-[20px] cursor-default text-center"
        data-aos="zoom-in"
      >
        Know About Me
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 px-11">
        <div className="pt-4 font-cyberpunk text-[#c3d2f6] text-sm"             data-aos="fade-up"
>
          <h2 className="text-xl font-bold text-white font-cyberpunk mb-3 pt-6">
            Introduction
          </h2>

          <p>
            I’m a frontend developer and UI/UX Designer focused on building fast, responsive, and accessible interfaces.
            With a strong eye for design and performance, I bring ideas to life through clean code and user-first thinking.
            Fast, intuitive, and reliable — that’s how I build.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <h1 className="text-sm font-cyberpunk text-[#5ce8cb]">#Frontend Developer</h1>
            <h1 className="text-sm font-cyberpunk text-[#5ce8cb]">#UI/UX Designer</h1>
          </div>

          <div className="pt-4">
            <button
              onClick={handleResumeClick}
              className="px-4 py-2 bg-[#5ce8cb] text-gray-700 rounded-md font-cyberpunk text-sm hover:scale-105 transition-transform duration-200"
            >
              {loading ? 'Just a sec...' : 'Resume'}
            </button>
          </div>
        </div>

        <div             data-aos="fade-up"
>
          <h2 className="text-lg font-bold text-[#c3d2f6] font-cyberpunk mb-3 pt-6">
            My Skills
          </h2>
          <div className="flex flex-wrap gap-3 font-cyberpunk text-[14px] cursor-pointer">
            {[
              'HTML5', 'CSS', 'TailwindCSS', 'Responsive Design', 'Express.js', 'User Experience Design',
              'React.js', 'Next.js', 'Node.js', 'Github', 'MongoDB', 'User Interface Design',
              'Figma', 'Micro Animations', 'UX Research', 'Prototyping', 'Firebase', 'Adobe XD', 'JavaScript'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-sm text-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
