import './App.css';
import React, { useState } from 'react';
import LeftPage from './components/LeftPage';
import RightPage from './components/RightPage';

function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Tirupati");
  const handleSubmit = function () {
    setCity(search);
  }
  return (
    <div className="App">
      <LeftPage city={city} />
      <RightPage search={search} setSearch={setSearch} handleSubmit={handleSubmit} city={city} />
    </div>
  );
}

export default App;
