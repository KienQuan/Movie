import logo from './logo.svg';
import { createBrowserHistory } from 'history';
import './App.css';
import {Switch, Router} from 'react-router';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login';

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <Switch>
      <UserTemplate path="/login" exact Component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
