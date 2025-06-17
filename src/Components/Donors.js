import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const getColor = (group) => ({
  'A+': '#6C9DCB', 'A-': '#7EA671', 'B+': '#DAA67A',
  'B-': '#D98574', 'O+': '#9A84D3', 'O-': '#D39A9A',
  'AB+': '#6BAFBF', 'AB-': '#D4BFA7'
}[group] || '#8DAECC');

const DonorCard = ({ donor }) => {
  const [liked, setLiked] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  const handleConnectClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      setShowContact(true);
    }
  };

  return (
    <div className="bg-white border border-gray-400 rounded-xl p-4 flex flex-col justify-between text-sm shadow-sm">
      <div className="flex items-start gap-3 relative px-3 pt-1">
        <div className="relative">
          <div
            className="rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold text-base"
            style={{ backgroundColor: getColor(donor.bloodGroup) }}
          >
            {donor.bloodGroup}
          </div>
          <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${donor.available ? 'bg-green-500' : 'bg-red-500'}`} />
        </div>
        <div>
          <h2 className="font-bold text-gray-800">{donor.fullName}</h2>
          <p className="text-xs text-gray-500">{donor.age} yrs · {donor.city || 'unknown'}</p>
        </div>
      </div>
      <p className="text-xs italic text-gray-600 mt-2 px-3">"{donor.bio}"</p>
      <div className="mt-3 flex justify-between items-center px-3">
        <button
          onClick={handleConnectClick}
          className="border border-blue-500 text-blue-600 hover:bg-blue-50 text-xs py-1 rounded-full px-3"
        >
          {showContact ? donor.phoneNumber : 'Connect'}
        </button>
        <FaHeart
          onClick={() => setLiked(!liked)}
          className={`cursor-pointer ${liked ? 'text-red-500' : 'text-gray-400'}`}
        />
      </div>
    </div>
  );
};

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [locationQuery, setLocationQuery] = useState(sessionStorage.getItem('userLocation') || '');
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [onlyActive, setOnlyActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const dropdownRef = useRef();

  useEffect(() => {
    axios.get('https://vital001-4307f-default-rtdb.firebaseio.com/donors.json')
      .then(res => {
        const formatted = Object.entries(res.data || {}).map(([id, d]) => ({ id, ...d }));
        setDonors(formatted);
      });
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const toggleGroup = (g) => {
    setSelectedGroups((prev) =>
      prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]
    );
  };

  const filtered = donors.filter(d =>
    (d.city?.toLowerCase().includes(locationQuery.toLowerCase()) || d.location?.toLowerCase().includes(locationQuery.toLowerCase())) &&
    (selectedGroups.length === 0 || selectedGroups.includes(d.bloodGroup)) &&
    (!onlyActive || d.available)
  );

  const visibleDonors = filtered.slice(0, visibleCount);
  const loadMore = () => setVisibleCount(prev => prev + 12);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="text-center text-blue-600 space-y-1 mb-6">
        <div className="text-[#fb8500] text-2xl md:text-3xl font-bold">Need a donor? You’re in the right place.</div>
        <div className="text-gray-600 text-sm">Yes, the right donor exists—and you’re about to find them.</div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {/* Location input */}
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search by location"
            value={locationQuery}
            onChange={e => {
              setLocationQuery(e.target.value);
              sessionStorage.setItem('userLocation', e.target.value);
            }}
            className="border border-blue-400 rounded-lg px-4 py-2 w-full bg-white shadow-sm"
          />
        </div>

        {/* Blood Group Dropdown */}
        <div className="relative w-72" ref={dropdownRef}>
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="border border-blue-400 bg-white rounded-lg px-4 py-2 shadow-sm cursor-pointer min-h-[44px]"
          >
            {selectedGroups.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {selectedGroups.map(g => (
                  <span key={g} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                    {g}
                    <button onClick={(e) => { e.stopPropagation(); toggleGroup(g); }} className="ml-1 text-red-500">×</button>
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-gray-400 text-sm">Select blood group(s)</span>
            )}
          </div>

          {showDropdown && (
            <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded shadow z-10 max-h-60 overflow-y-auto">
              <div className="p-2 text-center">
                <button
                  onClick={() => setShowDropdown(false)}
                  className="text-xs bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Done
                </button>
              </div>
              {bloodGroups.map(g => (
                <div
                  key={g}
                  onClick={() => toggleGroup(g)}
                  className={`px-4 py-2 cursor-pointer text-sm hover:bg-blue-100 ${selectedGroups.includes(g) ? 'bg-blue-50 font-medium text-blue-700' : ''}`}
                >
                  {g}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Toggle Active Donors */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-700 font-medium">Only Active</label>
          <button
            onClick={() => setOnlyActive(prev => !prev)}
            className={`w-10 h-6 flex items-center rounded-full ${onlyActive ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <span className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 ${onlyActive ? 'translate-x-5' : 'translate-x-1'}`} />
          </button>
        </div>
      </div>

      {/* Count */}
      <div className="text-center text-md text-blue-700 font-semibold mb-6">
        Here are the total Life Savers: <span className="text-[#fb8500]">{filtered.length}</span>
      </div>

      {/* Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-8 px-3">
        {visibleDonors.map(d => <DonorCard key={d.id} donor={d} />)}
      </div>

      {/* Load more */}
      {visibleCount < filtered.length && (
        <div className="text-center mt-6">
          <button onClick={loadMore} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default DonorList;