import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfoy from "./components/Portfoy";
import Notfound from "./components/Notfound";
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <BrowserRouter>
    <div className="container">
      <div className="example">
        <motion.div style={{ scaleX }} className="progress-bar" />
        <AnimatePresence   mode="wait">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/portfoy" element={<Portfoy />} />
              <Route path="*" element={<Notfound/>} />
            </Routes>
          <ToastContainer position="top-right" />
        </AnimatePresence>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
