import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import { Route, Routes, Link } from "react-router-dom"
 
export default function App(){
 const [idioma, setIdioma] = React.useState('Español');

function changeLanguage(){ setIdioma(oldStatus => oldStatus == "Español" ? "English" : 'Español') 
console.log(idioma)
};

return(
<div className='font-[Roboto]'>
<NavBar
current = {idioma} 
/>
<Routes>
  <Route path='/' element={<Home
  current = {idioma}
  set = {changeLanguage}
  />} />
  <Route path='/Projects' element={<Projects
  current = {idioma}
  set = {changeLanguage}
  />
  }/>
  </Routes>
</div>

)}