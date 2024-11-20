import "./App.css";
import Header from "./components/Header";
import YaroslavProfile from "./components/YaroslavProfile";



function App() {
    return (
        <div className="App">
            <Header />
            <div className="body-container">
                <YaroslavProfile />
            </div>
        </div>
    );
}

export default App;