import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUpStudent from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import RegistrationSuccess from './pages/RegistrationSuccess';
import DashBoard from './pages/DashBoard/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUpStudent />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/success" element={<RegistrationSuccess />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;