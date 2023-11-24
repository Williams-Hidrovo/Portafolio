import React, { useEffect, useState } from 'react'
import { dataPortafolio } from '../data/data'
const {Contacto1} =dataPortafolio;

const Redes = () => {


  //<a href="https://www.facebook.com/WilliamsAntonioXX" target='_blank'><i className="ri-facebook-box-line text-3xl text-gray-300 hover:text-gray-50"></i></a>
  
  return (
    <section className='fixed bottom-0 left-2 animate__animated animate__fadeIn sm:static'>
        <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-center'>
            <a href="https://www.linkedin.com/in/williams-hidrovo/" target='_blank'> <i className="ri-linkedin-box-line text-3xl text-gray-300 hover:text-gray-50"></i></a>
           <a href="https://github.com/Williams-Hidrovo" target='_blank'><i className="ri-github-line text-3xl text-gray-300 hover:text-gray-50"></i></a>
            <a href="mailto:antonioxxw@gmail.com?subject=Portafolio Williams Hidrovo" target='_blank'><i className="ri-mail-line text-3xl text-gray-300 hover:text-gray-50"></i></a>
            <span className='h-[300px] w-[2px] bg-white sm:hidden'></span>
        </div>
      
      

    </section>
  )
}

export default Redes
