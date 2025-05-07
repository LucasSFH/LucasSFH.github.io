import NavMenu from './Components/Utils/NavMenu';
import Footer from './Components/Utils/Footer';
import ScrollToTop from './Components/Utils/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from './Pages/ContactPage'
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import HomePage from './Pages/HomePage'
import PricesPage from './Pages/PricesPage';
import './App.css';

function App() {


  return (
    <div>
        <Router>
          <ScrollToTop /> 
          <NavMenu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/priser" element={<PricesPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/om-os" element={<AboutPage />} />
          </Routes>
          <Footer />
        </Router>
      {/* <Footer /> */}
    </div>

  );
}

export default App;
