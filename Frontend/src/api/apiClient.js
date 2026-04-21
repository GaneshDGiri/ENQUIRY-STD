const BASE_URL = "http://localhost:5000/api";
export const apiClient = async (endpoint, method = "GET", body = null) => {
  const token = localStorage.getItem("token");
  const headers = { "Content-Type": "application/json" };

  if (token) headers["Authorization"] = `Bearer ${token}`;
  const config = { method, headers };
  
  if (body) config.body = JSON.stringify(body);
  const response = await fetch(`${BASE_URL}${endpoint}`, config);
  return response.json();
};