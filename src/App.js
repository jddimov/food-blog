
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Recipes from './pages/Recipes';
import Inspire from './pages/Inspire';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     
     <Routes>
       <Route path="/" exact element={<Home/>} />
       <Route path="/recipes" exact element={<Recipes/>} />
       <Route path="/inspire" exact element={<Inspire/>} />
       <Route path="/about" exact element={<About/>} />
       <Route path="/contacts" exact element={<Contacts/>} />
       
       
     </Routes>
     
    </Router>
    <div style={{ marginTop: "40px" }}></div>
    w App js sym
    </>
  );
}

export default App;
