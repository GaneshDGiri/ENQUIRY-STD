import "./Form.css";
const Form = ({ children, onSubmit }) => (
  <form className="custom-form" onSubmit={onSubmit}>{children}</form>
);
export default Form;