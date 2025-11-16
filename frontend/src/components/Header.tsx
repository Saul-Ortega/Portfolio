import { useState } from "react"
import MenuIcon from "./MenuIcon";

function Header() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

    return (
    <>
        <header className="bg-violet-600/60 border-black border-2 backdrop-blur-xs sticky top-1.5 lg:w-4xl lg:h-16 mx-auto rounded-2xl flex items-center z-999 sm:w-xl sm:h-24">
            <nav className="w-full">
                <div className="lg:hidden sm:w-full sm:flex sm:flex-row sm:justify-end">
                    <button className="mr-15 hover:bg-violet-600/60 hover:rounded-2xl sm:cursor-pointer" onClick={toggleMenu}>
                        <MenuIcon open={open} />
                    </button>
                    {
                    open &&
                    <div className="hidden sm:bg-[#fdf6bf] sm:flex sm:justify-center sm:text-7xl sm:text-center sm:fixed sm:w-full sm:h-screen sm:mt-20 sm:border-black sm:border-2 sm:rounded-2xl sm:backdrop-blur-2xl sm:z-999">
                        <ul className="sm:mt-2 sm:h-10/12 sm:flex sm:flex-col sm:justify-evenly">
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
                <ul className="lg:flex lg:flex-row lg:justify-evenly text-lg sm:hidden">
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