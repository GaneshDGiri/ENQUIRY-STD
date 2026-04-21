import { useState, useEffect } from "react";
import { apiClient } from "../../api/apiClient";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [replyText, setReplyText] = useState({});

  const fetchEnquiries = async () => {
    const result = await apiClient("/enquiry");
    if (Array.isArray(result)) setData(result);
  };

  useEffect(() => { fetchEnquiries(); }, []);

  const handleReply = async (id) => {
    if (!replyText[id]) return;
    const res = await apiClient(`/enquiry/${id}/reply`, "PUT", { adminReply: replyText[id] });
    if (res.success) { alert("Reply Sent!"); fetchEnquiries(); setReplyText({ ...replyText, [id]: "" }); }
  };

  return (
    <div className="admin-container">
      <h2 style={{textAlign: "center"}}>Admin Dashboard</h2>
      {data.map((item) => (
        <div key={item._id} className="admin-card">
          <p><b>User:</b> {item.name} ({item.email})</p>
          <p><b>Message:</b> {item.message}</p>
          <p><b>Status:</b> <span style={{ color: item.status === "Replied" ? "#28a745" : "#dc3545", fontWeight: "bold"}}>{item.status}</span></p>
          {item.status === "Replied" ? (
            <div className="admin-reply-box"><p><b>Your Reply:</b> {item.adminReply}</p></div>
          ) : (
            <div className="admin-input-group">
              <input type="text" placeholder="Type reply..." className="admin-input" value={replyText[item._id] || ""} onChange={(e) => setReplyText({ ...replyText, [item._id]: e.target.value })} />
              <button onClick={() => handleReply(item._id)} className="btn-send">Send Reply</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default AdminDashboard;