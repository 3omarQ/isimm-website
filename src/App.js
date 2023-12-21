import './App.css';
import { BrowserRouter as Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Vie_Etudiantine from './pages/Vie_Etudiantine/Vie_Etudiantine';
import CustomNavbar from './components/CustomNavabar';
import CustomFooter from './components/CustomFooter';
function App() {
  return (
    <div>
      <CustomNavbar/>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/courses" element={Courses} />
        <Route path="/about" element={About} />
        <Route path="/vie_etudiantine" element={Vie_Etudiantine} />
        <Route path="/contact" element={Contact} />
      </Switch>

      <CustomFooter/>


    </div>
  );
}

export default App;
