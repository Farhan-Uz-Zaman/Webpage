import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Description from "./components/Description";
import Interests from "./components/Interests";
import Publication from "./components/Publication";
import Education from "./components/Education";
import Others from "./components/Others";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Image />
      <Description />
      <Interests />
      <Publication />
      <Education />
      <Others />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
