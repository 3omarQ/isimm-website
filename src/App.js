import './App.css';
import { Switch,Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Vie_Etudiantine from './pages/Vie_Etudiantine/Vie_Etudiantine';
import CustomNavbar from './components/CustomNavabar';
import CustomFooter from './components/CustomFooter';
import Clubs from './pages/Clubs/Clubs';
import Profil from './pages/Profil/Profil';
function App() {
  return (
    <div>
      <CustomNavbar/>
      

        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/about" component={About} />
          <Route path="/vie_etudiantine" component={Vie_Etudiantine} />
          <Route path="/contact" component={Contact} />
          <Route path="/clubs" component={Clubs} />
          <Route path="/profil" component={Profil} />
          <Route path="/" component={Home} />
        </Switch>
      

      <CustomFooter/>


    </div>
  );
}

export default App;
