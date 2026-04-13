import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 shadow-sm bg-white/80 backdrop-blur">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t bg-white">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
