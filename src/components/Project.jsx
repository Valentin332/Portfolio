export default function Project(proyecto){
const imgUrl = '../../' + proyecto.img;
return(
<div className=" bg-white border-2 rounded-t-lg border-black text-center my-8  mx-6 ">
  <a target="_blank" href={proyecto.link} ><img className=" rounded-t-lg" src={imgUrl}/></a>
  <section className="py-2">
  <a target="_blank" href={proyecto.link} className="hover:text-blue-600">
    <h2 className="text-4xl border-b border-b-black">{proyecto.nombre}</h2>
    </a>
  <h3 className="text-3xl border-b border-b-black ">Tipo: {proyecto.tipo}</h3>
  <h4 className="text-2xl border-b border-b-black ">{proyecto.tecnologias}</h4>
  <p className="text-lg py-2">{proyecto.descripcion}</p>
  </section>  
</div>

    )};