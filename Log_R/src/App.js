import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

import LogIn from "./component/LogIn";
import LogOut from "./component/LogOut";
import Exam from "./component/Exam";



function App() {
  return (
    <div className="App">
      <nav>
      </nav>
      <Router>
      <Routes>
        <Route path="/login" element={<LogIn />}  />
        <Route path="/logout" element={<LogOut />}  />
        <Route path="/exam" element={<Exam />}  />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

