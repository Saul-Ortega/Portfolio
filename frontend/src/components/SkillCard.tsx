import type { SkillCardInterface } from "../interfaces/SkillCardInterface"

function SkillCard({ src, alt, name }: SkillCardInterface) {
    
    return (
        <>
            <li className="flex flex-col items-center p-2 bg-white border-2 border-black rounded-2xl w-10/12 h-fit">
                <img src={src} alt={alt} className="size-28" />
                <h3 className="mt-1 bg-violet-200 w-fit lg:p-1 rounded-2xl border border-violet-700 text-sm font-bold xs:p-2">{name}</h3>
            </li>
        </>
    )
}

export default SkillCard