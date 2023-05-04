import React, { useEffect, useState } from 'react'

import "./Style.scss"
import ShowWrapper from "./components/ShowWrapper"

const App = () => {
  const [loading,setLoading] = useState(true);
  const [show,setShow] = useState({});
  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        if (!response.ok) {
          console.log('Network response was not ok');
          return {message:"Network Error"}
        }
        const data = await response.json();
        setShow(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShow();
  }, []);


  console.log(show);
  
  return (
    <>
      {!loading &&<ShowWrapper/> }
    </>
  )
}

export default App