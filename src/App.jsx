import { Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import "./App.css";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
    </>
  );
}
