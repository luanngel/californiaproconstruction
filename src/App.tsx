import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ServicePage from "./pages/ServicePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}
