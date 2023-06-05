import { Link } from 'react-router-dom'
export default function NavBar(lenguaje){
    return(
    <nav className=" fixed top-0 right-0 left-0 border text-white font-semibold border-black flex-row flex justify-around">
    <h1  className='border-r-2  border-r-black
     hover:bg-white hover:text-red-600
     text-xl md:text-4xl text-center py-2  w-1/2 bg-red-600 '>
        <Link to='/'>{lenguaje.current == "Español" ? "ACERCA DE MI" : "ABOUT ME"}</Link>
        </h1>
    <h1 className=' hover:bg-white hover:text-red-600 text-xl md:text-4xl text-center py-2 w-1/2 bg-red-600'>
        <Link to='/Projects'>{lenguaje.current == "Español" ? "PROYECTOS" : "PROJECTS"}</Link>
        </h1>
</nav>


)}