import './App.css';
import SongOverview from './components/SongOverview';
import About from './components/about';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <ul className='navBar'>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/about">About Me</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<SongOverview />}></Route>
          <Route exact path='about' element={< About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
