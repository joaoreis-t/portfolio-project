import { useEffect, useState } from "react";

import mockup1 from '../../assets/mockup1.png'
import mockup2 from '../../assets/mockup2.png'
import mockup3 from '../../assets/mockup3.png'
import github2 from '../../assets/github-2.png'
import github2W from '../../assets/github-2-w.png'

export const Projetos = () => {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return(
    <section id="projetos" className="scroll-mt-[105px] max-w-[980px] mt-[130px] lg:mx-auto">
      <h2 className="text-[28px] lg:text-[35px] text-[#2A2A2A] text-center font-semibold dark:text-white">Projetos em Destaque</h2>
      <p className="my-[50px] text-xl text-[#2A2A2A] text-center font-medium px-8 dark:text-white">Alguns dos projetos que já desenvolvi ou estou desenvolvendo</p>
      <div className='w-full flex justify-center'>
        <div 
          className="
            flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar
            pl-[calc(50%-162px)] pr-6 pb-2.5
            md:grid md:grid-cols-2 md:auto-rows-fr md:gap-8 md:pl-0 md:pr-0

          "
        >

          <div className="w-[300px] shrink-0 md:hidden"></div>

          <div
            className="w-[300px] h-[450px] snap-center bg-[#E9ECEF] rounded-2xl shadow-md p-6 shrink-0 border border-[#E5E5E5] flex flex-col lg:w-[470px] lg:h-[500px] dark:bg-[#090F14] dark:border-0"
          >
            <div className="w-full h-[50%] lg:h-[60%] flex justify-center items-center">
              <img src={mockup1} alt="mockup 1" className='lg:w-[350px] lg:h-[250px] object-contain' />
            </div>
            <div className="w-full h-[50%] lg:h-[40%] pt-2">
              <h3 className="text-[26px] text-center font-semibold text-[#2A2A2A] mb-2.5 dark:text-white">
                Pomotask
              </h3>
              <p className="text-[#555] mb-[30px] text-center font-medium dark:text-white">
                Uma aplicação que combina técnica Pomodoro e lista de tarefas em um só lugar
              </p>
              <div className='flex align-center justify-between gap-3.5'>
                <a 
                  href="https://pomotask-project.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='bg-[#69C84C] text-white font-medium flex-1 py-2.5 rounded-full hover:cursor-pointer active:scale-95 active:brightness-90 transition-all duration-150 transform hover:scale-105 text-center'
                >
                  Acessar Site
                </a>
                <a
                  href="https://github.com/joaoreis-t/pomotask-project"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className='flex gap-1.5 border border-[#2A2A2A] rounded-full flex-1 justify-center py-2.5 hover:cursor-pointer active:scale-95 active:brightness-90 transition-all duration-150 dark:border-white text-center'
                >
                  <span className='text-[#2A2A2A] dark:text-white'>Github</span>
                  <img src={isDark ? github2W : github2} width={22} alt="github" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="w-[300px] h-[450px] snap-center bg-[#E9ECEF] rounded-2xl shadow-md p-6 shrink-0 border border-[#E5E5E5] flex flex-col lg:w-[470px] lg:h-[500px] dark:bg-[#090F14] dark:border-0"
          >
            <div className="w-full h-[50%] lg:h-[60%] flex justify-center items-center">
              <img src={mockup2} alt="mockup 1" className='lg:w-[350px] lg:h-[250px] object-contain' />
            </div>
            <div className="w-full h-[40%] pt-2">
              <h3 className="text-[26px] text-center font-semibold text-[#2A2A2A] mb-2.5 dark:text-white">
                TaskBoard
              </h3>
              <p className="text-[#555] mb-[30px] text-center font-medium dark:text-white">
                Uma Aplicação que gerencia tarefas com prazos, filtragem e dashboard de produtividade.
              </p>
              <div className='flex align-center justify-between gap-3.5'>
                <a 
                  href="https://taskboard-project-theta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className='bg-[#69C84C] text-white font-medium flex-1 py-2.5 rounded-full hover:cursor-pointer active:scale-95 active:brightness-90 transition-all duration-150 transform hover:scale-105 text-center'
                >
                  Acessar Site
                </a>
                <a 
                  href="https://github.com/joaoreis-t/taskboard-project"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className='flex gap-1.5 border border-[#2A2A2A] rounded-full flex-1 justify-center py-2.5 hover:cursor-pointer active:scale-95 active:brightness-90 transition-all duration-150 dark:border-white text-center'
                >
                  <span className='text-[#2A2A2A] dark:text-white'>Github</span>
                  <img src={isDark ? github2W : github2} width={22} alt="github" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="w-[300px] h-[450px] snap-center bg-[#E9ECEF] rounded-2xl shadow-md p-6 shrink-0 border border-[#E5E5E5] flex flex-col lg:w-[470px] lg:h-[500px] dark:bg-[#090F14] dark:border-0"
          >
            <div className="w-full h-[50%] lg:h-[60%] flex justify-center items-center">
              <img src={mockup3} alt="mockup 1" className='mx-auto lg:w-[350px] lg:h-[250px] object-contain' />
            </div>
            <div className="w-full h-[40%] pt-2">
              <h3 className="text-[26px] text-center font-semibold text-[#2A2A2A] mb-2.5 dark:text-white">
                FinanceHub
              </h3>
              <p className="text-[#555] mb-[30px] text-center font-medium dark:text-white">
                Uma aplicação que reune diversas ferramentas para controle de finanças pessoais
              </p>
              <div className='flex align-center justify-between gap-3.5'>
                <button className='bg-[#69C84C] text-white font-medium flex-1 py-2.5 rounded-full hover:cursor-pointer active:scale-95 active:brightness-90 transition-all duration-150'>Em breve</button>
              </div>
            </div>
          </div>

          <div
            className="w-[300px] h-[450px] snap-center bg-[#E9ECEF] rounded-2xl shadow-md p-6 shrink-0 border border-[#E5E5E5] flex flex-col lg:w-[470px] lg:h-[500px] dark:bg-[#090F14] dark:border-0"
          >
            <div className="w-full h-[50%] lg:h-[60%] flex justify-center items-center">
              <img src={mockup3} alt="mockup 1" className='mx-auto lg:w-[350px] lg:h-[250px] object-contain' />
            </div>
            <div className="w-full h-[40%] pt-2">
              <h3 className="text-[26px] text-center font-semibold text-[#2A2A2A] mb-2.5 dark:text-white">
                Coming soon
              </h3>
            </div>
          </div>

          <div className="w-[300px] shrink-0 md:hidden"></div>

        </div>
      </div>
    </section>
  );
}