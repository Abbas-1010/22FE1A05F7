import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import "./App.css";

function App() {
  const [urls, setUrls] = useState([]);
  const [clicks, setClicks] = useState([]);

  const addUrl = (url, code, expiry) => {
    let expiryTime;
    if (expiry) {
      expiryTime = new Date(expiry);
    } else {
      expiryTime = new Date();
      expiryTime.setMinutes(expiryTime.getMinutes() + 30); // Default expiry = 30 mins
    }

    const newUrl = {
      id: uuidv4(),
      longUrl: url,
      shortCode: code || Math.random().toString(36).substring(6),
      expiry: expiryTime.toISOString(),
      createdAt: new Date().toISOString(),
    };
    setUrls([...urls, newUrl]);
  };

  const registerClick = (shortCode, source = "direct") => {
    const clickEvent = {
      id: uuidv4(),
      shortCode,
      source,
      timestamp: new Date().toISOString(),
    };
    setClicks((prev) => [...prev, clickEvent]);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={<Home urls={urls} addUrl={addUrl} registerClick={registerClick} />}
            />
            <Route
              path="/statistics"
              element={<Statistics urls={urls} clicks={clicks} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
