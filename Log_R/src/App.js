import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import LogIn from "./component/LogIn";
import LogOut from "./component/LogOut";

function App() {
  return (
    <div className="App">
      <nav>
      </nav>
      <Router>
      <Routes>
        <Route path="/login" element={<LogIn />}  />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

