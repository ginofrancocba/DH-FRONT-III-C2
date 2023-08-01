import './App.css'

function Productos(props) {
    return (
        <div>
            <h1 className="Productos">Esto es un producto</h1>
            <p> nombre del produco: { props.nombre }</p>
            <p> precio del producto: { props.precio }</p>
        </div>
        )
}
export default Productos;