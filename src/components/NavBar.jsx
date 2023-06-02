import { Link } from 'react-router-dom'
export default function NavBar(){
    return(
    <nav className=" fixed top-0 right-0 left-0 border text-white font-semibold border-black flex-row flex justify-around">
    <h1  className=' hover:bg-white hover:text-red-600 text-4xl text-center py-2  w-1/2 bg-red-600 '><Link to='/'>ACERCA DE MI</Link></h1>
    <h1 className=' hover:bg-white hover:text-red-600 text-4xl text-center py-2 w-1/2 bg-red-600'><Link to='/Projects'>PROYECTOS</Link></h1>
</nav>


)}