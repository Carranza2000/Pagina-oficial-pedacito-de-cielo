import Circle140 from "../assets/decorations/Circle 140 x 140.png"
import Circle30 from "../assets/decorations/Circulo 30 x 30.png"
import Imagenes2 from "../assets/2 imagenes sobrepuestas.png"
import Circle30orange from "../assets/decorations/CIrcle 30 orange.png"
import Circle264 from "../assets/decorations/Circle 264 blue.png"

export default function Vision() {
    return (
        <>
            <section className="grid grid-cols-2 py-40">
                <div>
                    <div className="relative">
                        <div className="flex">
                            <img className="pl-38" src={Circle140} alt="Imagen de circulo de 140"/>
                            <img className="w-5 h-5 ml-12" src={Circle30} alt="Imagen de circulo de 30"/>
                        </div>
                        <img className="absolute top-15 left-45" src={Imagenes2} alt="Imagen de 2 imagenes sobrepuestas"/>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="text-[#FADA63] text-[40px] py-35">Nuestra Visíon</div>
                    <div className="text-[#696984] text-[22px] px-30">Ser el Centro de Convivencia Integral de referencia local, que refuerza patrones de conducta positivos e interrumpe los negativos de niños, adolescentes y familias, crea conciencia del valor propio, incide en el pleno desarrollo y fomenta un mejor ambiente para vivir.</div>
                </div>
            </section>
        </>
    )
}