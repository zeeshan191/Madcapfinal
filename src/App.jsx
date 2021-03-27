import React  from 'react';
import './index.css';
import './App.css';


import {  Switch ,  Route, Redirect} from 'react-router-dom';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Service from './components/Pages/Service';
import ContactForm from './components/Pages/ContactForm';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar'
function App() {

return ( <> 


<Navbar />
<Switch>
   <Route exact path= "/Home" component={Home}/>
    <Route exact path="/About" component={About}/>
    <Route exact path= "/Service" component={Service}/>
    <Route exact path="/Contact" component={ContactForm}/>
    <Redirect to="/Home"/>
</Switch> 


  
    </>
  );

   


};
export default App;
