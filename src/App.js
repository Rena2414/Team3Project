import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import IraProfile from "./components/IraProfile";

/*function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;*/

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
      <IraProfile />
      </div>
    </div>
  );
}

export default App;