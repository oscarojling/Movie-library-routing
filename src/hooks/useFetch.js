import { useState, useEffect } from "react";

const useFetch = (endpoint = "") => {
  const [data, setData] = useState(null)
  const API_ENDPOINT = `${import.meta.env.VITE_API_ENDPOINT}${endpoint}?api_key=${import.meta.env.VITE_API_KEY}`

   const getData = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const movieData = await response.json();
      setData(movieData.results || movieData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [endpoint]);

  return data
}

export default useFetch