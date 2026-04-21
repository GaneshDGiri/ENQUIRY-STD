import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "./Navbar";

const UserNavbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Navbar title="Enquiry System">
      {!user ? (
        <><Link to="/login" className="nav-btn">Login</Link><Link to="/admin-login" className="nav-btn">Admin Login</Link></>
      ) : (
        <><Link to="/enquiry" className="nav-btn">Enquiry Form</Link><Link to="/status" className="nav-btn">Check Status</Link>
          <button onClick={() => { logout(); navigate("/login"); }} className="nav-btn nav-btn-logout">Logout ({user.name})</button>
        </>
      )}
    </Navbar>
  );
};
export default UserNavbar;