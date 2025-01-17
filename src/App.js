import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [series, setSeries] = useState([]);

  const searchSeries = async () => {
    if (!query) return;
    try {
      const endpoint = `https://api.tvmaze.com/search/shows?q=${query}`
      const { data } = await axios.get(endpoint)
      const selectRandom = data.sort(() => 0.5 - Math.random()).slice(0, 3);

      setSeries(selectRandom.map(item => item.show));
    } 
    catch (error) {
      console.error('Error searching series: ', error);
      setSeries([]);
    }
  }

  return (
    <div>
        <input 
          type="text"
          placeholder="Enter series name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={searchSeries}>
          Search
        </button>

        <div>
          {series.map((s) => (
            <div key={s.id}>
              <img src={s.image.medium} alt={s.name} />
              <h3>{s.name}</h3>
              <p>{s.summary?.replace(/<\/?[^>]+>/gi, '') || "No description for this show"}</p>
            </div>  
          ))}
        </div>
    </div>
  );
}

export default App;
