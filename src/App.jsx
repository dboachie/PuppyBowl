// import { useState } from "react";

import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import AllPuppies from "./components/AllPuppies";
import SinglePuppy from "./components/SinglePuppy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllPuppies />} />
        <Route path="/:id" element={<SinglePuppy />} />
      </Routes>
    </>
  );
}

export default App;
