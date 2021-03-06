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
import MainDish from './pages/recipes/MainDish';
import Soup from './pages/recipes/Soup';
import Pastry from './pages/recipes/Pastry';
import Salad from './pages/recipes/Salad';
import ErrorPage from './pages/ErrorPage';
import CommercialPage from './pages/recipes/CommercialPage';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollButton from './components/ScrollButton/ScrollButton';




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => { setIsOpen(!isOpen) };

  return (
    <div>
    
    <Router basename="/food-blog">
    
     <ScrollButton/>
     <ScrollToTop />
     <Navbar  toggle={toggle} />
     <Sidebar toggle={toggle} isOpen={isOpen}/>
     
     <Routes>
       <Route exact path="/"   element={<Home/>} />
       <Route path="/recipes"   element={<Recipes/>} />
       <Route path="/inspire"   element={<Inspire/>} />
       <Route path="/about"   element={<About/>} />
       <Route path="/contacts"   element={<Contacts/>} />

       <Route path="/recipes/dessert"   element={<Dessert/>} />
       <Route path="/recipes/appetizer"   element={<Appetizer/>} />
       <Route path="/recipes/main-dish"   element={<MainDish/>} />
       <Route path="/recipes/soup"   element={<Soup/>} />
       <Route path="/recipes/pastry"   element={<Pastry/>} />
       <Route path="/recipes/salad"   element={<Salad />} />

       <Route path="/recipes/:category/:url"   element={<CommercialPage />} />

       <Route path="*" element={<ErrorPage/> } />
          
    
     </Routes>

     <Footer />

    </Router>

    </div>
  );
}

export default App;
