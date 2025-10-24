import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import ts from '../../assets/ts.png'
import react from '../../assets/react.png'
import next from '../../assets/next.png'

export const Sobre = () => {
  return(
    <section id='sobre' className="scroll-mt-[105px] bg-[#E9ECEF] rounded-2xl ml-8 mr-8 max-w-[980px] mt-[70px] py-[50px] px-5 lg:mx-auto dark:bg-[#090F14]">
      <h2 className="text-[28px] lg:text-[35px] text-[#2A2A2A] font-semibold text-center dark:text-white">Sobre mim</h2>
      <p className="font-medium my-[50px] mx-auto text-center sm:max-w-[570px] md:text-xl lg:max-w-[780px] dark:text-white">
        Olá 👋🏻, me chamo João Reis, tenho 22 anos e estudo Sistemas de Informação no Instituto Federal do Maranhão (IFMA). Atualmente sou Desenvolvedor Frontend, explorando tecnologias como <strong>React</strong>, <strong>TypeScript</strong> e <strong>Tailwind CSS</strong>. Meu objetivo é continuar aprendendo novas tecnologias e evoluir para me tornar um Desenvolvedor Fullstack.
      </p>
      <div className='md:w-[450px] lg:max-w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:w-full gap-[30px] '>
        <div className='bg-white shadow-md rounded-[10px] py-2.5 flex flex-col items-center dark:bg-[#101A23] transform transition-transform duration-200 hover:scale-105'>
          <img src={html} width={40} alt="html" />
          <p className='font-medium dark:text-white'>HTML</p>
        </div>
        <div className='bg-white shadow-md rounded-[10px] py-2.5 flex flex-col items-center dark:bg-[#101A23] transform transition-transform duration-200 hover:scale-105'>
          <img src={css} width={40} alt="css" />
          <p className='font-medium dark:text-white'>CSS</p>
        </div>
        <div className='bg-white shadow-md rounded-[10px] py-2.5 flex flex-col items-center dark:bg-[#101A23] transform transition-transform duration-200 hover:scale-105'>
          <img src={js} width={40} alt="js" />
          <p className='font-medium dark:text-white'>Javascript</p>
        </div>
        <div className='bg-white shadow-md rounded-[10px] py-2.5 flex flex-col items-center dark:bg-[#101A23] transform transition-transform duration-200 hover:scale-105'>
          <img src={ts} width={40} alt="ts" />
          <p className='font-medium dark:text-white'>Typscript</p>
        </div>
        <div className='bg-white shadow-md rounded-[10px] py-2.5 flex flex-col items-center dark:bg-[#101A23] transform transition-transform duration-200 hover:scale-105'>
          <img src={react} width={40} alt="react" />
          <p className='font-medium dark:text-white'>React</p>
        </div>
        <div className='bg-white shadow-md rounded-[10px] py-2.5 flex flex-col items-center dark:bg-[#101A23] transform transition-transform duration-200 hover:scale-105'>
          <img src={next} width={40} alt="next" />
          <p className='font-medium dark:text-white'>Next.js</p>
        </div>
      </div>
    </section>
  );
}