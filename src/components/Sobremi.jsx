import React, { useEffect, useState } from 'react'
import {dataPortafolio} from '../data/data';
import '../App.css';
const Sobremi = () => {
  const [visible,setVisible]=useState(false);
  const {Sobre}=dataPortafolio;

  useEffect(() =>{
    const scrollPos=()=>{
      const scrollY=window.scrollY;
      if(scrollY>180){
        setVisible(true);
      }
      else{
        setVisible(false);
      }

    };
    //agregar evento scroll...
    window.addEventListener('scroll',scrollPos);
    return ()=>{
      window.removeEventListener('scroll',scrollPos);
    }
  },[]);



  return (
    <section className={visible ?'w-9/12 mx-auto flex flex-col justify-center gap-10 mb-[50px] animate__animated animate__fadeIn sm:w-11/12' : 'w-9/12 mx-auto flex flex-col justify-center gap-10 my-[50px] opacity-0 animate__animated animate__fadeOut sm:w-11/12'}>
      <div className='flex gap-5 items-center'>
      <h1 className='text-secondary text-4xl'>Sobre mi</h1>
      <span className='w-52 h-0.5 bg-tertiary'></span>
      </div>
      <div className='flex sm:flex-col'>
        <div className='w-2/4 sm:w-full'>
          <dotlottie-player src="https://lottie.host/ee5b2f42-5aed-4269-8fdb-106994ef7580/xub8R4Iq0a.json"
          background="transparent"
          speed="1"
          loop autoplay
          >
          </dotlottie-player>
        </div>
        <div className='flex flex-col w-2/4 justify-center gap-5 text-white sm:w-full'>
          <p>{Sobre.parrafo1}</p>
          <p>{Sobre.parrafo2}</p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <h2 className='text-tertiary text-2xl'>Estas son las tegnologias con las que trabajo actualmente</h2>
        <div className='flex flex-wrap mb-10 sx:justify-center'>
          {Sobre.tegnologias.map(teg =>{
            return(
              <div key={teg} className='w-[150px] border-2 border-tertiary text-tertiary text-center px-5 py-2 m-3 sx:text-sm sx:w-[100px]'>
                {teg}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Sobremi
