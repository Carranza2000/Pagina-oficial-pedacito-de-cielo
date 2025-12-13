import Marcas from "../assets/Imagenes de marcas.png"

export default function Brands() {
    return (
        <>
            <div className="text-center">
                <div className="p-18 text-[48px] text-[#696984]">Nuestras Alianzas</div>
                <div className="text-[24px] text-[#696984] pb-18">Gracias a todas nuestras alianzas, Pedacito de Cielo sigue conformando un ecosistema que suma cada dia a la vida de niños, niñas, adolescentes y sus familias</div>

                <div className="flex justify-center">
                    <img src={Marcas} alt="Imagen de marcas de pedacito"/>
                </div>
            </div>
        </>
    )
}