import './App.css';
import { Switch,Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Blog from './pages/Blog/blog';
import CustomNavbar from './components/CustomNavabar';
import CustomFooter from './components/CustomFooter';
import Clubs from './pages/Clubs/Clubs';
import Foyer from './pages/Foyers/Foyer';
import Restaurants from './pages/Restaurants/Restaurants';
import Auth from './pages/Login/Authau';
import Account from './pages/Account/Account';
function App() {
  return (
    <div>
      <CustomNavbar/>
      

        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/clubs" component={Clubs} />
          <Route path="/account" component={Account} />
          <Route path="/foyers" component={Foyer} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/authentification" component={Auth} />
      
          <Route path="/" component={Home} />
        </Switch>
      

      <CustomFooter/>


    </div>
  );
}

export default App;