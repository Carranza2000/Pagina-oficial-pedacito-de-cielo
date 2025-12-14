import ImagenPulseras from "../assets/Imagen pulseras niños.png"

export default function Mission() {
    return (
        <>
            <section className="py-80 grid grid-cols-2">
                <div  className="text-center py-70">
                    <label className="text-[#FADA63] text-[40px]">Nuestra Misión</label>
                    <div className="text-[#696984] text-[22px] px-30 py-20">
                        Crear y Fomentar espacios libres de violencia para ofrecer a niños, niñas, adolescentes y familias en situacion de riesgo, pobreza o marginacion social, herramientas necesarias a traves de la sana convivencia, programas artisticos, deportivos, educativos y psicologicos para fortalecer su autoestima
                    </div>
                </div>

                <div className="flex justify-center">
                    <img src={ImagenPulseras} alt="Imagenes de niños mostrando su pulsera"/>
                </div>
            </section>
        </>
    )
}