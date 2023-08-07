import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/companies/companies";
import "./App.css";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
    </div>
  );
}

export default App;
