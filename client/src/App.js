import React from "react";
import Sidebar from "./components/Sidebar";
import Filters from "./Routes/Filters";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Routes/Dashboard";
import Intensity from "./Routes/Intensity";
import Likelihood from "./Routes/Likelihood";
import Region from "./Routes/Region";
import Relevance from "./Routes/Relevance";
import Topics from "./Routes/Topics";
import Year from "./Routes/Year";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/intensity" element={<Intensity />} />
          <Route path="/likelihood" element={<Likelihood />} />
          <Route path="/region" element={<Region />} />
          <Route path="/relevance" element={<Relevance />} />
          <Route path="/topic" element={<Topics />} />
          <Route path="/year" element={<Year />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
