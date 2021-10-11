import './App.css';
import './envVariable';
import { BrowserRouter,Route ,Switch} from "react-router-dom";
import Header from './component/Header';
import Login from './component/Login/Login';
import Register from './component/Registration/Registration'
import Profile from './component/Profile/Profile'
import Withdrawl from './component/Withdrawl/Withdrawl';
import Home from './component/Home/Home'
function App() {
  return (
    <div className ='App'>
      <Header/>
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {Login}></Route>
        <Route path = '/profile' component = {Profile}></Route>
        <Route path = '/register' component = {Register}></Route>
        <Route path = '/home' component = {Home}></Route>
        <Route path = '/transaction' component = {Withdrawl}></Route>
      </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
