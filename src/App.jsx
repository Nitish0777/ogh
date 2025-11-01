import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Departments from "./pages/Departments";
import DepartmentDetail from "./pages/DepartmentDetail";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import HospitalKoparkhairne from "./pages/services/HospitalKoparkhairne";
import HealthCheckup from "./pages/services/HealthCheckup";
import LabYatharth from "./pages/services/LabYatharth";
import UlweCentre from "./pages/services/UlweCentre";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:id" element={<DepartmentDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/hospital-koparkhairne" element={<HospitalKoparkhairne />} />
          <Route path="/services/health-checkup" element={<HealthCheckup />} />
          <Route path="/services/lab-yatharth" element={<LabYatharth />} />
          <Route path="/services/ulwe-centre" element={<UlweCentre />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

