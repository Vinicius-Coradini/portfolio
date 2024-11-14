import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js'
import WelcomeScreen from './component/welcomeScreen.js'
import '../src/css/global.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/welcome' element={<WelcomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
