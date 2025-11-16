function Projects() {

    return (
        <>
            <section id="proyectos" className="scroll-mt-18 sm:scroll-mt-28 md:w-7xl mt-15 mx-auto sm:w-full">
                <h2 className="bg-violet-600/60 border-black border-2 w-fit p-2 text-4xl text-center rounded-2xl sm:mx-auto">Proyectos</h2>
                <div className="mt-5 bg-yellow-200/60 md:w-3xl p-6 border-2 border-black rounded-2xl mx-auto sm:w-xl">
                    <h3 className="bg-yellow-200 w-fit font-bold text-2xl rounded-2xl md:p-1 border-black border-2 sm:p-2">MatchesAPI</h3>
                    <p className="mt-3 bg-white w-fit md:p-2 border-black border-2 rounded-2xl sm:p-3">API desarrollada con Java y Spring Boot que actúa como intermediario entre la base de datos MongoDB y la aplicación web.</p>
                    <img src="projects/MatchesAPI-screenshot.png" alt="Captura de pantalla del proyecto MatchesAPI" className="mt-3 bg-white w-90 md:p-2 border-black border-2 rounded-2xl mx-auto sm:p-3" />
                    <div className="mt-3 flex flex-row justify-evenly items-center p-2 bg-white w-fit h-20 border-black border-2 rounded-2xl mx-auto">
                        <a href="https://github.com/Saul-Ortega/MatchesAPI" target="_blank" className="size-14 hover:scale-125 duration-300 ease-in-out">
                            <img src="logos/GitHub.svg" alt="Logo de GitHub" />
                        </a>
                    </div>
                </div>
                <div className="bg-yellow-200/60 mt-5 md:w-3xl p-6 border-2 border-black rounded-2xl mx-auto sm:w-xl">
                    <h3 className="bg-yellow-200 w-fit font-bold text-2xl rounded-2xl md:p-1 border-black border-2 sm:p-2">MatchesSCRAPER</h3>
                    <p className="mt-3 bg-white w-fit md:p-2 border-black border-2 rounded-2xl sm:p-3">Desarrollo de bots que acceden a distintas casas de apuestas para recopilar información pública de los partidos (casa de apuestas, región, categoría, equipos, cuotas y fecha). Implementados con Vanilla JavaScript, Puppeteer, Mongoose, gestión de variables de entorno con DotEnv y pruebas unitarias de funciones con Jest.</p>
                    <video src="./videos/sportium-video.mov" controls className="mt-3 bg-white w-fit md:p-2 border-black border-2 rounded-2xl mx-auto sm:p-3"></video>
                    <div className="mt-3 flex flex-row justify-evenly items-center p-2 bg-white w-fit h-20 border-black border-2 rounded-2xl mx-auto">
                        <a href="https://github.com/Saul-Ortega/MatchesSCRAPER" target="_blank" className="size-14 hover:scale-125 duration-300 ease-in-out">
                            <img src="logos/GitHub.svg" alt="Logo de GitHub" />
                        </a>
                    </div>
                </div>
                <div className="bg-yellow-200/60 mt-5 md:w-3xl p-6 border-2 border-black rounded-2xl mx-auto sm:w-xl">
                    <h3 className="bg-yellow-200 w-fit font-bold text-2xl rounded-2xl md:p-1 border-black border-2 sm:p-2">MatchesWEB</h3>
                    <p className="mt-3 bg-white w-fit md:p-2 border-black border-2 rounded-2xl sm:p-3">Página web que consume la API previamente creada para comparar las cuotas de partidos entre distintas casas de apuestas, identificar la mejor opción y calcular la rentabilidad potencial mediante la técnica de arbitrage betting.</p>
                    <img src="projects/MatchesWEB.png" alt="Captura de pantalla del proyecto MatchesWEB" className="mt-3 bg-white w-fit md:p-2 border-black border-2 rounded-2xl mx-auto sm:p-3" />
                    <div className="mt-3 flex flex-row justify-evenly items-center p-2 bg-white w-fit h-20 border-black border-2 rounded-2xl mx-auto">
                        <a href="https://github.com/Saul-Ortega/MatchesWEB" target="_blank" className="size-14 hover:scale-125 duration-300 ease-in-out">
                            <img src="logos/GitHub.svg" alt="Logo de GitHub" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects