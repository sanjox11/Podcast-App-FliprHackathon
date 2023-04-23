import './App.css';
import LoginPage from './pages/LoginPage';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import 
{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
   <div>
    <Router>
    <Routes>
          <Route exact path="/" element={<Welcome/>}/>
          <Route exact path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
