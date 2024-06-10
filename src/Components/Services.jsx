
import { services } from "../Data/Icon.jsx"

const Services = () => {
  return (
    <div className="my-20" name="services">
        <h1 className="text-3xl lg:text-6xl md:text-5xl text-center font-semibold tracking-wide">Services</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-10 lg:mt-20 gap-10">
            {services.map((service,index)=>(
                <div  key={index} className=" py-2 px-5 w-full bg-black border border-neutral-500 rounded-xl">
                    <div className="flex justify-center mt-5">
                        <span className="mr-3 text-neutral-400">{service.icon}</span>
                        <span className="text-xl font-semibold tracking-wide text-neutral-400">{service.service}</span>
                    </div>
                    <p className="text-md tracking-wide my-5 text-neutral-500 hover:text-white">{service.description}</p>
                 </div>   
            ))}
        </div>  
    </div>
  )
}

export default Services