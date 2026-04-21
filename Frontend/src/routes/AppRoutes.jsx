import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import MainLayout from "../layouts/MainLayout";
import UserLogin from "../pages/UserLogin/UserLogin";
import UserRegister from "../pages/UserRegister/UserRegister";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import EnquiryPage from "../pages/EnquiryPage/EnquiryPage";
import CheckStatus from "../pages/CheckStatus/CheckStatus";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";

const AppRoutes = () => {
  const { role } = useContext(AuthContext);
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={role === "user" ? <Navigate to="/enquiry" /> : <UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/admin-login" element={role === "admin" ? <Navigate to="/admin-dashboard" /> : <AdminLogin />} />
        <Route path="/enquiry" element={role === "user" ? <EnquiryPage /> : <Navigate to="/login" />} />
        <Route path="/status" element={role === "user" ? <CheckStatus /> : <Navigate to="/login" />} />
        <Route path="/admin-dashboard" element={role === "admin" ? <AdminDashboard /> : <Navigate to="/admin-login" />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;