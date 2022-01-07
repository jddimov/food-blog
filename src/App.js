
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
       <Route path="/" exact element={<Home/>} />
       <Route path="/" exact element={<recipes/>} />
       <Route path="/" exact element={<inspire/>} />
       <Route path="/" exact element={<about/>} />
       <Route path="/" exact element={<contacts/>} />
       
       
     </Routes>
     
    </Router>
    
  );
}

export default App;
