import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Team from "./Team/Team";
import AnimatedDivider from "./AnimatedDivider/AnimatedDivider";

function App() {
  return (
    <>
    <Header />
    <About />
    <AnimatedDivider />

    <Services />
    <AnimatedDivider/>

    <Team />
    <Contact />
    </>
  );
}


export default App
