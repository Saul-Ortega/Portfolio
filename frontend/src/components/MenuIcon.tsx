type Props = {
    open: boolean;
}

function MenuIcon({ open }: Props) {

    return(
        <>
            {
                <div className="relative size-15 flex flex-col justify-center items-center">
                    <span className={`absolute w-11/12 h-2 bg-black rounded-2xl transform transition-all duration-500 ease-in-out ${
                        open ? "rotate-45" : "top-2"
                    }`}></span>
                    <span className={`absolute w-11/12 h-2 bg-black rounded-2xl transform transition-all duration-200 ease-in-out ${
                        open ? "opacity-0" : ""
                    }`}></span>
                    <span className={`absolute w-11/12 h-2 bg-black rounded-2xl transform transition-all duration-500 ease-in-out ${
                        open ? "-rotate-45" : "bottom-2"
                    }`}></span>
                </div>
            }
        </>
    )
}

export default MenuIcon