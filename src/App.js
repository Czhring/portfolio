import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';
import Project from './component/Project/project';
import Contact from './component/Contact/Contact';
import{Route, Routes,} from 'react-router-dom'


function App() {
  return (
   <div>
   < Header />
  <div className="main-page">
   <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path= '/about' element={<About/>}/>
            <Route exact path='/project' element={<Project/>}/>
            <Route exact path= '/contact' element={<Contact/>}/>
      </Routes>
      </div>
   </div>
);
}

export default App;
