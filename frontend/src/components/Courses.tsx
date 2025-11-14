function Courses() {
    return (
        <>
            <section id="cursos" className="scroll-mt-18 w-7xl mt-15 mx-auto sm:w-full">
                <h2 className="bg-violet-600/60 border-black border-2 w-fit p-2 text-4xl text-center rounded-2xl sm:mx-auto">Cursos y Certificaciones</h2>
                <div className="grid grid-cols-3 gap-x-3 w-3xl mx-auto sm:w-xl sm:grid-cols-1">
                    <div className="bg-yellow-200/60 mt-5 w-full p-6 border-2 border-black rounded-2xl flex flex-col justify-center items-center sm:w-md sm:mx-auto">
                        <h3 className="bg-yellow-200 w-fit font-bold rounded-2xl p-1 border-black border-2 sm:p-2">ReactiveX - RxJs: De cero hasta los detalles</h3>
                        <div className="mt-3 bg-violet-200 w-fit p-1 rounded-2xl border border-violet-700 sm:p-2">(9 horas)</div>
                        <div className="mt-3 bg-white w-fit p-1 rounded-2xl border-2 border-black">
                            <img src="public/logos/Rxjs.svg" alt="" className="size-16" />
                        </div>
                        <div className="mt-3 bg-white w-30 p-1 rounded-2xl border-2 border-black flex flex-row justify-evenly">
                            <a href="public/courses/Curso RxJs.pdf" download>
                                <img src="public/download-icon.svg" alt="" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                            <a href="https://cursos.devtalles.com/certificates/yfwdcmrqmn" target="_blank">
                                <img src="public/link-icon.svg" alt="" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                    <div className="bg-yellow-200/60 mt-5 w-full p-6 border-2 border-black rounded-2xl flex flex-col justify-center items-center sm:w-md sm:mx-auto">
                        <h3 className="bg-yellow-200 w-fit font-bold rounded-2xl p-1 border-black border-2 sm:p-2">JavaScript Algorithms and Data Structures</h3>
                        <div className="mt-3 bg-violet-200 w-fit p-1 rounded-2xl border border-violet-700 sm:p-2">(300 horas)</div>
                        <div className="mt-3 bg-white w-fit p-1 rounded-2xl border-2 border-black">
                            <img src="public/logos/JavaScript.svg" alt="" className="size-16" />
                        </div>
                        <div className="mt-3 bg-white w-30 p-1 rounded-2xl border-2 border-black flex flex-row justify-evenly">
                            <a href="public/courses/Curso RxJs.pdf" download>
                                <img src="public/download-icon.svg" alt="" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                            <a href="https://www.freecodecamp.org/certification/SaulOrtega/javascript-algorithms-and-data-structures-v8" target="_blank">
                                <img src="public/link-icon.svg" alt="" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                    <div className="bg-yellow-200/60 mt-5 w-full p-6 border-2 border-black rounded-2xl flex flex-col justify-center items-center sm:w-md sm:mx-auto">
                        <h3 className="bg-yellow-200 w-fit font-bold rounded-2xl p-1 border-black border-2 sm:p-2">Responsive Web Design</h3>
                        <div className="mt-10 bg-violet-200 w-fit p-1 rounded-2xl border border-violet-700 sm:p-2 sm:mt-3">(300 horas)</div>
                        <div className="mt-3 bg-white w-fit p-1 rounded-2xl border-2 border-black flex flex-row justify-evenly">
                            <img src="public/logos/HTML5.svg" alt="" className="size-16" />
                            <img src="public/logos/CSS3.svg" alt="" className="size-16" />
                        </div>
                        <div className="mt-3 bg-white w-30 p-1 rounded-2xl border-2 border-black flex flex-row justify-evenly">
                            <a href="public/courses/Curso RxJs.pdf" download>
                                <img src="public/download-icon.svg" alt="" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                            <a href="https://www.freecodecamp.org/certification/SaulOrtega/responsive-web-design" target="_blank">
                                <img src="public/link-icon.svg" alt="" className="size-10 hover:scale-125 duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses