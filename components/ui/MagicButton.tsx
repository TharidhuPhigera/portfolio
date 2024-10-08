import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
} : { title: string, icon:React.ReactNode, position:string, handleClick?: () => void; otherClasses?: string;}
) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-full md:w-60 md:mt-8" onClick={handleClick}>
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[linear-gradient(to_right,_#E0F7FA,_#80DEEA,_#29B6F6)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
    </button>

  )
}

export default MagicButton


