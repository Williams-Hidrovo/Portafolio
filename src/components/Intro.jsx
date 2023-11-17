import React, { useEffect, useState } from 'react'
import {dataPortafolio} from '../data/data';

const Intro = () => {
  const {Intro}=dataPortafolio;
  const scrollToFooter = () => {
    const footer = document.getElementById('miFooter');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='w-9/12 mx-auto h-[90vh] flex flex-col justify-center gap-10 animate__animated animate__fadeIn sm:w-11/12'>
     <p className='text-white text-lg'>{Intro.saludo}</p>
     <h1 className='text-secondary text-7xl font-bold'>{Intro.nombre}</h1>
     <h2 className='text-white text-5xl font-semibold'>{Intro.titulo}</h2>
     <p className='text-white text-lg'>{Intro.descripcion}</p>
     <button className='w-48 h-12 text-tertiary/80 hover:text-tertiary border-tertiary/80 hover:border-tertiary border-2' onClick={scrollToFooter}>Contactame</button>
    </section>
  )
}

export default Intro