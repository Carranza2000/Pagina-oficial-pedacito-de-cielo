import LogoPedacito from "../assets/PDC - LogoSello 1.png"

export default function Header() {
    return (
        <header className="flex w-full h-full bg-[#00C6AE]">
            <img className="w-[200] h-[200] p-8" src={LogoPedacito} alt="Logo De Pedacito De Cielo" />
            <div className="text-[32px] content-center">Pedacito De Cielo</div>
            <div className="flex items-center ml-auto mr-10 gap-8">
                <div className="cursor-pointer text-[22px]">Inicio</div>
                <div className="cursor-pointer text-[22px]">Talleres</div>
                <div className="cursor-pointer text-[22px]">Blog</div>
                <div className="cursor-pointer text-[22px]">Equipo</div>
            </div>
        </header>
    )
}