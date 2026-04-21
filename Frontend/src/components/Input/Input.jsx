import { useState } from "react";
import "./Input.css";

const Input = ({ label, name, value, onChange, type = "text" }) => {
  const [show, setShow] = useState(false);
  
  // Handles the actual input type for the show/hide functionality
  const inputType = type === "password" && show ? "text" : type;

  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <input 
          type={inputType} 
          name={name} 
          value={value} 
          onChange={onChange} 
          className="custom-input" 
          style={{ paddingRight: type === "password" ? "60px" : "10px" }} 
          required 
        />
        {type === "password" && (
          <button 
            type="button" 
            onClick={() => setShow(!show)} 
            className="toggle-btn"
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;