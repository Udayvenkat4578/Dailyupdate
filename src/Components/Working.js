import React from 'react';
import {
  LocateFixed,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';

const steps = [
  {
    title: 'Find a Donor Near You',
    icon: <LocateFixed className="w-6 h-6 text-blue-600" />,
    description: 'Enable location to instantly discover willing donors near your area.',
  },
  {
    title: 'Request or Reach Out',
    icon: <HeartHandshake className="w-6 h-6 text-blue-600" />,
    description: 'Send a direct request or message donors who match your need.',
  },
  {
    title: 'Donate Safely & Confidently',
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    description: 'Coordinate and donate with trust, backed by our secure system.',
  },
];

const Working = () => {
  return (
    <div className="md:px-11 mx-4 md:py-1">
      <div className="grid md:grid-cols-2 gap-10 items-center bg-orange-50 rounded-xl py-11">
        
        {/* Left side - Text + Button */}
        <div>
          <div className="md:pl-7 pl-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fb8500] mb-4 px-4">
              How It Works?
            </h2>
            <p className="text-gray-600 mb-6 md:text-[16px] text-sm px-4">
              VitalFlow connects blood donors and recipients through a secure, location-based system. Users can easily find, contact, and request donations from nearby donors.
            </p>
            <div className='px-4'>
              <button className="bg-[#fb8500] text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-[#e67600] transition-all duration-300">
                Talk to Us
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Responsive Grid of Cards */}
        <div className="px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pr-2 md:pr-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-blue-100 rounded-xl  px-6 py-5 text-center flex flex-col items-center h-full "
              >
                <div className="mb-3">{step.icon}</div>
                <h3 className="font-semibold text-gray-800 text-base md:text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Working;
