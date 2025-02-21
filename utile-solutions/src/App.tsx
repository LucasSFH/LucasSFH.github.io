import NavMenu from './Components/Utils/NavMenu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import './App.css';

function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
