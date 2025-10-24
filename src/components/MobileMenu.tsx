type MobileMenuProps = {
  className?: String;
  onClick?: () => void;
}

export const MobileMenu = ({className, onClick}: MobileMenuProps) => {
  return (
    <button 
      onClick={onClick}
      className={`w-[35px] h-[35px] flex flex-col gap-2 justify-center items-center ${className}`}
    >
      <div className="w-8 h-[3px] bg-black dark:bg-white rounded-full"></div>
      <div className="w-8 h-[3px] bg-black dark:bg-white rounded-full"></div>
      <div className="w-8 h-[3px] bg-black dark:bg-white rounded-full"></div>
    </button>
  );
}