import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Designs from './pages/Designs'
import Certifications from './pages/Certifications'
import Connect from './pages/Connect'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
