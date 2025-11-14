function Experience() {

    return(
        <>
            <section id="experiencia" className="scroll-mt-18 w-7xl mt-15 mx-auto sm:w-full">
                <h2 className="bg-violet-600/60 border-black border-2 w-fit p-2 text-4xl text-center rounded-2xl sm:mx-auto">Experiencia</h2>
                <ul className="mt-5 w-3xl mx-auto relative border-l-black border-l-4 sm:w-xl">
                    <li>
                        <div className="bg-yellow-200 border-2 border-black absolute size-5 rounded-full -ml-3 mt-40 mb-40 sm:mt-51 sm:mb-51"></div>
                        <div className="ml-20 bg-yellow-200/60 w-fit p-6 border-black border-2 rounded-2xl sm:ml-10">
                            <h3 className="bg-yellow-200 w-fit font-bold text-2xl rounded-2xl p-1 border-black border-2 sm:p-2">Inerza, S.A</h3>
                            <div className="mt-3 w-fit bg-white border-2 border-black rounded-2xl p-2 sm:p-3">
                                <div className="bg-violet-200 w-fit p-1 rounded-2xl border border-violet-700 sm:p-2">
                                    <time dateTime="2025-05-12">Mayo 2025</time> - <time dateTime="2025-06-13">Junio 2025</time>
                                </div>
                                <div className="mt-1 sm:mt-2">Las Palmas de Gran Canaria</div>
                            </div>
                            <div className="mt-3 bg-white border-2 border-black rounded-2xl p-2 sm:p-3">
                                <p>Prácticas de 1º de CFGS Desarrollo de Aplicaciones Multiplataforma.</p>
                                <p>Se realizó la conversión de datos de archivos PDF a TXT para entregarlos a una Inteligencia Artificial, con el fin de facilitar su procesamiento y aumentar la eficiencia.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Experience