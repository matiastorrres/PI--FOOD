import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Nav}/> 
      <Route exact path="/home"><Home/></Route>
    </div>
  );
}

export default App;
