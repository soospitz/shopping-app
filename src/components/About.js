import React from "react";
import "../App.css";

function About() {
  return (
    <div>
      <h1>ABOUT</h1>
      <div className="about">
        <p>
          This project was built for practice purposes using React.
        </p>
        <a href="https://github.com/soospitz/shopping-app">
          <button className="button">
            VISIT REPO<i class="fab fa-github fa-lg"></i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
