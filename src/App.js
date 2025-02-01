import React, { useRef } from "react";
import "cal-sans";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Welcome from "./Components/Welcome/Welcome";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import SubmitProfile from "./Components/SubmitProfile/SubmitProfile";

function App() {
  const welcomeRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const contactUsRef = useRef(null);

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar
        onScrollTo={{
          welcome: () => handleScrollTo(welcomeRef),
          whatWeDo: () => handleScrollTo(whatWeDoRef),
          contactUs: () => handleScrollTo(contactUsRef),
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <div className="allComps">
                <div className="bgtMain">
                  <div className="bgTexture"></div>
                  <div className="bgTexture"></div>
                </div>
                <div className="wwcf acww">
                  <div ref={welcomeRef}>
                    <Welcome />
                  </div>
                  <div ref={whatWeDoRef}>
                    <WhatWeDo />
                  </div>
                  <div ref={contactUsRef}>
                    <ContactUs />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route path="/submit-profile" element={<SubmitProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
