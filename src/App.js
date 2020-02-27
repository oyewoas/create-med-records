import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './component/navbar/navbar.compnent';
import Footer from './component/footer/footer.componet';
import HomePage from './pages/homepage/homepage.component';


const App = () => {
  return (
    <div>
      <NavBar/>
        <Switch>
            <Route exact path='/'  render={() => <HomePage/>} /> 
        </Switch>
      <Footer/>
    </div>
  );
}


export default App;
