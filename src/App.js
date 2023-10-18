import { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Product from "./Components/Product";
import Customer from "./Components/Customer";
import Income from "./Components/Income";
import Promote from "./Components/Promote";
import Help from "./Components/Help";

function App() {
 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <Router>
      <div className="app">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`main-content ${isSidebarOpen ? "open" : ""}`}>
          <Home/>
          <Dashboard/>

          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/income" element={<Income />} />
            <Route path="/promote" element={<Promote />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
