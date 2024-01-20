// Definición del componente funcional ClickExample
const ClickExample = ({ onClick }) => {
    // Renderiza un botón que activa la función handleClick al hacer clic
    return (
        <button onClick={onClick}>
            Enviar
        </button>
    );
};

// Exporta el componente ClickExample para ser utilizado en otros archivos
export default ClickExample;
