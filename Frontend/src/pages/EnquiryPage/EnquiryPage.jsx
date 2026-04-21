import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { apiClient } from "../../api/apiClient";
import Form  from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import "./EnquiryPage.css";

const EnquiryPage = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => { if (user) setFormData({ name: user.name, email: user.email, message: "" }); }, [user]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await apiClient("/enquiry", "POST", formData);
    if (data.success) { alert("Enquiry Submitted!"); setFormData({ ...formData, message: "" }); }
  };

  return (
    <div className="enquiry-container">
      <h2 style={{textAlign: "center"}}>Send an Enquiry</h2>
      <Form onSubmit={handleSubmit}>
        <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
        <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
        <Input label="Message" name="message" value={formData.message} onChange={handleChange} />
        <button type="submit" className="btn-success">Send Message</button>
      </Form>
    </div>
  );
};
export default EnquiryPage;