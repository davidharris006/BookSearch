import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Saved from "./pages/Saved"
import Search from "./pages/Search"



function App() {




 
    return (
      <Router>
        <div>

       
       <Route path exact="/" component={Search} />
       <Route path ="/saved" component={Saved} />
       
    
      </div>
      </Router>
        
    );
}

export default App;
