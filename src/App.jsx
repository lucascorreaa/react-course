import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TeamComposition from "./components/Team"
import Home from "./styles/tailwindcss/components/Home";


function App() {
  return (
    <body>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/teams" Component={TeamComposition} />
      </Routes>
    </body>
  );
}

export default App;
