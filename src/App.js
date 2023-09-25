import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Blogs } from "./components/Blogs";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
