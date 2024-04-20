import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GraceNoteNav from "./Components/GraceNoteNav/GraceNoteNav";
import Home from "./Components/Home/Home";
import SongAddForm from "./Components/SongAddForm/SongAddForm";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL ?? "/"}>
      <div className="App">
        <GraceNoteNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/songs" element={<SongAddForm />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
