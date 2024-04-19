import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GraceNoteNav from "./Components/GraceNoteNav/GraceNoteNav";
import Home from "./Components/Home/Home";
import SongAddPage from "./Components/SongAddPage/SongAddPag";

function App() {
  
  const NotFound = () => <h2>404 Not Found</h2>;

  return (
    <Router basename={process.env.PUBLIC_URL ?? "/"}>
      <div className="App">
        <GraceNoteNav />
        <Routes>
          <Route path="/" element={< Home/>}></Route>
          <Route path="/songs" element={< />}> </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
