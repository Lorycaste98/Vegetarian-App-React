import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };

  return (
    <div className="py-6 px-20 flex justify-center max-w-[1024px] mx-auto lg:justify-start">
      <form className="relative w-full max-w-[400px]" onSubmit={handleSubmit}>
        <FaSearch className="text-white absolute left-3 translate-y-3"></FaSearch>
        <input
          type="text"
          className="bg-gradient-to-l from-[#ededed] to-[#b2b2b2] text-black px-8 py-2 rounded-full w-full"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder={'Cerca per ingrediente'}
        />
      </form>
    </div>
  );
}

export default SearchBar;
