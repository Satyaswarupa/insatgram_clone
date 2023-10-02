import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import DefaultLayout from "./DefaultLayout";
import Home from "./components/Home";
import Chat from "./components/Chat";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout>
            <Home />
            </DefaultLayout>}/>
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
