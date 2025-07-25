import '@xyflow/react/dist/style.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Sequence from './pages/Sequence';
import Login from './pages/Login'


export default function App() {


  return (
    <Router>
    <Routes>
    <Route path="/login" element={<Login/>} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/builder/new" element={<Sequence />} />
      <Route path="/builder/:id" element={<Sequence />} />
    </Routes>
  </Router>
  );
}
