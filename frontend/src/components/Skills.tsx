import type { SkillCardInterface } from "../interfaces/SkillCardInterface"
import SkillCard from "./SkillCard"

function Skills() {
    const skills: SkillCardInterface[] = [
        {
            src: "logos/React.svg",
            alt: "Logo de React",
        },
        {
            src: "logos/TailwindCSS.svg",
            alt: "Logo de Tailwind CSS",
        },
        {
            src: "logos/Java.svg",
            alt: "Logo de Java",
        },
        {
            src: "logos/Kotlin.svg",
            alt: "Logo de Kotlin",
        },
        {
            src: "logos/MySQL.svg",
            alt: "Logo de MySql",
        },
        {
            src: "logos/MongoDB.svg",
            alt: "Logo de MongoDB",
        },
        {
            src: "logos/Puppeteer.svg",
            alt: "Logo de Puppeteer",
        },
        {
            src: "logos/Rxjs.svg",
            alt: "Logo de Rxjs",
        },
    ]

    return (
        <>
            <section id="habilidades" className="scroll-mt-18 xs:scroll-mt-20 sm:scroll-mt-28 xl:w-7xl mt-15 mx-auto sm:w-full 2xs:w-md xs:w-80">
                <h2 className="bg-violet-600/60 border-black border-2 w-fit p-2 text-4xl text-center rounded-2xl xs:mx-auto">Habilidades</h2>
                <ul className="mt-5 bg-yellow-200/60 grid lg:grid-cols-4 place-items-center gap-y-3 lg:w-3xl p-5 border-black border-2 rounded-2xl mx-auto sm:w-xl sm:grid-cols-3 xs:grid-cols-2 2xs:w-md xs:w-80">
                    {
                        skills.map( skill => (
                            <SkillCard key={skill.src} src={skill.src} alt={skill.alt} />
                        ))
                    }
                </ul>
            </section>
        </>
    )
}

export default Skills