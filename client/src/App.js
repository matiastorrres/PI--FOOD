import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Nav}/> 
      <Route exact path="/home"><Home/></Route>
      <Route exact path="/home/:id"><Detail/></Route>
      <Route exact path="/create" component={Create}/> 
    </div>
  );
}

export default App;
