import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About Us/AboutUs';
import Doctors from './Components/Doctors/Doctors/Doctors';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Registration from './Components/Registration/Registration';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import SingleService from './Components/SingleService/SingleService';
import ThumbsUp from './Components/ThumbsUp/ThumbsUp';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/services/:id'>
              <SingleService></SingleService>
            </PrivateRoute>
            <PrivateRoute exact path='/thumbsUp'>
              <ThumbsUp></ThumbsUp>
            </PrivateRoute>
            <Route exact path='/doctors'>
              <Doctors></Doctors>
            </Route>
            <Route exact path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route exact path='/registration'>
              <Registration></Registration>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
