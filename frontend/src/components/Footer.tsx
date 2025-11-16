function Footer() {

    return(
        <>
            <footer id="contacto" className="scroll-mt-18 sm:scroll-mt-28 xl:w-7xl mt-15 mb-15 mx-auto sm:w-full">
                <h2 className="bg-violet-600/60 border-black border-2 w-fit p-2 text-4xl text-center rounded-2xl sm:mx-auto">Contacto</h2>
                <div className="bg-yellow-200/60 lg:w-3xl p-6 border-black border-2 rounded-2xl mx-auto mt-5 sm:w-xl">
                    <div className="bg-white p-2 border-black border-2 rounded-2xl">
                        <h3 className="lg:text-xl text-center sm:text-2xl">Puedes contactarme a través de los siguientes medios</h3>
                        <div className="flex flex-row mt-3 justify-center items-center gap-x-5">
                            <a href="https://www.linkedin.com/in/saul-alberto-ortega-rodriguez-1032b0232/" target="_blank">
                                <img src="logos/LinkedIn.svg" alt="Logo de Linkedin" className="size-14 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                            <a href="https://github.com/Saul-Ortega" target="_blank">
                                <img src="logos/GitHub.svg" alt="Logo de Github" className="size-14 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                            <a href="mailto:saulalbertoortegarodriguez@gmail.com" target="_blank">
                                <img src="icons/mail-icon.svg" alt="Icono de correo electrónico" className="size-14 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer