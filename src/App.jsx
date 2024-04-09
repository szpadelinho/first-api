import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './Movies.jsx'

function App() {
  const [movies, setMovies] = useState([])

  const pobierzDane = () => {
    fetch("https://swapi.dev/api/films")
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => setMovies(data.results))
      .catch(err => console.log(err.message))
  }

  return (
    <>
      <h1>Super filmy</h1>
      <button onClick={pobierzDane}>Pobierz dane</button>
      <Movies movies={movies}/>
    </>
  )
}

export default App
