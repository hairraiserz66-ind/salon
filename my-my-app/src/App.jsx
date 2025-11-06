 import React, { Suspense } from "react";
 import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import FloatingFAB from "./Components/FloatingFAB.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Contact from "./Pages/Contact.jsx";
import BookNow from "./Pages/Booknow.jsx";



export default function App(){
return (
<div className="min-h-screen bg-[#0a0a0c] text-zinc-100">
<Navbar />
 <ErrorBoundary>
        <Suspense fallback={<div className="p-6">Loading…</div>}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
 <Route path="/services" element={<Services />} />
{/* <Route path="/booking" element={<Booking />} />  */}
<Route path="/contact" element={<Contact />} />
<Route path="/Booknow" element={<BookNow/>}/>

</Routes>
</Suspense>
 </ErrorBoundary>
<FloatingFAB/>
<Footer />
</div>
);
}