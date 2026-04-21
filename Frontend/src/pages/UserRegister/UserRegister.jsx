import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import "./UserRegister.css";

const UserRegister = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await apiClient("/user/register", "POST", formData);
    if (data.success) { alert("Success!"); navigate("/login"); } else alert(data.message);
  };

  return (
    <div className="register-container">
      <h2 style={{textAlign: "center", marginBottom: "20px"}}>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
        <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
        <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
        <button type="submit" className="btn-register">Create Account</button>
      </Form>
      <p style={{textAlign: "center", marginTop: "15px"}}><Link to="/login">Login here</Link></p>
    </div>
  );
};
export default UserRegister;