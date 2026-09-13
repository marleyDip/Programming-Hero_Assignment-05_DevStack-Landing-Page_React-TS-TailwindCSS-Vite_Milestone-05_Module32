import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Technology from "./components/Technology/TechnologySection";

function App() {
  // const notify = () => toast("Wow so easy!");

  return (
    <div className="min-h-screen">
      {/* <button onClick={notify}>Notify!</button> */}

      <Navbar />
      <Hero />
      <Technology />
      <Footer />
    </div>
  );
}

export default App;
