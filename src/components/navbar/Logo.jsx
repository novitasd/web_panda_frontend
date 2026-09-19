import { Link } from "react-router-dom";
import logoPanda from "../../assets/pandanegra.png";

import "./Logo.css";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img
        src={logoPanda}
        alt="Panda"
      />
    </Link>
  );
}

export default Logo;