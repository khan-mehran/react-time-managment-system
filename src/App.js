import './App.css';
import Header from './components/header/Header';
// import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import UserForm from './components/userForm/UserForm';
import Admin from './components/adminDashboard/Admin';
import Manager from './components/managerDashboard/Manager';
import User from './components/userDashboard/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/creatuser' component={UserForm} />
          <Route path='/admin' component={Admin} />
          <Route path='/manager' component={Manager} />
          <Route path='/user' component={User} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
