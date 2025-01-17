import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import SeriesList from './components/SeriesList';

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
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center p-5'>

      <h1 className='text-4xl font-bold mb-6 text-blue-500'>Series search</h1>
      <div className='w-full max-w-md flex items-center space-x-4 mb-8'>
        <input 
          type="text"
          placeholder="Enter series name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='flex-1 p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
     

        <button 
        onClick={searchSeries}
        className='bg-blue-500 px-5 py-3 rounded-lg text-gray-900 font-semibold transition duration-300 hover:bg-blue-600 hover:shadow-lg hover:text-white mb-6'>

          Search
        </button>

        <SeriesList series={series} />
    </div>
  );
}

export default App;
