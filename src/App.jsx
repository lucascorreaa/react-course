import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./hooks/components/Navbar";
import TeamComposition from "./components/Team"

function Home() {
  return (
    <Navbar />
  )
}

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
