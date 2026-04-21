import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import UserNavbar from "../components/Navbar/UserNavbar";
import AdminNavbar from "../components/Navbar/AdminNavbar";
import "./MainLayout.css";

const MainLayout = () => {
  const { role } = useContext(AuthContext);
  return (
    <div className="layout-wrapper">
      {role === "admin" ? <AdminNavbar /> : <UserNavbar />}
      <main className="layout-content"><Outlet /></main>
    </div>
  );
};
export default MainLayout;