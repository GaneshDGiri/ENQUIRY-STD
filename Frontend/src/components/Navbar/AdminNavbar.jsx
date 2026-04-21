import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "./Navbar";

const AdminNavbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Navbar title="Admin Panel">
      <button onClick={() => { logout(); navigate("/admin-login"); }} className="nav-btn nav-btn-logout">Logout Admin</button>
    </Navbar>
  );
};
export default AdminNavbar;