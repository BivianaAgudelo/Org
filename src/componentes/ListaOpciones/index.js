import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    // * metodo map -> arreglo.map( (equipo, index) => {
    // * return <option></option>
    // * })
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ];

    const manejarCambio = (event) => {
        console.log("Cambio", event.target.value);
        props.actualizarEquipo(event.target.value);
    }

    return (
        <div className="lista-opciones">
            <label>Equipo</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>
                    Seleccionar equipo
                </option>
                {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
            </select>
        </div>
    );
};

export default ListaOpciones;
