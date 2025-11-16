import { useState } from "react"
import MenuIcon from "./MenuIcon";

function Header() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

    return (
    <>
        <header className="bg-violet-600/60 border-black border-2 backdrop-blur-xs sticky top-1.5 lg:w-4xl lg:h-16 mx-auto rounded-2xl flex items-center z-999 sm:w-xl sm:h-24 2xs:w-md xs:h-18 xs:w-80">
            <nav className="w-full">
                <div className="lg:hidden xs:w-full xs:flex xs:flex-row xs:justify-end">
                    <button className="mr-15 xs:mr-7 hover:bg-violet-600/60 hover:rounded-2xl xs:cursor-pointer" onClick={toggleMenu}>
                        <MenuIcon open={open} />
                    </button>
                    {
                    open &&
                    <div className="hidden xs:bg-[#fdf6bf] xs:flex xs:justify-center xs:text-6xl xs:text-center xs:fixed xs:w-full xs:h-screen sm:mt-20 xs:mt-18 xs:border-black xs:border-2 xs:rounded-2xl xs:z-999">
                        <ul className="xs:mt-2 xs:h-10/12 xs:flex xs:flex-col xs:justify-evenly">
                            <li className="hover:bg-[#AC7FF9] rounded-full" onClick={toggleMenu}><a href="#inicio" className="py-1 px-2">Inicio</a></li>
                            <li className="hover:bg-[#AC7FF9] rounded-full" onClick={toggleMenu}><a href="#experiencia" className="py-1 px-2">Experiencia</a></li>
                            <li className="hover:bg-[#AC7FF9] rounded-full" onClick={toggleMenu}><a href="#habilidades" className="py-1 px-2">Habilidades</a></li>
                            <li className="hover:bg-[#AC7FF9] rounded-full" onClick={toggleMenu}><a href="#titulacion" className="py-1 px-2">Titulación</a></li>
                            <li className="hover:bg-[#AC7FF9] rounded-full" onClick={toggleMenu}><a href="#cursos" className="py-1 px-2">Cursos</a></li>
                            <li className="hover:bg-[#AC7FF9] rounded-full" onClick={toggleMenu}><a href="#contacto" className="py-1 px-2">Contacto</a></li>
                        </ul>
                    </div>
                    }
                </div>
                <ul className="lg:flex lg:flex-row lg:justify-evenly text-lg xs:hidden">
                    <li className="hover:bg-violet-600/60 rounded-full"><a href="#inicio" className="py-1 px-2">Inicio</a></li>
                    <li className="hover:bg-violet-600/60 rounded-full"><a href="#experiencia" className="py-1 px-2">Experiencia</a></li>
                    <li className="hover:bg-violet-600/60 rounded-full"><a href="#habilidades" className="py-1 px-2">Habilidades</a></li>
                    <li className="hover:bg-violet-600/60 rounded-full"><a href="#titulacion" className="py-1 px-2">Titulación</a></li>
                    <li className="hover:bg-violet-600/60 rounded-full"><a href="#cursos" className="py-1 px-2">Cursos</a></li>
                    <li className="hover:bg-violet-600/60 rounded-full"><a href="#contacto" className="py-1 px-2">Contacto</a></li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header