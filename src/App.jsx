import "./App.css";
import {
  Contact,
  Footer,
  Hero,
  Nav,
  Section1,
  Section2,
  Section3,
} from "./components";

function App() {
  return (
    <div className="bg-[#19191B] text-white overflow-hidden">
      <div className="container mx-auto px-10">
        {/* nav */}
        <Nav />
        {/* hero */}
        <Hero />
        {/* section 1 */}
        <Section1 />
        {/* section 2 */}
        <Section2 />
        {/* section 3 */}
        <Section3 />
        {/* contact */}
        <Contact />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
