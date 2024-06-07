import Popular from '../pages/Popular';

import React from 'react';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <div>
      <SearchBar />
      <Popular />
    </div>
  );
}

export default Home;
