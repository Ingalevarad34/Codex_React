import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
