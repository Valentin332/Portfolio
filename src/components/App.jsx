import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import { Route, Routes, Link } from "react-router-dom"
 
export default function App(){
 const [idioma, setIdioma] = React.useState('Español');
return(
<div>
<NavBar />
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Projects' element={<Projects/>}/>
  </Routes>
</div>

)}