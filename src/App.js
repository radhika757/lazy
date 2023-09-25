import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { lazy, Suspense } from "react";
import  Blogs  from "./components/Blogs";  

// const Blogs = lazy(() => import("./components/Blogs"));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blogs"
            element={
              // <Suspense fallback={<Skeleton/>}> 
                <Blogs />
              // </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
