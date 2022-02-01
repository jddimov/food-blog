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



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => { setIsOpen(!isOpen) };

  return (
    <div>
    
    <Router>
    
     <ScrollToTop />
     <Navbar  toggle={toggle} />
     <Sidebar toggle={toggle} isOpen={isOpen}/>
     
     <Routes>
       <Route path="/food-blog"   element={<Home/>} />
       <Route path="/food-blog/recipes"   element={<Recipes/>} />
       <Route path="/food-blog/inspire"   element={<Inspire/>} />
       <Route path="/food-blog/about"   element={<About/>} />
       <Route path="/food-blog/contacts"   element={<Contacts/>} />

       <Route path="/food-blog/recipes/dessert"   element={<Dessert/>} />
       <Route path="/food-blog/recipes/appetizer"   element={<Appetizer/>} />
       <Route path="/food-blog/recipes/main-dish"   element={<MainDish/>} />
       <Route path="/food-blog/recipes/soup"   element={<Soup/>} />
       <Route path="/food-blog/recipes/pastry"   element={<Pastry/>} />
       <Route path="/food-blog/recipes/salad"   element={<Salad />} />

       <Route path="/food-blog/recipes/:category/:url"   element={<CommercialPage />} />
       <Route path="https://jddimov.github.io/food-blog/recipes/:category/:url"   element={<CommercialPage />} />

       <Route path="*" element={<ErrorPage/> } />
          
    
     </Routes>

     <Footer />

    </Router>

    </div>
  );
}

export default App;
