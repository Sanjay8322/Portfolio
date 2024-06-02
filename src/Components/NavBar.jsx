import { Link } from "react-scroll"


const NavBar = () => {
  return (
    <nav className="sticky top-0 backdrop-blur-lg p-5 z-50" >
        <div className="flex justify-between items-center lg:text-2xl sm:text-xl md:text-xl sm:ml-2 font-bold tracking-wide">
            <Link to="sanjay" smooth={true} offset={-80}><h3>Sanjay</h3></Link>
            <Link to="services" smooth={true}><h3>Services</h3></Link>
            <Link to="projects" smooth={true}><h3>Projects</h3></Link>
        </div>
    </nav>
  )
}

export default NavBar