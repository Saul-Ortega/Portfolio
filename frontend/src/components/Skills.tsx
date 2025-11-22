function Skills() {

    return (
        <>
            <section id="habilidades" className="scroll-mt-18 xs:scroll-mt-20 sm:scroll-mt-28 xl:w-7xl mt-15 mx-auto sm:w-full 2xs:w-md xs:w-80">
                <h2 className="bg-violet-600/60 border-black border-2 w-fit p-2 text-4xl text-center rounded-2xl xs:mx-auto">Habilidades</h2>
                <ul className="mt-5 bg-yellow-200/60 grid lg:grid-cols-4 place-items-center gap-y-3 lg:w-3xl p-5 border-black border-2 rounded-2xl mx-auto sm:w-xl sm:grid-cols-3 xs:grid-cols-2 2xs:w-md xs:w-80">
                    <li className="flex flex-col items-center p-2 bg-white border-2 border-black rounded-2xl w-10/12 h-fit">
                        <img src="logos/React.svg" alt="Logo de React" className="size-28" />
                        <h3 className="mt-1 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 text-sm font-bold xs:p-2">React</h3>
                    </li>
                    <li className="flex flex-col items-center p-2 bg-white border-2 border-black rounded-2xl w-10/12 h-fit">
                        <img src="logos/TailwindCSS.svg" alt="Logo de Tailwind CSS" className="size-28" />
                        <h3 className="mt-1 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 text-sm font-bold xs:p-2">Tailwind</h3>
                    </li>
                    <li className="flex flex-col items-center p-2 bg-white border-2 border-black rounded-2xl w-10/12 h-fit">
                        <img src="logos/Java.svg" alt="Logo de Java" className="size-28" />
                        <h3 className="mt-1 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 text-sm font-bold xs:p-2">Java</h3>
                    </li>
                    <li className="flex flex-col items-center p-2 bg-white border-2 border-black rounded-2xl w-10/12 h-fit">
                        <img src="logos/Kotlin.svg" alt="Logo de Kotlin" className="size-28" />
                        <h3 className="mt-1 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 text-sm font-bold xs:p-2">Kotlin</h3>
                    </li>
                    <li className="flex flex-col items-center p-2 bg-white border-2 border-black rounded-2xl w-10/12 h-fit">
                        <img src="logos/MySQL.svg" alt="Logo de MySql" className="size-28" />
                        <h3 className="mt-1 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 text-sm font-bold xs:p-2">MySql</h3>
                    </li>
                    <li className="flex flex-col items-center p-2 bg-white border-2 border-black rounded-2xl w-10/12 h-fit">
                        <img src="logos/MongoDB.svg" alt="Logo de MongoDB" className="size-28" />
                        <h3 className="mt-1 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 text-sm font-bold xs:p-2">MongoDB</h3>
                    </li>
                    <li className="flex flex-col items-center p-2 bg-white border-2 border-black rounded-2xl w-10/12 h-fit">
                        <img src="logos/Puppeteer.svg" alt="Logo de Puppeteer" className="size-28" />
                        <h3 className="mt-1 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 text-sm font-bold xs:p-2">Puppeteer</h3>
                    </li>
                    <li className="flex flex-col items-center p-2 bg-white border-2 border-black rounded-2xl w-10/12 h-fit">
                        <img src="logos/Rxjs.svg" alt="Logo de Rxjs" className="size-28" />
                        <h3 className="mt-1 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 text-sm font-bold xs:p-2">Rxjs</h3>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Skills