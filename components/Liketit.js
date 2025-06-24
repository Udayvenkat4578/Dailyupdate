import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Liketit = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('sending');

    const templateParams = {
      email: email,
      message: 'Design service request',
    };

    emailjs
      .send(
        'service_hn015xx', // your service ID
        'template_u5jgt8g', // your template ID
        templateParams,
        'k9sAVSzScreKyw7Bv' // your public key
      )
      .then(() => {
        setStatus('sent');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((err) => {
        console.error(err);
        setStatus('idle');
        alert('Something went wrong!');
      });
  };

  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center px-5 pb-2 text-center text-[#c3d2f6] font-cyberpunk" >
      <div className="text-[#5ce8cb] font-cyberpunk font-bold md:text-[32px] text-[20px] cursor-default text-cente mb-2"         
data-aos="zoom-in" >Liked It?</div>
      <p className="text-sm sm:text-base text-[#a1aecc] mb-6 max-w-md">
        Need a stunning website just like this? Whether you want a clone or something unique,
        I’ve got you covered. Let me build something great for you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-sm"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 pr-24 rounded-full border border-[#5ce8cb] bg-transparent text-sm text-[#c3d2f6] placeholder:text-[#7aa6a3] focus:outline-none focus:ring-2 focus:ring-[#5ce8cb]"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="absolute top-[4px] right-[4px] px-4 py-[8px] rounded-full bg-[#5ce8cb] text-[#0d1117] font-bold text-sm hover:scale-105 transition-all duration-200"
        >
          {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✅' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Liketit;
