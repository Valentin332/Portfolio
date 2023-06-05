import {dataEsp, dataIng} from '../../projectData';
import Project from './Project'
import { useEffect } from 'react'
export default function Projects(lenguaje){




let projectCards = lenguaje.current === 'Español' ? dataEsp.map((data,ind) => {
    return <Project
    id = {ind}
    key = {ind} 
    nombre = {data.nombre}
    tipo = {data.tipo}
    tecnologias = {data.tecnologias}
    descripcion = {data.descripción}
    img = {data.img}
    link = {data.link}
    />
}) :
dataIng.map((data,ind) => {
    return <Project
    id = {ind}
    key = {ind} 
    nombre = {data.nombre}
    tipo = {data.tipo}
    tecnologias = {data.tecnologias}
    descripcion = {data.descripción}
    img = {data.img}
    link = {data.link}
    />
});

//useEffect(() => { 
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
 // }, []);

return (
<section>
{projectCards}
</section>
    )}