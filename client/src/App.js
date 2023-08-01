import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';

import './styles/table.css'
import './styles/misc.css'

import ManageCourse from './pages/ManageCourse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />}>
          <Route path="" element={<Dashboard />} />
          <Route path="manageCourse" element={<ManageCourse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
