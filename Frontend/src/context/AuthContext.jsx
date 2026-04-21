import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    const storedRole = localStorage.getItem("role");
    if (localStorage.getItem("token")) {
      if (storedUser) setUser(JSON.parse(storedUser));
      if (storedRole) setRole(storedRole);
    }
  }, []);

  const login = (userData, authToken, userRole) => {
    localStorage.setItem("token", authToken);
    localStorage.setItem("role", userRole);
    if (userData) localStorage.setItem("userData", JSON.stringify(userData));
    setUser(userData);
    setRole(userRole);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setRole(null);
  };

  return <AuthContext.Provider value={{ user, role, login, logout }}>{children}</AuthContext.Provider>;
};