import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex h-screen w-[100%]">
      <div className="text-xl w-[100%]">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
