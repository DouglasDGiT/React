import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Cadastro from './Components/Cadastro/Cadastro';
import Home from './Components/Home/home';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;