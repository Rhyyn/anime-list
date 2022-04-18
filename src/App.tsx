import { useEffect, useState } from 'react'
import './App.css'
import Home from "./Routes/Home"
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import TopAnime from './Routes/TopAnime';

function App() {
  const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch('https://api.jikan.moe/v4/anime')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setData(data))
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/top" element={<TopAnime />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
