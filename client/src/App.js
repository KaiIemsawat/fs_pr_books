import "./App.css";
import DisplayAll from "./components/DisplayAll";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigator from "./components/Navigator";
import AddBook from "./components/AddBook";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigator />
                <Routes>
                    <Route path="/" element={<DisplayAll />} />
                    <Route path="/addBook/form" element={<AddBook />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
