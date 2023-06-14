import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserCog, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faGitSquare, faGithub, faLinkedin, faHtml5, faCss3, faJs, faPhp, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
export default function Home(lenguaje){
   useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

return(
   <section>
      <h1 className=" text-7xl md:text-9xl text-center mb-10"><br/>
      { lenguaje.current == "Español" ? "¡Hola!" : "Welcome!"}
      </h1>

      <div className='text-center'>
      <button className=' bg-blue-600 hover:bg-blue-500 hover:scale-110 text-white  text-xl p-2  my-4 rounded-lg' onClick={lenguaje.set}>
      {lenguaje.current != 'Español' ? "Cambiar idioma a Español" : "Change language to  English"}
      </button>
      </div>
      
<article id='about' className='flex flex-col md:px-2 md:flex-row'>
<img className=" h-1/3 md:h-[50rem] border  rounded-xl" src='../../val.png.png'/>
<div className=" text-2xl md:text-4xl">
 {lenguaje.current == "Español" ?
   <p className=" px-2 leading-loose md:p-0  md:ml-4">Me llamo Valentín Fidao, soy un desarrollador web autodidacta que está en busca de nuevas oportunidades y desafios.
   <br/>
   Soy de Argentina, estudio y practico el desarrollo web hace casi un año. Comencé por curiosidad y descubrí la satisfacción que genera poder resolver problemas y desarrollar algo nuevo e util.
   </p>
   :
   <p className="leading-loose ml-4">My name is Valentín Fidao, i´m a self-taught web developer who is looking for new challenges and opportunities.
   <br/>
  I´m from Argentina, i´ve been studying and practising web developing for almost a year now. I started looking at it out of curiosity and then  discovered the joy that it brings being able to solve complex problems and create something new and useful.
   </p>
   }
   </div>
</article>
<article className=" text-2xl md:text-4xl my-40 text-center" id='skills'>
<h2 className=' my-4 text-3xl md:text-5xl'>{lenguaje.current == "Español" ? "Habilidades :" : "My skills:"}</h2>
<div className='grid grid-cols-2'>
<ul>
  <li className="my-6">
   <FontAwesomeIcon icon={faHtml5} style={{color: "#d76f0f",}} /> HTML5,{" "}   
   <FontAwesomeIcon icon={faCss3} style={{color: "cyan",}} /> CSS.
   </li>
   <li className='my-6'>
   <FontAwesomeIcon icon={faJs} style={{color: "#F0DB4F",}} /> Javascript,{" "} 
   <FontAwesomeIcon icon={faPhp} style={{color: "purple",}} /> PHP.
      </li>   
  <li className="my-6">
   <img className='inline w-8 h-8 md:w-10 md:h-10' src='../../logos/Tailwind_CSS_Logo.svg.png'/> TailwindCSS,{" "} 
   <FontAwesomeIcon icon={faBootstrap} style={{color:'purple',}}/> Bootstrap.</li>
  <li className="my-6">
   <FontAwesomeIcon icon={faReact} style={{color:'blue',}}/>React,{" "} 
   <img className='inline w-8 h-8 md:w-10 md:h-10' src='../../logos/redux_logo.png'/> Redux,{' '} 
   <img className='inline w-8 h-8 md:w-10 md:h-10' src='../../logos/typescript_logo.png'/> Typescript.
  </li>
  </ul>

  <ul>
  <li  className="my-6">
  <img className='inline w-8 h-8 md:w-10 md:h-10' src='../../logos/vite_js.png'/> Vite.JS,{' '} 
   <FontAwesomeIcon icon={faGitSquare} /> Git,{' '} 
  <FontAwesomeIcon icon={faGithub} />Github.
  </li>
  <li className="my-6">
  <FontAwesomeIcon icon={faUserCog} />{' '}
   {lenguaje.current == "Español" ? "Fundamentos de diseño UI." : "Ui design fundamentals"}
   </li>
  <li className='my-6'>
  <FontAwesomeIcon icon={faPeopleGroup} />{' '}
  {lenguaje.current == "Español" ? "Comunicación y metodologias agiles." : "Communication and Agile methodologies"}
   </li> 
</ul>
</div>

</article>
<article className=" text-3xl md:text-4xl text-center pb-10" id='contact'>
   <h1 className=' text-4xl md:text-5xl'>
   {lenguaje.current == "Español" ? "Contacto" : "Contact info"}
      </h1>
   <h2 className='my-4'>
   {lenguaje.current == "Español" ? "Telefono:" : "Cellphone"} (+54) 341 384 0067
      </h2>   
   <h2 className='my-4'><FontAwesomeIcon icon={faEnvelope} /> Mail: valenfidao332@gmail.com</h2>   
   <h2 className='my-4'>GitHub: <a target='_blank' href='https://github.com/Valentin332'
   className='hover:text-blue-400'>
   <FontAwesomeIcon icon={faGithub} /> 
      </a> 
      </h2>
   <h2 className='my-4'>LinkedIN:{" "} 
   <a target='_blank' href='https://www.linkedin.com/in/valentin-fidao-789582229/'
   className='hover:text-blue-400'>
   <FontAwesomeIcon icon={faLinkedin}/> 
      </a> 
      </h2>   
</article>
</section>
)};