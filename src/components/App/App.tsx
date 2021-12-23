import { Route, Routes } from 'react-router-dom';
import { About } from '../About';
import { HomePage } from '../HomePage';
import { Nav } from '../Nav';
import { Projects } from '../Projects';
import './App.css';

function App() {
  return (
    <div className="bg-gray-800">
      <Nav />
      <div className="flex justify-center items-center h-screen text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
