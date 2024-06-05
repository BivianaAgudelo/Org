import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
    // ! Destructuración
    const { colorPrimario, colorSecundario, titulo } = props.datos;
    const { colaboradores } = props;
    console.log(colaboradores.length > 0);

    const estiloTitulo = { borderColor: colorPrimario };

    return (
        <>
            {colaboradores.length > 0 && (
                <section
                    className="equipo"
                    style={{ backgroundColor: colorSecundario }}
                >
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className="colaboradores">
                        {colaboradores.map((colaborador, index) => (
                            <Colaborador datos={colaborador} key={index} />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default Equipo;
