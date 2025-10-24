import { useState } from 'react'

import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import emailIcon from '../../assets/email.png'

export const Contato = () => {
  const [tooltip, setTooltip] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const email = "joaoreis_t@outlook.com";

  const handleMouseEnter = () => setTooltip("Clique aqui para copiar");
  const handleMouseLeave = () => setTooltip("");
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => setPosition({ x: e.clientX, y: e.clientY });

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setTooltip("Email copiado!");
      setTimeout(() => setTooltip(""), 1500);
    } catch (err) {
      setTooltip("Erro ao copiar!");
    }
  };

  return(
    <section id='contato' className="scroll-mt-[105px] mt-[130px] mx-auto">
      <h2 className="text-[28px] lg:text-[35px] text-[#2A2A2A] text-center font-semibold dark:text-white">Contato</h2>
      <p className="my-[50px] text-xl text-[#2A2A2A] text-center font-medium px-8 dark:text-white">Algumas das minhas redes sociais, mande uma mensagem!  📫</p>

      <div className="grid grid-cols-2 gap-6 md:gap-10 px-8 max-w-[408px] md:max-w-[550px] mx-auto">
        <a
          href="https://www.linkedin.com/in/joaomanoel-reis/"
          target="_blank"
          rel="noopener noreferrer"  
          className="bg-[#F6F6F6] shadow-md flex flex-col justify-center items-center rounded-[20px] py-5 gap-4 hover:cursor-pointer dark:bg-[#090F14] transform transition-transform duration-200 hover:scale-105"
        >
          <img src={linkedin} width={80} alt="linkedin" className='md:w-[150px]'/>
          <p className='font-medium md:text-[20px] dark:text-white'>LinkedIn</p>
        </a>
        <a
          href="https://github.com/joaoreis-t"
          target="_blank"
          rel="noopener noreferrer"  
          className="bg-[#F6F6F6] shadow-md flex flex-col justify-center items-center rounded-[20px] py-5 gap-4 hover:cursor-pointer dark:bg-[#090F14] transform transition-transform duration-200 hover:scale-105"
        >
          <img src={github} width={80} alt="github" className='md:w-[150px]'/>
          <p className='font-medium md:text-[20px] dark:text-white'>GitHub</p>
        </a>
        <div className="bg-[#F6F6F6] shadow-md flex flex-col justify-center items-center col-span-2 rounded-[20px] py-5 gap-4 hover:cursor-pointer dark:bg-[#090F14] transform transition-transform duration-200 hover:scale-105" onClick={() => setTooltip("Clique no email para copiar")}>
          <img src={emailIcon} width={80} alt="email" className='md:w-[150px]'/>
          <p 
            className='font-medium md:text-[20px] hover:text-[#69C84C] cursor-pointer transition-colors duration-200 dark:text-white'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
          >
              {email}
          </p>
        </div>
      </div>

      {tooltip && (
        <div
          className="fixed px-3 py-1 bg-black text-white text-sm rounded-md pointer-events-none transition-opacity duration-200 z-50"
          style={{
            top: position.y + 20,
            left: position.x + 10,
          }}
        >
          {tooltip}
        </div>
      )}
    </section>
  );
}