function Courses() {
    return (
        <>
            <section id="cursos" className="scroll-mt-18 xs:scroll-mt-20 sm:scroll-mt-28 xl:w-7xl mt-15 mx-auto sm:w-full xs:w-md">
                <h2 className="bg-violet-600/60 border-black border-2 w-fit p-2 text-4xl text-center rounded-2xl xs:mx-auto">Cursos y Certificaciones</h2>
                <div className="grid lg:grid-cols-3 gap-x-3 lg:w-3xl mx-auto sm:w-xl xs:grid-cols-1">
                    <div className="bg-yellow-200/60 mt-5 lg:w-full p-6 border-2 border-black rounded-2xl flex flex-col justify-center items-center sm:w-md sm:mx-auto">
                        <h3 className="bg-yellow-200 w-fit font-bold rounded-2xl lg:p-1 border-black border-2 xs:p-2">ReactiveX - RxJs: De cero hasta los detalles</h3>
                        <div className="mt-3 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 xs:p-2">(9 horas)</div>
                        <div className="mt-3 bg-white w-fit p-1 rounded-2xl border-2 border-black">
                            <img src="logos/Rxjs.svg" alt="Logo de RxJs" className="size-16" />
                        </div>
                        <div className="mt-3 bg-white w-30 p-1 rounded-2xl border-2 border-black flex flex-row justify-evenly">
                            <a href="courses/Curso RxJs.pdf" download>
                                <img src="icons/download-icon.svg" alt="Icono de descarga" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                            <a href="https://cursos.devtalles.com/certificates/yfwdcmrqmn" target="_blank">
                                <img src="icons/link-icon.svg" alt="Icono de enlace" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                    <div className="bg-yellow-200/60 mt-5 lg:w-full p-6 border-2 border-black rounded-2xl flex flex-col justify-center items-center sm:w-md sm:mx-auto">
                        <h3 className="bg-yellow-200 w-fit font-bold rounded-2xl lg:p-1 border-black border-2 xs:p-2">JavaScript Algorithms and Data Structures</h3>
                        <div className="mt-3 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 xs:p-2">(300 horas)</div>
                        <div className="mt-3 bg-white w-fit p-1 rounded-2xl border-2 border-black">
                            <img src="logos/JavaScript.svg" alt="Logo de JavaScript" className="size-16" />
                        </div>
                        <div className="mt-3 bg-white w-30 p-1 rounded-2xl border-2 border-black flex flex-row justify-evenly">
                            <a href="courses/Curso JavaScript.pdf" download>
                                <img src="icons/download-icon.svg" alt="Icono de descarga" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                            <a href="https://www.freecodecamp.org/certification/saulortega/javascript-algorithms-and-data-structures-v8" target="_blank">
                                <img src="icons/link-icon.svg" alt="Icono de enlace" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                    <div className="bg-yellow-200/60 mt-5 lg:w-full p-6 border-2 border-black rounded-2xl flex flex-col justify-center items-center sm:w-md sm:mx-auto">
                        <h3 className="bg-yellow-200 w-fit font-bold rounded-2xl lg:p-1 border-black border-2 xs:p-2">Responsive Web Design</h3>
                        <div className="lg:mt-10 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 xs:p-2 xs:mt-3">(300 horas)</div>
                        <div className="mt-3 bg-white w-fit p-1 rounded-2xl border-2 border-black flex flex-row justify-evenly">
                            <img src="logos/HTML5.svg" alt="Logo de HTML5" className="size-16" />
                            <img src="logos/CSS3.svg" alt="Logo de CSS3" className="size-16" />
                        </div>
                        <div className="mt-3 bg-white w-30 p-1 rounded-2xl border-2 border-black flex flex-row justify-evenly">
                            <a href="courses/Curso HTML y CSS.pdf" download>
                                <img src="icons/download-icon.svg" alt="Icono de descarga" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                            <a href="https://www.freecodecamp.org/certification/saulortega/responsive-web-design" target="_blank">
                                <img src="icons/link-icon.svg" alt="Icono de enlace" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses