import React, { useEffect, useState } from 'react'
import { dataPortafolio } from '../data/data'
const {Contacto1} =dataPortafolio;

const Contactos = () => {
  const [visible,setVisible]=useState(false);
  const [index,setIndex]=useState(0);
  useEffect(() =>{
    const scrollPos=()=>{
      const scrollY=window.scrollY;
      if(scrollY>2400){
        setVisible(true);
      }
      else{
        setVisible(false);
      }

    };
    //agregar evento scroll
    window.addEventListener('scroll',scrollPos);
    return ()=>{
      window.removeEventListener('scroll',scrollPos);
    }
  },[])



  return (
      <section id='miFooter' className={visible ? 'w-9/12 mx-auto flex flex-col gap-10 my-[60px] animate__animated animate__fadeIn sm:w-11/12': 'w-9/12 mx-auto flex flex-col gap-10 my-[50px] animate__animated animate__fadeOut opacity-0 sm:w-11/12' }>
        <div className='flex gap-5 items-center'>
            <h1 className='text-secondary text-4xl'>Contacto</h1>
            <span className='w-52 h-0.5 bg-tertiary'></span>
      </div>
      <div className='flex items-center sm:flex-col'>
      <div className='h-1/2 sm:w-11/12 overflow-hidden'>
        <pre className='text-xl sm:w-11/12 text-tertiary sx:w-11/12 sx:text-[12px]'>{JSON.stringify(Contacto1,null,3)}</pre>
      </div>
      

      <div className='h-1/2 sm:w-full'>
        <dotlottie-player
        src="https://lottie.host/5be26911-248b-4e77-bf46-08d12d2ffd67/mmjHmv0trt.json"
        background="transparent"
        speed="1"
        loop autoplay>
        </dotlottie-player>
      </div>
      </div>
        

        <footer className='mt-5'>
            <hr />
            <div className='text-white text-center text-xl mt-5 sx:text-sm sx:m-2'>
                <h3>Diseñado y Desarrollado por:</h3>
                <h3>Williams Hidrovo Bernal</h3>
            </div>
            
        </footer>
      

    </section>
  )
}

export default Contactos
