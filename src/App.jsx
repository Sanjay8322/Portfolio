import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import NavBar from "./Components/NavBar"
import Projects from "./Components/Projects"
import Services from "./Components/Services"


const App = () => {
  return (
    <>
    <NavBar/>
    <div className="p-10">     
      <Hero />
      <Projects/>
      <Services/>
      <Contact />
    </div>
    <Footer/>
    </>
  )
}

export default App