
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Movies from './pages/Movies'
import Container from 'react-bootstrap/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'

const App = () => {

  return (
    <div className="App">




      <BrowserRouter>
        <Navigation />

        <Container className="py-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>

        </Container>

      </BrowserRouter>


    </div>
  )
}

export default App;

