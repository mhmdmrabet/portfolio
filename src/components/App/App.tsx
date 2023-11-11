import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../HomePage';
import './App.css';

function App() {
  return (
    <div className="bg-gray-800">
      <div className="h-screen text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
