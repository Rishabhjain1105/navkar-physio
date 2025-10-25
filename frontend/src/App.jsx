import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import LandingPageLayout from "./Layouts/LandingPageLayout/LandingPageLayout";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page Layout */}
        <Route element={<LandingPageLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
