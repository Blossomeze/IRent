import Header from './components/Header';
import './App.css';
import Searchbar from './components/Searchbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup'
import Signup2 from './components/SIgnup_2';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms_and_conditions" element={<Terms />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/finish_signup" element={<Signup2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
