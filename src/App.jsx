import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParticlesComponent1 from './components/Particles'
import ParticlesComponent from './components/temp';
import PasswordInterface from './components/input';
import PhotoGallery from './components/gallery';

function App() {
  const [particle, setParticle] = useState(false);

  return (
    <Router>
      <div className='App min-h-full w-full'>
        {particle && <ParticlesComponent1 id='Particles'/> }
        <div className='absolute text-white text-lg w-full h-screen flex justify-center items-center'>
          <Routes>
            <Route path="/" element={<PasswordInterface onParticle={setParticle} />} />
            <Route path="/somyaa" element={<PhotoGallery particle={particle}/>} />
          </Routes>
        </div>     
      </div>
    </Router>
  )
}

export default App;