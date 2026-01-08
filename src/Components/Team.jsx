import ImagenGpersonas from "../assets/Grupo de personas.png";
import Rectangle from "../assets/decorations/Rectangle 196 x 193.png";

export default function Team() {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Haciendo click al boton");
    }

    return (
        <>
            <section className="max-w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 px-4 md:px-20 py-10 md:py-20 items-center">
                
                <div className="flex justify-center relative"> 
                    
                    <img
                    src={Rectangle}
                    alt="Marco decorativo"
                    className="absolute bottom-0 left-0 w-full h-full object-contain pointer-events-none"
                    />

                    <img
                        src={ImagenGpersonas}
                        alt="Grupo de personas"
                        className="relative z-10 w-full max-w-md lg:max-w-lg object-contain rounded-3xl"  
                    />
                </div>

                <div className="text-center md:text-left">
                    <h2 className="text-[#FADA63] font-semibold text-3xl sm:text-4xl lg:text-5xl">
                        ¡Forma parte de nuestro equipo!
                    </h2>
                    <p className="text-[#696984] text-base md:text-lg lg:text-xl mt-4 md:mt-6 px-2 md:px-0">
                        Siempre estamos abiertos a nuevas propuestas y nuevas personas que quieran apoyarnos ya sea dentro de alguna de nuestras actividades o apoyando nuestra misión de la manera más autentica posible.
                    </p>
                    <div className="flex justify-center md:justify-start mt-6">
                        <button
                            className="w-40 h-14 md:h-16 rounded-full bg-gradient-to-r from-[#00C6AE] to-[#60A9F4] text-white text-lg md:text-xl shadow-xl"
                            onClick={onSubmit}
                        >
                            Contactanos
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}