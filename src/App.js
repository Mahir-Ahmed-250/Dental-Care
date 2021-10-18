
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About Us/AboutUs';
import Doctors from './Components/Doctors/Doctors/Doctors';

import Home from './Components/Home/Home/Home';
import ServiceDetails from './Components/Home/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
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
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
