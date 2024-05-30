import { useState } from "react";
import "./MiOrg.css"

const Miorg = (props) => {
    
    // * Estado - hooks
    // * hook => useState
    // * useState()
    // * const [nombreVariable, funcionActualiza] = useState("valorInicial")
    // * const [nombre, actualizarNombre] = useState("Bima")
    
    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return (
        <secction className="orgSection">
            <h3 className="title">Mi organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
        </secction>
    )
}

export default Miorg;