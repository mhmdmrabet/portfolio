import { Route, Routes } from 'react-router-dom';
import { About } from '../About';
import { HomePage } from '../HomePage';
import { Nav } from '../Nav';
import { NotFound } from '../NotFound';
import { Projects } from '../Projects';
import './App.css';

function App() {
  return (
    <div className="bg-gray-800">
      <Nav />
      <div className="h-screen text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
