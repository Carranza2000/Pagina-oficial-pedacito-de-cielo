import ImagenGpersonas from "../assets/Grupo de personas.png";
import Rectangle from "../assets/decorations/Rectangle 196 x 193.png";

export default function Activities() {
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
                    <h4 className="text-[#525596] font-Nunito Sans text-3xl sm:text-4xl lg:text-5xl">
                        --------    Actividades
                    </h4>
                    <h2 className="text-[#FADA63] font-semibold text-3xl sm:text-4xl lg:text-5xl">
                        Nuestros Talleres
                    </h2>
                    <p className="text-[#696984] text-base md:text-lg lg:text-xl mt-4 md:mt-6 px-2 md:px-0">
                    A través de cada taller y actividad, llevamos a nuestros NNA al autoconocimiento, aceptación y amor propio surgiendo así el reconocimiento de sus capacidades y potenciando sus habilidades así como identificando y manejando sus emociones de una manera sana. Así, logramos impactar positivamente a nuestros a NNA.    
                    </p>
                </div>
            </section>
        </>
    )
}