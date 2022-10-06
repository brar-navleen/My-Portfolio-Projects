import portfolioImage from './assets/portfolio-image.png'
import githubImage from './assets/mygithub.png'
import linkedInImage from './assets/linkedin.png'
import { buttonShadowEffect } from './tailwind_constants'
export const Intro = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className='w-full lg:w-1/2 flex flex-col'>
          <div className='p-8 flex-1 flex items-center'>
            <div>
              <div className='font-extrabold lg:text-6xl md:text-5xl text-4xl text-[#371064]'>Navleen Kaur Brar</div>
              <div className='lg:text-2xl md:text-xl text-lg mt-4 text-gray-400 font-bold'>FRONT-END WEB DEVELOPER + DESIGNER</div>
              <div className='lg:text-2xl md:text-xl text-lg mt-8 text-[#371064]'>An aspiring Front-End Web Developer and Designer passionate about designing interactive web applications
                with strong organizational and problem solving skills</div>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 text-[#371064] p-8 lg:text-xl md:text-lg text-md'>
            <div className='flex items-center gap-4'><span className="lg:text-4xl md:text-4xl text-3xl material-symbols-rounded">remember_me</span>
              604-418-3860
            </div>
            <div className='flex items-center gap-4'><span className="lg:text-4xl md:text-4xl text-3xl material-symbols-rounded">mail</span>
              navleensandhu0211@gmail.com
            </div>
            <div className='flex items-center gap-4 '>
              <a href='https://github.com/Navleenkaursandhu' target='_blank' rel="noreferrer">
                <button><img className={`lg:w-9 md:w-9 w-7 rounded-sm ${buttonShadowEffect} shadow-[#00000094] hover:shadow-[#00000094]`} src={githubImage} /></button>
              </a>
              Github
            </div>
            <div className='flex items-center gap-4'>
              <a href='https://www.linkedin.com/in/n-s-813167222/' target='_blank' rel="noreferrer">
                <button><img className={`lg:w-9 md:w-9 w-7 rounded-sm ${buttonShadowEffect} shadow-[#5d92b9] hover:shadow-[#5d92b9]`} src={linkedInImage} /></button>
              </a>
              LinkedIn
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <img src={portfolioImage} />
        </div>
      </div>
    </>
  )
}