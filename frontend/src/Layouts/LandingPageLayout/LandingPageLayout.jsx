import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LandingPageLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand */}
          <div
            onClick={() => navigate("/")}
            className="text-2xl font-extrabold text-blue-700 hover:text-red-500 cursor-pointer transition-colors"
          >
            Navkar Physio
          </div>

          {/* Menu Items */}
          <div className="flex items-center space-x-6">
            {["About", "Services", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => navigate(`/${item.toLowerCase()}`)}
                className="text-gray-700 hover:text-red-500 font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-100"
              >
                {item}
              </button>
            ))}

            {/* Dashboard Button */}
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 shadow-md transition-all font-semibold"
            >
              Dashboard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28">
        <Outlet />
      </main>
    </div>
  );
};

export default LandingPageLayout;
