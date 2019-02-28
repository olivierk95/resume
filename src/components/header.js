import React from "react";

//import style
import "../styles/components/header.css";

const Header = () => (
  <header>
    <div className="typewriter">
      <h1>Hello, I am Olivier Keutgens!</h1>
    </div>
    <div className="secondtypewriter">
      <h2 className="typewriter">
        ... and this is my <span>resume.</span>
      </h2>
      <h2 className="end">&nbsp;head.</h2>
    </div>
  </header>
);

export default Header;
