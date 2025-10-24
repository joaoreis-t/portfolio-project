import { useEffect, useState } from "react";

import { MobileMenu } from "../MobileMenu";
import { useTheme } from "../../context/ThemeContext";

import darkModeIcon from '../../assets/dark-mode-icon.png'
import lightModeIcon from '../../assets/light-mode-icon.png'
import fechar from '../../assets/fechar.png'
import fecharW from '../../assets/fechar-w.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

export const Header = () => {
  const { isLight, setIsLight } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if(isLight){
      document.documentElement.classList.remove("dark");
    } else{
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem('theme', JSON.stringify(isLight));
  }, [isLight])

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 350);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = ""; 
    }

    return () => {
      document.body.style.overflow = ""; 
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return(
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 px-8 py-6 flex justify-between items-center lg:border-b-2 lg:border-b-[#69C84C61] dark:bg-[#101A23] dark:border-0">
        <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center relative">
          <a href="#" className="text-[30px] text-[#3C3C3C] dark:text-white" 
          style={{
            fontFamily: 'Inconsolata',
            fontWeight: '900'
          }}>&lt;Joao<span className="text-[#69C84C]">Reis</span>/&gt;</a>

          <nav className="hidden lg:flex gap-6 absolute left-1/2 -translate-x-1/2">
            {[
              { id: "sobre", label: "Sobre" },
              { id: "projetos", label: "Projetos" },
              { id: "contato", label: "Contato" },
            ].map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-xl font-medium transition-colors duration-300 ${
                  activeSection === id
                    ? "text-[#69C84C]"
                    : "text-[#2A2A2A] dark:text-white hover:text-[#69C84C]"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div onClick={()=> setIsLight(!isLight)} className={`hidden lg:flex w-[35px] h-[35px] rounded-full items-center justify-center hover:cursor-pointer ${ isLight ? "bg-[#E9ECEF]" : "bg-[#090F14]" } `}>
            {
              isLight ? (
                <img src={darkModeIcon} alt="modo escuro" />
              ) : (
                <img src={lightModeIcon} alt="modo claro" />
              )

            }
          </div>
          <MobileMenu className="lg:hidden" onClick={() => setMenuOpen(true)}/>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 ">

          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] ${
              closing ? "animate-fadeOut" : "animate-fadeIn"
            }`}
            onClick={handleClose}
          />

          <div 
            className={`absolute top-0 right-0 h-screen w-[93%] bg-white shadow-2xl rounded-l-2xl p-8 dark:bg-[#101A23] ${ closing ? "animate-slideOut" : "animate-slideIn" }`}
          >
            <button
              className="text-[#69C84C] font-bold text-lg mb-6"
              onClick={handleClose}
            >
              <img src={isLight ? fechar : fecharW} alt="Fechar" />
            </button>
            <nav className="flex flex-col items-center gap-10 text-2xl font-semibold text-[#69C84C] mt-[140px]">
              <a href="#sobre" onClick={handleClose}>Sobre</a>
              <a href="#projetos" onClick={handleClose}>Projetos</a>
              <a href="#contato" onClick={handleClose}>Contato</a>
              <div className="flex gap-3.5">
                <a 
                  href="https://www.linkedin.com/in/joaomanoel-reis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} width={40} height={40} alt="linkedin" />
                </a>
                <a 
                  href="https://github.com/joaoreis-t"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} width={40} height={40} alt="github" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          @keyframes slideOut {
            from { transform: translateX(0); }
            to { transform: translateX(100%); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }

          .animate-slideIn { animation: slideIn 0.35s ease-out forwards; }
          .animate-slideOut { animation: slideOut 0.35s ease-in forwards; }
          .animate-fadeIn { animation: fadeIn 0.3s ease forwards; }
          .animate-fadeOut { animation: fadeOut 0.3s ease forwards; }
        `}
      </style>
    </>
  );
}