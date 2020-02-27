import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './component/navbar/navbar.compnent';
import HomePage from './pages/homepage/homepage.component';
import Footer from './component/footer/footer.componet';
import SignInPage from './pages/sigin/signin.component';
import ComparePage from './pages/compare/compare.component';
import ResultPage from './pages/result/result.component';
import HistoryPage from './pages/history/history.component'
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import ProtectedRoute from './ProtectedRoute';
import ComparisonDetails from './pages/details/details.components';

const App = ({ currentUser }) => {
  return (
    <div>
      <NavBar/>
        <Switch>
            <Route exact path='/'  render={() => currentUser ? (<Redirect to="/compare-submissions"/>) : (<HomePage/>)} /> 
            <Route path='/signin' render={() => currentUser ? (<Redirect to="/compare-submissions"/>) : (<SignInPage/>)} /> 
            <ProtectedRoute currentUser={currentUser} path='/compare-submissions' component={ComparePage} /> 
            <ProtectedRoute currentUser={currentUser} path='/submissions-result' component={ResultPage} /> 
            <ProtectedRoute currentUser={currentUser} exact path='/history' component={HistoryPage} /> 
            <ProtectedRoute currentUser={currentUser} path='/history/:historyId' component={ComparisonDetails} />
        </Switch>
      <Footer/>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  
})

export default connect(mapStateToProps)(App);
