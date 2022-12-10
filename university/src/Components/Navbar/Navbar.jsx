import React from 'react'
import './Navbar.css'
import logo from '../../Resources/Images/logo_una.webp';


const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Navbar-links'>
            <div  className='links'>
            <div className="dropdown">
              <button className="dropbtn"><i className="fa-solid fa-envelope"></i> Correo</button> 
              <i className="arrow down"></i>
              <div className="dropdown-content"> 
  	           <a href="#">Link 1</a> 
  	           <a href="#">Link 2</a> 
  	           <a href="#">Link 3</a> 
            </div> 
           </div> 
           <div className="dropdown"> 
              <button className="dropbtn"><i className="fa-solid fa-desktop"></i>  Aula virtual</button> 
              <i className="arrow down"></i>
              <div className='down'></div>
              <div className="dropdown-content"> 
  	           <a href="#">Link 1</a> 
  	           <a href="#">Link 2</a> 
  	           <a href="#">Link 3</a> 
            </div> 
           </div> 
           <div className="dropdown"> 
              <button className="dropbtn"><i className="fa-solid fa-book"></i> Biblioteca</button>  
           </div> 
           <div className="dropdown"> 
              <button className="dropbtn"><i className="fa-sharp fa-solid fa-square-phone"></i>  Directorio</button> 
           </div> 
           <div className="dropdown"> 
              <button className="dropbtn"><i className="fa-regular fa-calendar-days"></i>  Calendario</button> 
              <i className="arrow down"></i>
              <div className="dropdown-content"> 
  	           <a href="#">Link 1</a> 
  	           <a href="#">Link 2</a> 
  	           <a href="#">Link 3</a> 
            </div> 
           </div> 
           <div className="dropdown"> 
              <button className="dropbtn"><i className="fa-solid fa-circle-question"></i>  Preguntas</button> 
           </div> 
           <div className="dropdown"> 
              <button className="dropbtn"><i className="fa-sharp fa-solid fa-file-invoice"></i>  Documentos</button> 
           </div> 
           <div className="dropdown"> 
              <button className="dropbtn"><i className="fa-solid fa-newspaper"></i>  Noticias</button> 
           </div> 
            </div>
            <div className='social'>
               <div className="socialIcon youtube">
                <i className="fa-brands fa-youtube"></i>
               </div>
               <div className="socialIcon instagram">
                <i className="fa-brands fa-instagram"></i>
               </div>
               <div className="socialIcon twitter">
                 <i className="fa-brands fa-twitter"></i>
               </div>
               <div className="socialIcon facebook">
                 <i className="fa-brands fa-facebook-f"></i>
               </div>
            </div>
        </div>
        <div className='Narvbar-principal'>
            <div className='logo'>
               <img src={logo} alt="" width="300" height="65"/>
            </div>
            <div className='options'>
            <div className="dropdown"> 
              <button className="dropOptions"><i className="fa-solid fa-circle-question"></i>  ACERCA DE LA UNA</button> 
              <i className="arrow down"></i>
              <div className="dropdown-content"> 
  	           <a href="#">Link 1</a> 
  	           <a href="#">Link 2</a> 
  	           <a href="#">Link 3</a> 
            </div> 
           </div> 
           <div className="dropdown"> 
              <button className="dropOptions"><i className="fa-sharp fa-solid fa-file-invoice"></i>  FACULTADES,CENTROS Y SEDES</button> 
           </div> 
           <div className="dropdown"> 
              <button className="dropOptions"><i className="fa-solid fa-newspaper"></i>  ADMISIÓN</button> 
           </div> 
           <div className="dropdown"> 
              <button className="dropOptions"><i className="fa-solid fa-newspaper"></i>  CARRERAS</button> 
           </div> 
           <div className="dropdown"> 
              <button className="dropOptions"><i className="fa-solid fa-newspaper"></i>  INFORMACIÓN PARA</button> 
              <i className="arrow down"></i>
              <div className="dropdown-content"> 
  	           <a href="#">Link 1</a> 
  	           <a href="#">Link 2</a> 
  	           <a href="#">Link 3</a> 
            </div> 
           </div> 
           <div className="dropdown"> 
              <button className="dropOptions"><i className="fa-solid fa-newspaper"></i>  ÁREAS</button> 
              <i className="arrow down"></i>
              <div className="dropdown-content"> 
  	           <a href="#">Link 1</a> 
  	           <a href="#">Link 2</a> 
  	           <a href="#">Link 3</a> 
            </div> 
           </div> 
            </div>
        </div>
    </div>
  )
}

export default Navbar