import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import emailjs from 'emailjs-com';
import linklogo from '../Assets/linklogo.png';
import phone from '../Assets/phone.png';
import mail from '../Assets/mail.png';
import hireicon from '../Assets/hireicon.png';
import checkEmailIcon from '../Assets/wired-outline-45-clock-time.gif'; // Replace with a suitable image
import Navbar from '../Gcomponents/Navbar';
import comic5 from '../Assets/cropcomic.webp';

const Hire = () => {
  const form = useRef();
  const [count, setCount] = useState({
    name: '',
    email: '',
    desc: '',
    company: '',
  });
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const { name, email, desc, company } = count;

  const x = (e) => {
    setCount({ ...count, [e.target.name]: e.target.value });
  };

  const y = (e) => {
    e.preventDefault();
    console.log(count);
    axios
      .post('https://portfolio-cede9-default-rtdb.firebaseio.com/hire.json', count)
      .then(() => {
        setShowModal(true); // Show acknowledgment modal on success
        setCount({ name: '', email: '', desc: '', company: '' }); // Clear form after submission
      })
      .catch((err) => {
        console.log(err);
      });

    emailjs.sendForm('service_95ur06a', 'template_raokg8r', form.current, 'k9sAVSzScreKyw7Bv');
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=''>
      <div className='fixed inset-0'>
        <img className="object-cover w-screen h-screen opacity-10" src={comic5} alt="background" />
      </div>

      <div className='z-10 relative'>
        <Navbar />
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 place-items-center sm:mt-0 mt-9 '>
        <div>
          <div>
            <div className='grid grid-cols-1 place-items-center' data-aos='zoom-out'>
              <div>
                <p className='text-center text-[#5ce8cb] border-2 border-[#5ce8cb] py-1 mb-1 mt-5 font-semibold text-xl cursor-default sm:font-bold'>Hire Me</p>
                <p className='text-center sm:font-bold font-semibold mb-1 text-xl cursor-default py-1 text-[#5ce8cb] border-2 border-[#5ce8cb]'>
                  <a href='https://drive.google.com/file/d/1d1JTYnQmZ-IIXu37vWm94BTKayEUF3s4/view?usp=sharing'>Download Resume</a>
                </p>
                <img className='w-60 h-60' src={hireicon} alt='' />
              </div>
              <div className='border-2 border-[#5ce8cb] mt-2 p-2 px-2'>
                <ContactOption src={linklogo} href='https://www.linkedin.com/in/uday-venkat-07a177221/' label='Text On Linkedin' />
                <ContactOption src={phone} href='tel:6281608599' label='Click to call or WhatsApp' />
                <ContactOption src={mail} href='mailto:udayvenkat4578@gmail.com' label='Send an Email' />
              </div>
            </div>
          </div>
        </div>

        <div data-aos='zoom-out' className='sm:mt-0 mt-9'>
          <p className='mt-2 text-center font-semibold text-xl cursor-default sm:font-semibold text-[#aab7d7] sm:mt-11 sm:mb-7 mb-3'>
            Want to Collaborate for work
          </p>
          <form onSubmit={y} autoComplete='off' ref={form} className='sm:ml-11 ml-0 pl-9 sm:pl-11'>
            <InputField label='Enter Name' name='name' value={name} onChange={x} required />
            <InputField label='Enter Email' name='email' type='email' value={email} onChange={x} required />
            <InputField label='Enter Organisation' name='company' value={company} onChange={x} required />
            <TextArea label='Description' name='desc' value={desc} onChange={x} required />
            <input type='submit' value='Send' className='border-2 border-[#5ce8cb] bg-[#5ce8cb] font-bold px-2 rounded-sm mb-11 text-[#142444]' />
          </form>
        </div>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='grid grid-cols-1 place-items-center'>
            <img className='h-16 w-16' src={checkEmailIcon} alt="Check Email Icon" />
            <p className='text-gray-600 font-bold text-center'>Thank you! Please check your email</p>
            <p className='text-gray-500 font-normal text-center text-sm'>"Your time is valued here.</p>
            <p className='text-gray-500 font-normal text-center text-sm'>I’ll get back to you promptly. Stay tuned!"</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

const ContactOption = ({ src, href, label }) => (
  <div className='flex flex-row mb-2 mt-1'>
    <div>
      <img className='h-7 w-7' src={src} alt='' />
    </div>
    <div className='text-[#aab7d7] ml-3 font-semibold'>
      <a href={href}>{label}</a>
    </div>
  </div>
);

const InputField = ({ label, name, type = 'text', value, onChange, required }) => (
  <div className='flex flex-col mb-2'>
    <p className='text-[#aab7d7] font-semibold mb-2'>{label}</p>
    <input
      className='border-2 border-[#5ce8cb] py-1 pl-6 mr-11 h-9 w-60 bg-transparent text-[#5ce8cb] placeholder-[#5ce8cb] rounded-sm'
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`${label}`}
      required={required}
    />
  </div>
);

const TextArea = ({ label, name, value, onChange, required }) => (
  <div className='flex flex-col '>
    <p className='text-[#aab7d7] font-semibold mb-2'>{label}</p>
    <textarea
      className='border-2 border-[#5ce8cb] py-2 pl-6 mr-11 w-60 bg-transparent text-[#5ce8cb] placeholder-[#5ce8cb] mb-6 rounded-sm'
      rows='4'
      name={name}
      value={value}
      onChange={onChange}
      placeholder='Enter your message here...'
      required={required}
    ></textarea>
  </div>
);

const Modal = ({ children, onClose }) => (
  <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
    <div className='bg-white p-6 rounded shadow-lg'>
      {children}
      <div className='flex justify-center mt-4'>
        <button
          onClick={onClose}
          className='text-center bg-blue-500 text-white px-4 py-2 rounded'
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default Hire;
