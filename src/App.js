import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import PokeList from "./components/PokeList";
import Footer from "./components/Footer";
import "./App.css";
import { TiRefreshOutline } from "react-icons/ti";

function App() {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="app__container">
      {!username && (
        <Modal text={text} setText={setText} setUsername={setUsername} />
      )}
      <header>
        <Header username={username} />
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
