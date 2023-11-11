import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../HomePage';
import { NotFound } from '../NotFound';
import './App.css';

function App() {
  return (
    <div className="bg-gray-800">
      <div className="h-screen text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
