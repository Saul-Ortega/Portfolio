function Header() {

    return (
    <>
        <header className="bg-violet-600/60 border-black border-2 backdrop-blur-xs sticky top-1.5 w-4xl h-16 mx-auto rounded-2xl flex items-center z-999 sm:w-xl sm:h-24">
            <nav className="w-full">
                <div className="hidden sm:w-full sm:flex sm:flex-row sm:justify-end">
                    <button className="mr-15 hover:bg-violet-600/60 hover:rounded-2xl">
                        <img src="./public/menu.svg" alt="" className="sm:size-15" />
                    </button>
                </div>
                <ul className="flex flex-row justify-evenly text-lg sm:hidden">
                    <li className="hover:bg-violet-600/60 rounded-full"><a href="#inicio" className="py-1 px-2">Inicio</a></li>
                    <li className="hover:bg-violet-600/60 rounded-full"><a href="#experiencia" className="py-1 px-2">Experiencia</a></li>
                    <li className="hover:bg-violet-600/60 rounded-full"><a href="#proyectos" className="py-1 px-2">Proyectos</a></li>
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