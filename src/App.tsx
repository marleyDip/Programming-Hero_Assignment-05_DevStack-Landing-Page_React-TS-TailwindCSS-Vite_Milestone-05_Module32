import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // const notify = () => toast("Wow so easy!");

  return (
    <div className="min-h-screen">
      {/* <button onClick={notify}>Notify!</button> */}

      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
