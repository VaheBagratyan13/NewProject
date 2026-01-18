import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FirstPage from './components/FirstPage'
import ImgPage from './components/ImgPage'
import TimingDask from './components/TimingDask'
import AboutPage from './components/AboutPage'
import CooperationPage from './components/CooperationPage'
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/img-page" element={<ImgPage />} />
          <Route path="/timing-dask" element={<TimingDask />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/cooperation" element={<CooperationPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
