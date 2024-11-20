import "./App.css";
import Header from "./components/Header";
import Body from "./components/SashaProfile";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="body-container">
                <SashaProfile />
            </div>
        </div>
    );
}

export default App;
