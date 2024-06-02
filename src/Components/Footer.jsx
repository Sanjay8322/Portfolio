import { Linkedin } from "lucide-react"
import { X } from "lucide-react"
import { Link } from "react-scroll"
import sign from '../assets/signLogo.png'
const Footer = () => {
  return (
   <footer className="mt-10 lg:mt-20 bg-black p-20">
        <div className="text-gray-400 flex justify-between items-center">
            <div className="">
                {/* <h2 className="mb-3 tracking-wide text-xl">Socials</h2> */}
                <ul>
                    <a href="https://www.linkedin.com/in/sanjay-e/" target="blank"><li className="hover:text-white tracking-wide mb-3"><Linkedin/></li></a>
                    <a href="https://x.com/sn_jayyy" target="blank"><li className="hover:text-white tracking-wide mb-3"><X/></li></a>
                </ul>
            </div>
            <div className="w-20 h-20">
                <img src={sign} alt=""/>
            </div>
            <div className="lg:text-xl md:text-xl font-thin sm:text-md">
                <ul>
                    <li className="hover:text-white tracking-wide mb-3"><Link to="Hero" offset={-100} smooth={true}>Home</Link></li>
                    <li className="hover:text-white tracking-wide mb-3"><Link to="projects" smooth={true}>Projects</Link></li>
                    <li className="hover:text-white tracking-wide mb-3"><Link to="services" smooth={true}>Services</Link></li>
                    <li className="hover:text-white tracking-wide mb-3"><Link to="contact" smooth={true}>Contact</Link></li>
                </ul>
            </div>
        </div>
   </footer>
  )
}

export default Footer