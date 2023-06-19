import "./App.css";
import DisplayAll from "./components/DisplayAll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./components/Navigator";
import AddBook from "./components/AddBook";
import DisplayOne from "./components/DisplayOne";
import EditBook from "./components/EditBook";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigator />
                <Routes>
                    <Route path="/" element={<DisplayAll />} />
                    <Route path="/addBook/form" element={<AddBook />} />
                    <Route path="/displayOneBook/:id "element={<DisplayOne />}/>
                    <Route path="/editBook/:id" element={<EditBook />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
