import Header from "./components/Header";
import PokeList from "./components/PokeList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app__container">
      <header>
        <Header />
      </header>
      <main className="main__container">
        <h1 className="title__content">Qual pokémon você escolheria?</h1>
        <PokeList />
      </main>
      <footer className="foo__container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
