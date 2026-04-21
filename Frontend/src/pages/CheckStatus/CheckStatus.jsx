import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { apiClient } from "../../api/apiClient";
import "./CheckStatus.css";

const CheckStatus = () => {
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (user?.email) {
        const data = await apiClient(`/enquiry/user/${user.email}`);
        setMessages(data);
      }
    };
    fetchMessages();
  }, [user]);

  return (
    <div className="status-container">
      <h2 style={{textAlign: "center"}}>My Messages</h2>
      {messages.map((msg) => (
        <div key={msg._id} className="message-card">
          <p><b>My Message:</b> {msg.message}</p>
          <p><b>Status:</b> <span style={{color: msg.status === "Replied" ? "green" : "orange"}}>{msg.status}</span></p>
          {msg.adminReply && <div className="reply-card"><p><b>Admin Reply:</b> {msg.adminReply}</p></div>}
        </div>
      ))}
    </div>
  );
};
export default CheckStatus;