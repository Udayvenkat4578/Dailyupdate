import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import emailjs from 'emailjs-com';
import linklogo from '../Assets/linklogo.png';
import phone from '../Assets/phone.png';
import conimg from '../Assets/conimg.avif';
import mail from '../Assets/mail.png';
import done from '../Assets/check-1024.webp';
import Navbar from '../Gcomponents/Navbar';
import comic4 from '../Assets/comic4.webp'


const Contact = () => {
  const form = useRef();
  const [count, setCount] = useState({
    name: '',
    email: '',
    desc: '',
  });
  const [showModal, setShowModal] = useState(false);

  const { name, email, desc } = count;

  const x = (e) => {
    setCount({ ...count, [e.target.name]: e.target.value });
  };

  const y = (e) => {
    e.preventDefault();
    axios
      .post('https://portfolio-cede9-default-rtdb.firebaseio.com/contact.json', count)
      .then(() => {
        setShowModal(true); // Show acknowledgment modal on success
        setCount({ name: '', email: '', desc: '' }); // Clear form after submission
      })
      .catch((err) => {
        console.log(err);
      });

    emailjs.sendForm('service_95ur06a', 'template_u5jgt8g', form.current, 'k9sAVSzScreKyw7Bv');
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='pb-6 '>
                                <div className='fixed inset-0'>
                <img className="object-cover w-screen h-screen  opacity-10   " src={comic4} alt="background" />
                </div>

                <div className='z-10 relative'>
        <Navbar/>
        </div>

      <div className='grid sm:grid-cols-2 grid-cols-1 place-items-center sm:mt-0 mt-9 required '>
        <div>
          <div>
            <div className='grid grid-cols-1 place-items-center' data-aos='zoom-out'>
              <div>
                <p className='text-center text-[#5ce8cb] border-2 border-[#5ce8cb] py-1 mb-2 mt-5 font-semibold text-xl cursor-default sm:font-bold'>
                  Contact Me
                </p>
                <img className='w-60 h-60' src={conimg} alt='' />
              </div>
              <div className='border-2 border-[#5ce8cb] mt-2 p-2 px-2'>
                <ContactOption
                  src={linklogo}
                  href='https://www.linkedin.com/in/uday-venkat-07a177221/'
                  label='Text On Linkedin'
                />
                <ContactOption
                  src={phone}
                  href='tel:6281608599'
                  label='Click to call or WhatsApp'
                />
                <ContactOption
                  src={mail}
                  href='mailto:udayvenkat4578@gmail.com'
                  label='Send an Email'
                />
              </div>
            </div>
          </div>
        </div>

        <div className=' sm:mt-0 mt-9 grid grid-cols-1 place-items-center'>
          <p className='mt-2 font-semibold text-xl cursor-default sm:font-semibold text-[#aab7d7] sm:mt-11 sm:mb-7 mb-3' data-aos='zoom-out'>
            I'd love to hear from you
          </p>
          <form onSubmit={y} autoComplete='off' ref={form}>
            <InputField label='Enter Name' name='name' value={name} onChange={x} required />
            <InputField label='Enter Email' name='email' type='email' value={email} onChange={x} required />
            <TextArea label='Message' name='desc' value={desc} onChange={x} required />
            <input
              type='submit'
              value="Contact"
              className='border-2 border-[#5ce8cb] bg-[#5ce8cb] font-bold px-2 rounded-sm mb-11 text-[#142444]'
            />
          </form>
        </div>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='grid grid-cols-1 place-items-center'>
            <img className='h-16 w-16' src={done} alt="success" />
            <p className='text-gray-600 font-bold'>Thank you! I will contact you soon.</p>
            <p className='text-gray-500 font-normal text-center text-sm'>"I’m on it! I’ll respond as soon as</p>
            <p className='text-gray-500 font-normal text-center text-sm'> possible to make sure you get the best support."</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

const ContactOption = ({ src, href, label }) => (
  <div className='flex flex-row mb-2 mt-1 '>
    <div>
      <img className='h-7 w-7' src={src} alt='' />
    </div>
    <div className='text-[#aab7d7] ml-3 font-semibold'>
      <a href={href}>{label}</a>
    </div>
  </div>
);

const InputField = ({ label, name, type = 'text', value, onChange, required }) => (
  <div className='flex flex-col mb-4'>
    <p className='text-[#aab7d7] font-semibold mb-2'>{label}</p>
    <input
      className='border-2 border-[#5ce8cb] bg-transparent py-1 pl-6 h-9 w-60  text-[#5ce8cb] placeholder-[#5ce8cb] rounded-sm'
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter ${label.toLowerCase()}`}
      required={required}
    />
  </div>
);

const TextArea = ({ label, name, value, onChange, required }) => (
  <div className='flex flex-col mb-4'>
    <p className='text-[#aab7d7] font-semibold mb-2'>{label}</p>
    <textarea
      className='border-2 border-[#5ce8cb] bg-transparent py-2 pl-6 w-60 text-[#5ce8cb] placeholder-[#5ce8cb] rounded-sm'
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
        className='mt-4 text-center bg-blue-500 text-white px-4 py-2 rounded'
      >
        Close
      </button>
      </div>
    </div>
  </div>
);

export default Contact;
