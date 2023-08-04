import React from "react";
import Productos from "./Productos.jsx";


const Principal = () => {
    return (
        <div className="Product">
            <Productos nombre="Caña pesca"
                imgUrl="https://media.istockphoto.com/id/622314118/es/foto/equipo-de-pesca.jpg?s=612x612&w=0&k=20&c=raTn3n4D7lQJP9wvodqsK0EKRwqd4lbunQc928-Jihc="
                precio="$100" />

            <Productos nombre="Señuelos de pesca"
                imgUrl="https://media.istockphoto.com/id/1096137862/es/foto/se%C3%B1uelos-de-la-pesca.jpg?s=612x612&w=0&k=20&c=6h7oeBBH_KTZ9YvqCzZRPaGtcJbm5vcYuoYk8rzUOl0="
                precio="$10" />

            <Productos nombre="Reel"
                imgUrl="https://media.istockphoto.com/id/1359706480/es/foto/bobina-para-pescar-color-azul-inercial-sobre-aislado-de-primer-plano-de-fondo-blanco.jpg?s=612x612&w=0&k=20&c=ujsUu_XdC8BXZchRhe07nsayxUILmVPNv5D2gdFz3Zc="
                precio="$50" />

        </div>
    )
};
export default Principal;


/*Clase 3: Práctica integradora

¡Hora de practicar! En esta actividad crearás un nuevo proyecto React utilizando
 la herramienta ViteJS.
Después de crear el proyecto deberás hacer una limpieza de los archivos no utilizados,
 y cuando haya terminado con la limpieza, tendrás que añadir algunos componentes JSX más 
 al contenido del archivo App.js,
Simular una estructura con header, principal y footer. 
Header y footer pueden tener cualquier texto o elemento descriptivo 
(no es necesario que tenga un contenido realista) ej. “este es el header”.
Simularemos el inicio de un e-commerce. Dentro del main se renderizan productos 
cuyo nombre y precio serán pasados como props.  Deben renderizar al menos 3 productos.
Observaciones:
En el Playground encontrarás información detallada sobre el uso de JSX y la creación de un
 proyecto React con ViteJS.
También podés consultar la siguiente documentación:
Introducción a JSX: https://pt-br.reactjs.org/docs/introducing-jsx.html
Creación de proyectos React con ViteJS: https://vitejs.dev/guide/
*/