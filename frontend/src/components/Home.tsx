function Home() {
    
    return(
        <>
            <main id="inicio" className="scroll-mt-18 bg-[url(public/home-background.svg)] rounded-3xl w-7xl h-130 mt-10 mx-auto flex flex-col justify-center items-center sm:w-full sm:h-full sm:py-8">
                <div className="bg-[#fdf6bf] w-4xl h-90 p-5 border-black border-2 grid grid-cols-3 rounded-2xl items-center sm:w-lg sm:h-full sm:grid-cols-1 sm:[grid-template-areas:'a''b']">
                    <div className="col-span-2 flex flex-col justify-center items-center sm:[grid-area:b]">
                        <h3 className="bg-yellow-200 w-fit font-bold text-4xl rounded-2xl p-1 border-black border-2 sm:mt-4 sm:p-2">Hola, soy Saúl</h3>
                        <div className="bg-white mt-4 border-2 border-black rounded-2xl p-2 mr-4 w-lg sm:w-md sm:p-3">
                            <p>
                                Disfruto del desarrollo de software porque convierte las <em className="bg-violet-200 p-1 rounded-2xl border border-violet-700">ideas</em> en <em className="bg-violet-200 p-1 rounded-2xl border border-violet-700">soluciones reales</em>.
                            </p>
                        </div>
                        <div className="bg-white w-60 h-20 flex flex-row justify-evenly items-center border-black border-2 rounded-2xl mt-4">
                            <a href="https://www.linkedin.com/in/saul-alberto-ortega-rodriguez-1032b0232/" target="_blank" className="size-14 hover:scale-125 duration-300 ease-in-out">
                                <img src="public/logos/LinkedIn.svg" alt="Logo de Linkedin" />
                            </a>
                            <a href="https://github.com/Saul-Ortega" target="_blank" className="size-14 hover:scale-125 duration-300 ease-in-out">
                                <img src="public/logos/GitHub.svg" alt="Logo de Github" />
                            </a>
                        </div>
                    </div>
                    <div className="bg-white border-black border-2 size-70 rounded-2xl mx-auto flex flex-col justify-center items-center sm:[grid-area:a]">
                        <img src="public/perfil.webp" alt="Foto de perfil" className="w-45 rounded-2xl" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home