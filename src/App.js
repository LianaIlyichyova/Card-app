import "./App.css";
import Header from "./components/header/header";
import MainBlock from "./components/main-block/main-block";
import SideBlock from "./components/side-block/side-block";

function App() {
  return (
    <div className="App">
      <SideBlock />
      <header className="App-header">
        <Header />
      </header>
      <MainBlock />
      <footer></footer>
    </div>
  );
}

export default App;
