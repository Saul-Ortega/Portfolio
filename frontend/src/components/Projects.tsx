function Projects() {

    return (
        <>
            <section id="proyectos" className="scroll-mt-18 sm:scroll-mt-28 md:w-7xl mt-15 mx-auto sm:w-full">
                <h2 className="bg-violet-600/60 border-black border-2 w-fit p-2 text-4xl text-center rounded-2xl sm:mx-auto">Proyectos</h2>
                <div className="mt-5 bg-yellow-200/60 md:w-3xl p-6 border-2 border-black rounded-2xl mx-auto sm:w-xl">
                    <h3 className="bg-yellow-200 w-fit font-bold text-2xl rounded-2xl md:p-1 border-black border-2 sm:p-2"></h3>
                    <p className="mt-3 bg-white w-fit md:p-2 border-black border-2 rounded-2xl sm:p-3"></p>
                    <img src="" alt="Captura de pantalla del proyecto..." className="mt-3 bg-white w-90 md:p-2 border-black border-2 rounded-2xl mx-auto sm:p-3" />
                    <div className="mt-3 flex flex-row justify-evenly items-center p-2 bg-white w-fit h-20 border-black border-2 rounded-2xl mx-auto">
                        <a href="" target="_blank" className="size-14 hover:scale-125 duration-300 ease-in-out">
                            <img src="logos/GitHub.svg" alt="Logo de GitHub" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects