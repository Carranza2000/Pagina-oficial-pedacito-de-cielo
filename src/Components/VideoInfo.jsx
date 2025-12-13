import Circulo72 from "../assets/decorations/Ellipse 12.png";
import Circulo30 from "../assets/decorations/Ellipse 13.png";

export default function VideoInfo() {
    return (
        <>
            <section className="grid grid-cols-2">
                <div className="px-38">
                    <img src={Circulo72} alt="Imagen circulo 72 x 72"/>
                    <div className="text-[24px] text-[#696984] px-10">
                        En este video, Verónica Osuna Directora de Pedacito de Cielo, nos habla un poco sobre Pedacito de Cielo. Gracias a “Soy TJ” por regalarnos un espacio en su plataforma para hablar de Pedacito de Cielo.
                    </div>
                    <img className="ml-auto" src={Circulo30} alt="Imagen circulo 30 x 30"/>
                </div>
                <div>Columna 2</div>
            </section>
        </>
    )
}