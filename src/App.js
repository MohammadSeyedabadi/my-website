import React from 'react'
import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Mainpage from './pages/Mainpage'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode)
  }

   React.useEffect(() => {
     const data = window.localStorage.getItem('darkMode')
     if (data !== null) setDarkMode(JSON.parse(data))
   }, [])

   React.useEffect(() => {
     window.localStorage.setItem('darkMode', JSON.stringify(darkMode))
   }, [darkMode])

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Container className='App'>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/my-website"
            element={<Mainpage />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  )
}
