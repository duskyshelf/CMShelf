import logo from "./logo.svg";
import ContentBlock from "./components/ContentBlock";
import "./App.css";

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Example Content Site 2</h2>
    </div>
    <ContentBlock contentId={1} />
    <ContentBlock contentId={2} />
    <ContentBlock contentId={3} />
  </div>
);

export default App;
