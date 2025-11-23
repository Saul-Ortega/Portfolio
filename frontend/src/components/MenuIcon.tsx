type Props = {
    open: boolean;
}

function MenuIcon({ open }: Props) {

    return(
        <>
            {
                <div className="relative size-15 duration-400 ease-cubicbezier">
                    <div className={`transition-all duration-200 ease-cubic-bezier delay-200 ${
                        open ? "translate-y-4 delay-150" : "translate-y-0 delay-200"
                    }`}>
                        <span className={`absolute w-11/12 h-2 right-0.5 top-2.5 bg-black rounded-2xl duration-200 ease-cubic-bezier ${
                            open ? "rotate-45 delay-300" : "rotate-0 delay-0"
                        }`}></span>
                    </div>
                    <div className={`transition-all duration-200 ease-cubic-bezier ${
                        open ? "opacity-0 delay-200" : "opacity-100 delay-200"
                    }`}>
                        <span className="absolute w-11/12 h-2 right-0.5 top-6.5 bg-black rounded-2xl"></span>
                    </div>
                    <div className={`transition-all duration-200 ease-cubic-bezier delay-200 ${
                        open ? "-translate-y-4 delay-150" : "translate-y-0 delay-0"
                    }`}>
                        <span className={`absolute w-11/12 h-2 right-0.5 top-10.5 bg-black rounded-2xl duration-200 ease-cubic-bezier ${
                            open ? "-rotate-45 delay-300" : "rotate-0 delay-0"
                        }`}></span>
                    </div>
                </div>
            }
        </>
    )
}

export default MenuIcon