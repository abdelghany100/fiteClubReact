import "./App.css";
import Hero from "./component/hero/Hero";
import Programs from "./component/Programs/Programs";
import Reasons from "./component/Reasons/Reasons";
import Plans from "./component/Plans/Plans";
import Tetimoials from "./component/Testimonials/Tetimoials";
import Join from "./component/Join/Join";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Tetimoials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
