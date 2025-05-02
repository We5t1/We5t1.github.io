import { useEffect, useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import CardList from "./components/CardList";
import CardModal from "./components/CardModal";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SignUp from "./components/SignUp";
import { WorkExperienceList } from "./components/CardList";
import { ProjectsSection } from "./components/ProjectsSection";
import FooterMain from "./components/New-footer";

const App = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    filterCards();
    // eslint-disable-next-line
  }, [cards, searchTerm]);

  const filterCards = () => {
    let filteredData = cards;

    if (searchTerm) {
      filteredData = filteredData.filter((card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredCards(filteredData);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route
  path="/about-me"
  element={
    <>
      <Navbar
        searchTerm={searchTerm}
        handleSearchChange={(event) => setSearchTerm(event.target.value)}
      />
      <section className="bg-white">
        <div className="text-center -mb-10">
        </div>
        <WorkExperienceList />
        <ProjectsSection />
        <FooterMain />
        
      </section>
    </>
  }
/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
