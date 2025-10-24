import { useState, useEffect } from 'react';

import seta from '../../assets/seta.png'

export const Hero = () => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
    className={`py-[70px] px-10 mt-24 md:py-[130px] flex flex-col gap-30 sm:gap-50 transition-all duration-700 ease-out dark:bg-[#101A23]
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div>
        <h1 className="text-[45px] font-semibold text-[#2A2A2A] text-center tracking-[-0.05em] md:text-[56px] dark:text-white">Olá 👋, eu sou o <span className="text-[#69C84C]">João Reis</span></h1>
        <p className="text-center text-xl text-[#717070] mt-6 md:text-2xl md:mt-8 dark:text-white">Desenvolvedor Frontend</p>
        <div className="flex flex-wrap mt-[50px] gap-6 justify-center">
          <button  onClick={() => { document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" }); }} className="bg-[#69C84C] py-2.5 px-8 rounded-full text-white font-bold shadow-md w-40 hover:cursor-pointer active:scale-95 active:brightness-90 transition-all duration-150">Ver Projetos</button>
          <button onClick={() => { document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" }); }} className="bg-[#F6F6F6] py-2.5 px-8 rounded-full text-[#474747] font-bold shadow-md w-40 hover:cursor-pointer active:scale-95 active:brightness-90 transition-all duration-150">Contato</button>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={seta}
          alt="seta"
          className="relative"
        />
      </div>
    </section>
  );
}