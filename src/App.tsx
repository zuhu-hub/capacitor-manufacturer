import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
       <Navbar />
       <main className="flex-grow pt-24">
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/aluminum-electrolytic-capacitors" element={<Products />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
       </main>
       <Footer />
    </div>
  );
}
