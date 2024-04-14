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
import Profil from './pages/Profil/Profil';
import Foyer from './pages/Foyers/Foyer';
import Restaurants from './pages/Restaurants/Restaurants';
import Auth from './pages/Login/Authau';
import Account from './pages/Account/Account';
import Login from './pages/Login/Login';
import Inbox from './pages/Inbox/inbox';
import compose from './pages/Compose/compose';
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
          <Route path="/profil" component={Profil} />
          <Route path="/account" component={Account} />
          <Route path="/foyers" component={Foyer} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/authentification" component={Auth} />
          <Route path="/inbox" component={Inbox}/>
          <Route path="/compose" component={compose}/>
          <Route path="/" component={Home} />
        </Switch>
      

      <CustomFooter/>


    </div>
  );
}

export default App;