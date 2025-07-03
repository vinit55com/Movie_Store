import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/popular'
import Movies from './Components/Movies'
import TvShow from './Components/TvShow'
import People from './Components/People'
import MovieDetails from './Components/MovieDetails'
import TvDetails from './Components/TvDetails'
import PersonDetails from './Components/PersonDetails'
import Trailer from './Components/partials/Trailer'
import Errorpage from './Components/partials/Errorpage'
import About from './Components/About'
import Contact from './Components/Contact'


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movie/details/:id' element={<MovieDetails/>} >
              <Route path='/movie/details/:id/trailer' element={<Trailer/>} />
        </Route>
        
        <Route path='/tvShows' element={<TvShow/>} />
        <Route path='/tv/details/:id' element={<TvDetails/>} >
              <Route path='/tv/details/:id/trailer' element={<Trailer/>} />
        </Route>
        <Route path='/people' element={<People/>} />
        <Route path='/person/details/:id' element={<PersonDetails/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Errorpage/>}/>
      </Routes>
    </div>
  )
}

export default App
