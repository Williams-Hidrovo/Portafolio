import React, { useEffect, useState } from 'react'
import { dataPortafolio } from '../data/data'
const {Proyectos1} =dataPortafolio;

const Proyectos = () => {
  const [visible,setVisible]=useState(false);
  const [index,setIndex]=useState(0);
  useEffect(() =>{
    const scrollPos=()=>{
      const scrollY=window.scrollY;
      if(scrollY>1400){
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



//<section className='w-9/12 mx-auto flex flex-col gap-10 my-[50px]'>
  return (
      <section className={visible ? 'w-9/12 mx-auto flex flex-col gap-10 my-[60px] animate__animated animate__fadeIn sm:w-11/12 sm:h-[570px]': 'w-9/12 mx-auto flex flex-col gap-10 my-[50px] animate__animated animate__fadeOut opacity-0 sm:w-11/12' }>
      <div className='flex gap-5 items-center'>
        <h1 className='text-secondary text-4xl'>Proyectos</h1>
        <span className='w-52 h-0.5 bg-tertiary'></span>
      </div>
      <div className='flex sm:flex-col'>
        <div className='flex flex-col border-l-2 border-tertiary w-1/4 sm:flex-row sm:overflow-scroll sm:overflow-y-hidden sm:w-full'>
          {Proyectos1.map((proyec,i) =>{
            return(
                <div
                key={proyec.nombre}
                onClick={() =>setIndex(i)}
                className={index==i ? 'bg-tertiary/30 cursor-pointer border-l-4 border-tertiary px-5 py-3 my-3 w-[200px]' : 'cursor-pointer px-5 py-3 my-3 w-[200px]' }
                >
                  <h1 className='text-xl text-white ml-2 sx:text-lg'>{proyec.nombre}</h1>
                </div>
              
            );
          })}
        </div>
        <div className='w-3/4 flex ml-2 sm:flex-col sm:w-full sm:gap-5 sm:m-0 sx:mt-3'>
          <div className='w-[450px] h-[250px] bg-red-400 sm:w-full sm:h-[200px]'>
          <img className='w-full h-full object-cover object-left' src={Proyectos1[index].imagen} alt="" />
          </div>
          
          <div className='w-2/6 flex flex-col ml-5 gap-3 sm:w-full'>
            <h2 className='text-secondary text-xl'>{Proyectos1[index].nombre}</h2>
            <p className='text-white'>{Proyectos1[index].descripcion}</p>
            <h2 className='text-tertiary text-xl'>Tecnologías</h2>
            <p className='text-white'>{Proyectos1[index].tegnologias.toString()}</p>

          </div>
        </div>
      </div>
      


    </section>
  )
}

export default Proyectos
