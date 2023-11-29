import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Planet = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [planetData, setPlanetData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');

  const baseUrl = 'https://swapi.dev/api/planets/';

  const fetchPlanetData = async (url) => {
    try {
      const response = await axios.get(url);
      setPlanetData(response.data);
    } catch (error) {
      console.error('Error fetching planet data:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${baseUrl}?search=${searchQuery}`);
      const results = response.data.results;
      setSearchResults(results);

      if (results.length === 0) {
        setSearchMessage('No data found with the searched name.');
      } else {
        setSearchMessage('');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handlePlanetClick = (url) => {
    fetchPlanetData(url);
  };

  useEffect(() => {
    fetchPlanetData(`${baseUrl}1/`);
  }, []);

  return (
    <div>
      <div className='planetSearch'>
        <h2>Search for Planets</h2>
        <input
          type="text"
          placeholder="Search planet..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        {searchResults.length > 0 && (
          <div>
            <h3>Search Results</h3>
            <table className='title_table'>
              <thead className='heading_table'>
                <tr>
                  <th>Name</th>
                  <th>Population</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result) => (
                  <tr key={result.name} onClick={() => handlePlanetClick(result.url)}>
                    <td>{result.name}</td>
                    <td title={`Population: ${result.population}`}>👽👽👽👽👽</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {searchResults.length === 0 && searchMessage && <p className='no-data'>{searchMessage}</p>}
      </div>

      {/* {planetData && (
        <div className='planetdetails'>
          <h2>Planet Details</h2>
          <div className="planet-info">
            <div className="nameP">
              <div className="name">Name</div>
              <div className="population">Population</div>
            </div>
            <div className="populationData">
              <div>{planetData.name}</div>
              <div title={`Population: ${planetData.population}`} className="population">
                👽
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Planet;