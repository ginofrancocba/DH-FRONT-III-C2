import React from 'react'


const Productos = (props) => {
    return (
        <div>
            <h1 className="Productos">Producto: </h1>
            <h2>{props.nombre}</h2>
            <img src={props.imgUrl} alt="" srcSet="" />
            <span>{props.precio}</span>
        </div>
    )
}
export default Productos;