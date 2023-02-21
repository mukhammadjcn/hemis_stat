import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    // Header section
    <div className="header ">
      <Link to={"/"} className="logo">
        <img src={require("src/assets/images/logo.png")} alt="Company logo" />
        <span>
          O‘ZBEKISTON RESPUBLIKASI OLIY TA’LIM, FAN VA INNOVATSIYALAR VAZIRLIGI{" "}
        </span>
      </Link>
    </div>
  );
};

export default Header;
