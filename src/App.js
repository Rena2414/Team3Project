import "./App.css";
import Header from "./components/Header";
import AlinaProfile from "./components/AlinaProfile";


function App() {
    return (
        <div className="App">
            <Header />
            <div className="body-container">
                <AlinaProfile />
            </div>
        </div>
    );
}

export default App;