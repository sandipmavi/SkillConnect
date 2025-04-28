import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterEmployee from "./pages/employee/RegisterEmployee";
import RegisterClient from "./pages/client/RegisterClient";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/DashBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/employee" element={<RegisterEmployee />} />
        <Route path="/register/client" element={<RegisterClient />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
