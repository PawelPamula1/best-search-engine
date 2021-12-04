import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Hamsters');

  // /videos, /search, /images
  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-proxy-location': 'US',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '7d9fcdd503msh7ba679ffb6bc1a4p1006dbjsnbfe118d3cc2d',
      },
    });

    const data = await response.json();

    console.log(data);

    setResults(data);
    setIsLoading(false);
  };

  return <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>{children}</ResultContext.Provider>;
};

export const useResultContext = () => useContext(ResultContext);
