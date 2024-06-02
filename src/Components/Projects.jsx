import { projects } from "../Data/Data"
const Projects = () => {
  return (    
    <div className="" name="projects">
      <h2 className="text-3xl lg:text-6xl md:text-5xl tracking-wide text-center my-10 font-semibold">Projects</h2>
        <div className="grid lg:grid-cols-3 w-full gap-5 md:grid-cols-2 sm:grid-cols-1">
          {projects.map((project,index)=>(
            <div key={index} className="flex flex-col justify-center items-center grayscale hover:grayscale-0 w-md h-md space-y-4 my-5">
              <a href={project.link} target="blank"><img src={project.project_img} alt="" className="w-md h-md rounded-xl"/></a>
                <p className="tracking-wide">{project.project_name}</p>
                <img src={project.stack_logo} alt="" className="w-10 h-10 " />
            </div>
          ))}
      </div>
    </div>
   
  )
}

export default Projects