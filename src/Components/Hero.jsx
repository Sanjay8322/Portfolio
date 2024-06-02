import profileImg from '../assets/profileimg.png'
const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col mt-8 lg:mt-15 " name="Hero">
        <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold items-start w-2/3">
            Simplicity is the ultimate sophistication.
            <br/>
            <br/>
            <span className="lg:text-6xl md:text-4xl text-2xl">Leonardo da Vinci</span>
        </h1>
            <div className='flex flex-wrap mt-10 lg:items-center lg:justify-between md:justify-center sm:justify-center ' name="sanjay">
                <div className='flex flex-col justify-start space-y-6 lg:w-1/2 mb-10'>
                    <p className='tracking-wide lg:text-xl md:text-md'>Sanjay is a web developer based in Perambalur, India. He specializes in building MVPs and offers advertising and content writing services. With a strong background in tech and creativity, Sanjay helps startups bring their ideas to life and reach their target audience effectively.</p>
                    <ul className='space-y-2 font-bold tracking-wide'>
                        <li>Design</li>
                        <li>Develop</li>
                        <li>Deliver</li>
                    </ul>
                </div>
                    <img className='w-80 h-80 rounded-xl filter grayscale bg-black object-cover ml-1.5' src={profileImg} alt="" />
            </div>
    </div>
  )
}

export default Hero