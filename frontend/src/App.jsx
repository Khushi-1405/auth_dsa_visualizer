import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Loginform from "./components/Loginform"
import Signupform from "./components/Signupform"
import { Routes, Route } from 'react-router'
import Visualizer from "./components/Visualizer"
import { useState } from "react"


function App() {
const [algorithm, setAlgorithm] = useState([]);

  return (
    <div className="bg-gray-950 relative md:pt-3 min-h-[100vh] overflow-hidden w-full" >
      <div  className='home absolute z-0 inset-0'></div>
      <Navbar algorithm={algorithm} setAlgorithm={setAlgorithm} />
      <Routes>
        <Route path='/' element={<Home setAlgorithm={setAlgorithm}/>} />
        <Route path='/Visualizer' element={<Visualizer algorithm={algorithm} setAlgorithm={setAlgorithm} />} />
        <Route path='/Login' element={<Loginform />} />
      </Routes>
    </div>
  )
}

export default App
