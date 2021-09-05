import logo from "./logo.svg";
import "./App.css";
import TypingThroughInput from "./components/TypingThroughInput";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="top">Type Test</div>
        <div id="middle">
          <h1>Middle</h1>
          <TypingThroughInput />
        </div>
        <div id="bottom">Bottom</div>
      </div>
    </div>
  );
}

export default App;
