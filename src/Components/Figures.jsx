import ImageFigures from "../assets/Cifras de niños.png"

export default function Figures() {
    return (
        <>
            <section className="text-center p-40">
                <div className="text-[#FADA63] text-[36px] font-bold">
                    Algunas Cifras de{" "}
                    <label className="text-[#F48C06]">
                        México
                    </label>
                </div>
                <div className="text-[24px] pt-10">Algunos de los numeros actuales de niños y niñas en situaciones criticas</div>

                <div className="flex justify-center p-40">
                    <img src={ImageFigures} alt="Imagenes de cifras de niños"/>
                </div>
            </section>
        </>
    )
}