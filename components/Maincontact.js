import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useWindowSize } from 'react-use';
import connectlogo from '../Assets/connectimg.png'

const Contact = () => {
  const { width, height } = useWindowSize();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

emailjs.send(
  'service_hn015xx',
  'template_u5jgt8g',
  {
    name: formData.name,
    email: formData.email,
    message: formData.message
  },
  'k9sAVSzScreKyw7Bv'
)
      .then(() => {
        setStatus('sent');
        setIsModalOpen(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert('Something went wrong. Please try again.');
        setStatus('idle');
      });
  };


  return (
    <div className="min-h-screen px-5 py-14 text-[#c3d2f6] font-cyberpunk relative">

      <p className="text-[#5ce8cb] font-cyberpunk font-bold md:text-[32px] text-[20px] cursor-default text-center mb-5"         data-aos="zoom-in"
>
        Let’s Talk
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Left Info */}
        <div className="space-y-4">
          <h2 className="text-[24px] font-bold">Got a project or an idea?</h2>
          <p className="text-sm text-[#a1aecc]">
            I’m always excited to collaborate on something meaningful. Whether it’s a full project,
            a quick query, or just a friendly hello — my inbox is always open.
          </p>
          <div className='grid place-items-center '>
            <img src={connectlogo} className='h-60 w-48 '/>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className=" p-3 space-y-5 text-sm "
          data-aos="fade-up"
        >
          <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border-2 border-[#5ce8cb] text-[#c3d2f6] bg-transparent outline-none focus:ring-2 focus:ring-[#5ce8cb]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border-2 border-[#5ce8cb] text-[#c3d2f6] bg-transparent outline-none focus:ring-2 focus:ring-[#5ce8cb]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="What's on your mind?"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border-2 border-[#5ce8cb] text-[#c3d2f6] bg-transparent outline-none focus:ring-2 focus:ring-[#5ce8cb]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full border border-[#5ce8cb] bg-[#5ce8cb] text-[#142444] py-2 font-bold rounded hover:scale-105 transition-all duration-200"
          >
            {status === 'idle' && 'Send Message'}
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && 'Done ✅'}
          </button>
        </form>
      </div>

    </div>
  );
};

export default Contact;
