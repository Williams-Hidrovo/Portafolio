import React, { useEffect, useState } from 'react'
import { dataPortafolio } from '../data/data'
const {Experiencia1} =dataPortafolio;

const Experiencia = () => {
  const [visible,setVisible]=useState(false);
  const [index,setIndex]=useState(0);
  useEffect(() =>{
    const scrollPos=()=>{
      const scrollY=window.scrollY;
      if(scrollY>1000){
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
  },[]);


//<section className='w-9/12 mx-auto flex flex-col gap-10 my-[50px]'>

  return (
    <section className={visible ? 'w-9/12 mx-auto flex flex-col gap-10 my-[50px] animate__animated animate__fadeIn sm:w-11/12 sm:h-[550px]': 'w-9/12 mx-auto flex flex-col gap-10 my-[50px] animate__animated animate__fadeOut opacity-0 sm:w-11/12' }>
      <div className='flex gap-5 items-center'>
        <h1 className='text-secondary text-4xl'>Experiencia</h1>
        <span className='w-52 h-0.5 bg-tertiary'></span>
      </div>
      <div className='flex sm:flex-col'>
        <div className='flex flex-col border-l-2 border-tertiary w-1/4 sm:flex-row sm:overflow-scroll sm:overflow-y-hidden sm:w-full'>
          {Experiencia1.map((expe,i) =>{
            return(
                <div
                key={expe.cargo}
                onClick={() =>setIndex(i)}
                className={index==i ? 'bg-tertiary/30 cursor-pointer border-l-4 border-tertiary px-3 py-3 my-3' : 'cursor-pointer border-l-4 border-transparent px-3 py-3 my-3' }
                >
                  <h1 className='text-2xl text-white ml-2'>{expe.periodo}</h1>
                </div>
              
            );
          })}
        </div>
        <div className='w-3/4 flex ml-5'>
          
          <div className='w-full flex flex-col ml-5 gap-5 sm:mx-0 sm:mt-5'>
            <h2 className='text-secondary text-2xl'>{Experiencia1[index].Empresa}</h2>
            <p className='text-white text-xl'>{Experiencia1[index].cargo}</p>
            <ul>
              {Experiencia1[index].descripcion.map(desc => (
                <li key={desc} className='text-white my-2'>* {desc}</li>
              ))}
            </ul>

          </div>
        </div>
      </div>
      
      


    </section>
  )
}

export default Experiencia
