import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './component/navbar/navbar.compnent';
import Footer from './component/footer/footer.componet';
import CreateMedicalRecords from './pages/create-record/create-record.component';


const App = ({ currentUser }) => {
  return (
    <div>
      <NavBar/>
        <Switch>
            <Route exact path='/'  render={() => <CreateMedicalRecords/>} /> 
            {/* <Route path='/signin' render={() => currentUser ? (<Redirect to="/compare-submissions"/>) : (<SignInPage/>)} /> 
            <ProtectedRoute currentUser={currentUser} path='/compare-submissions' component={ComparePage} /> 
            <ProtectedRoute currentUser={currentUser} path='/submissions-result' component={ResultPage} /> 
            <ProtectedRoute currentUser={currentUser} exact path='/history' component={HistoryPage} /> 
            <ProtectedRoute currentUser={currentUser} path='/history/:historyId' component={ComparisonDetails} /> */}
        </Switch>
      <Footer/>
    </div>
  );
}


export default App;
