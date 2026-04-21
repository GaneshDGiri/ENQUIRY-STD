import "./Navbar.css";
const Navbar = ({ title, children }) => (
  <nav className="navbar"><h3>{title}</h3><div className="navbar-links">{children}</div></nav>
);
export default Navbar;