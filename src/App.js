import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Recipes from './pages/Recipes';
import Inspire from './pages/Inspire';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Dessert from './pages/recipes/Dessert';
import Appetizer from './pages/recipes/Appetizer';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => { setIsOpen(!isOpen) };

  return (
    <div style={{ background: "#ffeeed" }}>
    
    <Router>
     <Navbar  toggle={toggle} />
     <Sidebar toggle={toggle} isOpen={isOpen}/>
     
     
     <Routes>
       <Route path="/" exact element={<Home/>} />
       <Route path="/recipes" exact element={<Recipes/>} />
       <Route path="/inspire" exact element={<Inspire/>} />
       <Route path="/about" exact element={<About/>} />
       <Route path="/contacts" exact element={<Contacts/>} />
       <Route path="/recipes/dessert" exact element={<Dessert/>} />
       <Route path="/recipes/appetizer" exact element={<Appetizer/>} />
       
     </Routes>
     {/* <Footer /> */}
    </Router>
    
    w App js sym
    </div>
  );
}

export default App;
