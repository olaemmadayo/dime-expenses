import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import SuccessStory from "./components/SuccessStory";
import PricingForm from "./components/PricingForm"
import MainDashboard from "./components/MainDashboard";
import HowItWorks from "./components/HowItWorks";
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm";


function App() {
  

  return (
   <Router>
    <Routes>
      <Route path="/" element={<HeroSection/>}/>
      <Route path="/main-dashboard/*" element={<MainDashboard/>}/>
      <Route path="/services" element={<SuccessStory/>}/>
      <Route path="/pricing" element={<PricingForm/>}/>
      <Route path="/header-image" element={<HeroSection/>}/>
      <Route path="/how-it-works" element={<HowItWorks/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/sign-up" element={<SignUpForm/>}/>
    </Routes>
   </Router>
  )
}

export default App
