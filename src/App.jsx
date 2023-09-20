import About from "./Pages/About";
import Services from "./Pages/Services";
import Service from "./Pages/Service";

import Projects from "./Pages/Projects";
import Newsletter from "./components/Newsletter";
import FooterWithSocialMediaIcons from "./components/FooterWithSocialMediaIcons";
// import NavBar from "./components/NabBar";
import Nav from "./components/nav";
import Home from "./Pages/Home";
import Clients from "./components/Clients";
import Team from "./Pages/Team";
import ProjectsSection from "./components/ProjectsSection";
 


function App() {
   
  return (
    <>
      <div className='bg-state-900'>
      
       
      {/* <NavBar /> */}
      <Nav />
      <Home />
      <About />
      
      <Services />
      <Service />
      
      <Clients />
      <Projects />
      <ProjectsSection />
      <Team />
      <Newsletter />
      <FooterWithSocialMediaIcons />
      

      </div>
    </>
  )
}

export default App
