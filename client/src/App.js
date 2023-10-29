import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddBookPage from "./pages/AddBookPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/AddBookPage" exact element={<AddBookPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
