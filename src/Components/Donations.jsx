import ImagenDonacion from "../assets/Imagen de donacion.png"

export default function Donations() {


    const onSubmit = (e) => {
        e.preventDefault();

        console.log("Haciendo click al boton")
    }

    return (
        <>
            <section className="grid grid-cols-2">
                <div className="flex justify-center">
                    <img src={ImagenDonacion} alt="Imagen de donaciones"/>
                </div>
                <div className="px-40 py-30">
                    <label className="text-[#2F327D] text-[40px]">Apoyanos</label>
                    <div className="text-center py-25 text-[22px] text-[#696984]">
                        Nuestra fundación se apoya de donaciones por los grandes corazones que nos apoyan, si quieres poner tu pedacito de cielo lo recibiremos con mucho gusto
                    </div>
                    <div className="flex justify-end">
                        <button className="w-40 h-17 rounded-[60px] bg-gradient-to-r from-[#00C6AE] to-[#60A9F4] text-white text-[22px] shadow-xl" onClick={onSubmit}>Donar</button>
                    </div>

                </div>
            </section>
        </>
    )
}