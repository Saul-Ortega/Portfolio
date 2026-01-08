function Main() {
    
    return(
        <>
            <main id="inicio" className="scroll-mt-18 xs:scroll-mt-20 sm:scroll-mt-28 bg-[url(/home-background.svg)] rounded-3xl xl:w-7xl xl:h-130 mt-10 mx-auto flex flex-col justify-center items-center xs:w-full xs:h-full xs:py-8">
                <div className="bg-[#fdf6bf] lg:w-4xl lg:h-90 p-5 border-black border-2 grid lg:grid-cols-3 rounded-2xl items-center sm:w-lg xs:xs:w-80 2xs:w-md sm:h-full xs:grid-cols-1 xs:[grid-template-areas:'a''b'] lg:[grid-template-areas:'a_a_b']">
                    <div className="flex flex-col justify-center items-center xs:[grid-area:b] lg:[grid-area:a]">
                        <h3 className="bg-yellow-200 w-fit font-bold text-4xl rounded-2xl lg:p-1 border-black border-2 xs:mt-4 xs:p-2">Hola, soy Saúl</h3>
                        <div className="bg-white mt-4 border-2 border-black rounded-2xl lg:p-2 mr-4 lg:w-lg 2xs:w-sm xs:p-3 xs:mx-auto">
                            <p>
                                Disfruto del desarrollo de software porque convierte las <em className="bg-violet-200 p-1 rounded-2xl border border-violet-700 selection:bg-violet-400">ideas</em> en <em className="bg-violet-200 p-1 rounded-2xl border border-violet-700 selection:bg-violet-400">soluciones reales</em>.
                            </p>
                        </div>
                        <div className="bg-white w-fit h-20 flex flex-row justify-evenly items-center gap-x-5 p-2 border-black border-2 rounded-2xl mt-4">
                            <a href="https://www.linkedin.com/in/saul-alberto-ortega-rodriguez-1032b0232/" target="_blank">
                                <img src="logos/LinkedIn.svg" alt="Logo de Linkedin" className="size-14 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                            <a href="https://github.com/Saul-Ortega" target="_blank">
                                <img src="logos/GitHub.svg" alt="Logo de Github" className="size-14 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                            <a href="mailto:saulalbertoortegarodriguez@gmail.com" target="_blank">
                                <img src="icons/mail-icon.svg" alt="Icono de correo electrónico" className="size-14 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                            <a href="SAÚL ALBERTO ORTEGA RODRÍGUEZ - CV.pdf" download>
                                <img src="icons/cv-icon.svg" alt="Icono de Currículum Vitae" className="size-14 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                    <div className="bg-white border-black border-2 p-7 rounded-2xl mx-auto flex flex-col justify-center items-center xs:[grid-area:a] lg:[grid-area:b] h-72">
                        <img src="perfil.webp" alt="Foto de perfil" height={240} className="w-45 rounded-2xl" fetchPriority="high" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main