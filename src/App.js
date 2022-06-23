import React, { useState } from "react";
import ResultsRenderer from "./components/ResultsRenderer";
import SentimentStats from "./components/SentimentStats";
import './App.css';
import appbasejs from "appbase-js";

var appbaseRef = appbasejs({
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "emoji-dataset",
  credentials: "f1da7b624918:3331c67d-3477-4b24-aa89-aefc6ca4683e"
});


function App() {
  const [searchText, setSearchText] = useState("");
  // indicates whether api has responded or not
  const [isSearching, setIsSearching] = useState(false);
  // keeping record of the fetched results
  const [results, setResults] = useState(null);
  const [sentimentData, setSentimentData] = useState([]);
  // holds time taken by script
  const [scriptTime, setScriptTime] = useState(0);

  // makes a call to the backend to fetch results
  const makeApiCall = () => {
    setIsSearching(true);
    const SEARCH_ID = "emoji_search";
    appbaseRef
      .reactiveSearch(
        [
          {
            id: SEARCH_ID,
            size: 10,
            ...(searchText && { value: searchText })
          }
        ],
        {
          enableQueryRules: true
        }
      )
      .then((res) => {
        setIsSearching(false);
        setResults(res[SEARCH_ID].hits.hits);
        setSentimentData(res.analysis);
        setScriptTime(res?.settings?.script_took ?? 0);
      })
      .catch((err) => {
        console.log("search error: ", err);
      });
  };

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
        <button id="recommend-btn" onClick={makeApiCall}>
          Recommend
        </button>
      </div>
      <SentimentStats sentimentData={sentimentData} scriptTime={scriptTime} />
      <div className="result-wrapper">
        <ResultsRenderer results={results} />
      </div>
    </div>
  );
}

export default App;
