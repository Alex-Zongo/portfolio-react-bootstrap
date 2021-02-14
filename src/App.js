import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 7,
                color: "#6610f2",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
