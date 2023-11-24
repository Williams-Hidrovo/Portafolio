import React, { useEffect, useState } from 'react'
import { dataPortafolio } from '../data/data'
const {Cursos1} =dataPortafolio;

const Cursos = () => {
  const [visible,setVisible]=useState(false);
  const [index,setIndex]=useState(0);
  useEffect(() =>{
    const scrollPos=()=>{
      const scrollY=window.scrollY;
      if(scrollY>1900){
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
      <section className={visible ? 'w-9/12 mx-auto flex flex-col gap-10 my-[60px] animate__animated animate__fadeIn sm:w-11/12 sm:overflow-x-hidden': 'w-9/12 mx-auto flex flex-col gap-10 my-[50px] animate__animated animate__fadeOut opacity-0 sm:w-11/12' }>
      <div className='flex gap-5 items-center'>
        <h1 className='text-secondary text-4xl sm:text-2xl'>Cursos</h1>
        <span className='w-52 h-0.5 bg-tertiary'></span>
      </div>
      <div className='flex sm:flex-col overflow-x-hidden'>
        <div className='flex flex-col border-l-2 sm:overflow-y-hidden border-tertiary w-1/4 sm:flex-row sm:w-full sm:overflow-scroll'>
          {Cursos1.map((curso,i) =>{
            return(
                <div
                key={curso.titulo}
                onClick={() =>setIndex(i)}
                className={index==i ? 'bg-tertiary/30 cursor-pointer border-l-4 border-tertiary px-5 py-3 my-3 w-[200px]' : 'cursor-pointer px-5 py-3 my-3 w-[200px]' }
                >
                  <h1 className='text-xl text-white mr-2 sx:text-[15px] sx:w-[100px]'>{curso.titulo}</h1>
                </div>
              
            );
          })}
        </div>
        <div className='w-3/4 flex ml-2 gap-2 sm:flex-col sm:w-full sm:m-0'>
          <div className='w-2/6 flex flex-col ml-5 gap-3 sm:w-full sm:mt-10'>
            <h2 className='text-secondary text-xl'>{Cursos1[index].titulo}</h2>
            <p className='text-white'>{Cursos1[index].descripcion}</p>
          </div>
          <div className='w-4/6 h-[250px] bg-red-400 sm:w-full'>
          <img className='w-full h-full object-cover object-top' src={Cursos1[index].imagen} alt="" />
          </div>
        </div>
      </div>
      


    </section>
  )
}

export default Cursos
