import "./App.css";
import DisplayAll from "./components/DisplayAll";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigator from "./components/Navigator";
import AddBook from "./components/AddBook";
import DisplayOne from "./components/DisplayOne";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigator />
                <Routes>
                    <Route path="/" element={<DisplayAll />} />
                    <Route path="/addBook/form" element={<AddBook />} />
                    <Route path="/displayOneBook/:id" element={<DisplayOne />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
