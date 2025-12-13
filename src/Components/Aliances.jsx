import ImagenBoys from "../assets/header-pic.png"

export default function Aliances() {
    return (
        <>
            <div className="grid grid-cols-2 w-full h-screen bg-[#00C6AE] rounded-b-[300px] ">
                <div className="ml-26 mt-40 text-left">
                    <div className="text-[54px] text-[#FADA63]">
                        <label className="text-[#FF6319]">
                            Nuestro compromiso:
                        </label>
                        cada niño y niña, un pedacito de cielo
                    </div>
                    <div className="text-[24px] mt-40">
                        Somos un Centro de Convivencia Integral, dedicados a fomentar espacios libres de violencia para niños, niñas y familias en situaciones de riesgo.
                    </div>
                </div>
                <img src={ImagenBoys} alt="Imagen de niños jugando"/>
            </div>
        </>
    )
}