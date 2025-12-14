import Circulo72 from "../assets/decorations/Ellipse 12.png";
import Circulo30 from "../assets/decorations/Ellipse 13.png";

export default function VideoInfo() {
    return (
        <>
            <section className="grid grid-cols-2">
                <div className="px-38 pt-40">
                    <img src={Circulo72} alt="Imagen circulo 72 x 72"/>
                    <div className="text-[24px] text-[#696984] px-10">
                        En este video, Verónica Osuna Directora de Pedacito de Cielo, nos habla un poco sobre Pedacito de Cielo. Gracias a “Soy TJ” por regalarnos un espacio en su plataforma para hablar de Pedacito de Cielo.
                    </div>
                    <img className="ml-auto" src={Circulo30} alt="Imagen circulo 30 x 30"/>
                </div>
                <div>
                    <iframe width="900" height="500" src="https://www.youtube.com/embed/tw5aKvKbMQU?si=T_q3P-Mfio6i6-w4"
                            title="Video de pedacito de cielo" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
            </section>
        </>
    )
}