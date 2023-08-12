import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import NavBar from "./components/Navbar/navbar";
import MainSection from "./components/Mainsection/mainsection";
import SportsNews from "./components/SportNews/sportnews";
import BusinessNews from "./components/BusinessNews/business";
import HealthNews from "./components/HealthNews/healthnews";
import TechNews from "./components/TechNews/technology";
import EntertainmentNews from "./components/EntertainmentNews/entertainment";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/india" element={<MainSection />} />
        <Route path="/sports" element={<SportsNews />} />
        <Route path="/business" element={<BusinessNews/>}/>
        <Route path="/health" element={<HealthNews/>}/>
        <Route path="/technology" element={<TechNews/>}/>
        <Route path="/entertainment" element={<EntertainmentNews/>}/>
      </Routes>
    </Router>
  );
}


export default App;
