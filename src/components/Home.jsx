import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faHtml5, faCss3, faJs, faPhp, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
export default function Home(){
   useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

return(
   <section>
      <h1 className="text-9xl text-center mb-10"><br/>¡Hola!</h1>
<article id='about' className='flex'>
<img className="md:h-[60rem] border  rounded-xl" src='../../public/val.png.png'/>
<div className="text-4xl">
   <p className="leading-loose ml-4">Me llamo Valentín Fidao, soy un desarrollador web autodidacta que está en busca de nuevas oportunidades y desafios.
   <br/>
   Soy de Argentina, estudio y practico el desarrollo web hace casi un año. Comencé por curiosidad y descubrí la satisfacción que genera poder resolver problemas y desarrollar algo nuevo e util.
   
   </p>
   </div>
</article>
<article className="text-4xl my-40 text-center" id='skills'>
<h2 className='text-5xl'>Lo que sé :</h2>
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
   TailwindCSS,{" "} 
   <FontAwesomeIcon icon={faBootstrap} style={{color:'purple',}}/> Bootstrap.</li>
  <li className="my-6">
   <FontAwesomeIcon icon={faReact} style={{color:'blue',}}/>React,{" "} 
  Redux, Typescript.</li>
  </ul>
  <ul>
  <li  className="my-6">Vite.JS, Git, Github.</li>
  <li className="my-6">Fundamentos de diseño UI.</li>
  <li className='my-6'>Comunicación y metodologias agiles.</li> 
</ul>
</div>

</article>
<article className="text-4xl text-center pb-10" id='contact'>
   <h1 className='text-5xl'>Contacto</h1>
   <h2 className='my-4'>Telefono: (+54) 341 384 0067</h2>   
   <h2 className='my-4'><FontAwesomeIcon icon={faEnvelope} /> Mail: valenfidao332@gmail.com</h2>   
   <h2 className='my-4'>GitHub: <a target='_blank' href='https://github.com/Valentin332'>
      <FontAwesomeIcon icon={faGithub} /> 
      </a> 
      </h2>
   <h2 className='my-4'>LinkedIN: <a target='_blank' href='https://www.linkedin.com/in/valentin-fidao-789582229/'>
      <FontAwesomeIcon icon={faLinkedin} /> 
      </a> 
      </h2>   
</article>
</section>
)};