import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import WriterDetails from './Components/WriterDetails/WriterDetails';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
    
        <Route path="/home">
           <Home></Home>
        </Route>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/writerDetails/:id">
        <WriterDetails></WriterDetails>
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
        
      </Switch>
      <Footer></Footer>
  </Router>
    </div>
  );
}

export default App;
