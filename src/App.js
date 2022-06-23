import React, { useState } from "react";
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="app-root">
      <div className="input-wrapper">
        <input
          name="search-field"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Try searching, 'man swimming' "
        />
      </div>
    </div>
  );
}

export default App;
