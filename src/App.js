
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Movies from './pages/Movies'
import People from './pages/People'
import Container from 'react-bootstrap/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import Person from './pages/Person'
import Movie from './pages/Movie'

const App = () => {

  return (
    <div className="App">

      <BrowserRouter>
        <Navigation />

        <Container className="py-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<Person />} />
          </Routes>

        </Container>

      </BrowserRouter>


    </div>
  )
}

export default App;

