import Header from "./Header"
import About from "./About"
import Projects from "./Projects"
import Services from "./Services"
import Contact from "./Contact"
import Footer from "./Footer"
import Navbar from "./Navbar"

const ComponenetRoutes = () => {
  return (
    <>
      <div className="w-full overflow-x-clip">
        <Navbar />
        <Header/>
        <About/>
        <Projects/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default ComponenetRoutes
