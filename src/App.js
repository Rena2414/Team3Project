import "./App.css";
import Header from "./components/Header";
import AlinaProfile from "./components/AlinaProfile";
import SashaProfile from "./components/SashaProfile";
import Matrokhin from "./components/Matrokhin";
import YaroslavProfile from "./components/YaroslavProfile";
import IraProfile from "./components/IraProfile";
import MykhailoProfile from "./components/MykhailoProfile";
import ShowcaseProfile from "./components/ShowcaseProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-container">
      <Matrokhin/>
      <SashaProfile />
      <IraProfile />
      <MykhailoProfile />
      <YaroslavProfile />
      <AlinaProfile />
      <ShowcaseProfile />
      </div>
    </div>
  );
}


export default App;