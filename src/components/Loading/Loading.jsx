import "./Loading.css";
import pandaLogo from "../../assets/panda2.png";


export default function Loading({
  fullScreen = true,
}) {
  return (
    <div className={`loading ${fullScreen ? "fullscreen" : ""}`}>

      <div className="loading-logo-wrapper">

        <img
          src={pandaLogo}
          alt="Panda"
          className="loading-logo"
        />

      </div>

      <div className="loading-progress">
        <div className="loading-progress-bar"></div>
      </div>

    </div>
  );
}

