import { Link } from 'react-router-dom'
export default function NavBar(lenguaje){
    return(
    <nav className=" fixed top-0 right-0 left-0 border text-white font-semibold border-black flex-row flex justify-around">
    <Link to='/' className='border-r-2  border-r-black
     hover:bg-white hover:text-red-600
     text-xl md:text-4xl text-center py-2  w-1/2 bg-red-600 '>
        {lenguaje.current == "Español" ? "ACERCA DE MI" : "ABOUT ME"}
        </Link>
        <Link to='/Projects'
        className=' hover:bg-white hover:text-red-600 text-xl md:text-4xl text-center py-2 w-1/2 bg-red-600'
        >{lenguaje.current == "Español" ? "PROYECTOS" : "PROJECTS"}
        </Link>
</nav>


)}