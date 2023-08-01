import './App.css'
import Productos from './Productos';

function Principal() {
    return (
        <div className="">
        <Productos nombre="Horacio"/>
        <Productos precio="100"/>
        </div>
    )
};
export default Principal;


/*Front End III
Clase 3: Práctica integradora

¡Hora de practicar! En esta actividad crearás un nuevo proyecto React utilizando la herramienta ViteJS.
Después de crear el proyecto deberás hacer una limpieza de los archivos no utilizados,
 y cuando haya terminado con la limpieza, tendrás que añadir algunos componentes JSX más 
 al contenido del archivo App.js,
Simular una estructura con header, principal y footer. Header y footer pueden tener cualquier
 texto o elemento descriptivo (no es necesario que tenga un contenido realista) ej.
  “este es el header”.
Simularemos el inicio de un e-commerce. Dentro del main se renderizan productos cuyo nombre y 
precio serán pasados como props.  Deben renderizar al menos 3 productos.
Observaciones:
En el Playground encontrarás información detallada sobre el uso de JSX y la creación de un
 proyecto React con ViteJS.
También podés consultar la siguiente documentación:
Introducción a JSX: https://pt-br.reactjs.org/docs/introducing-jsx.html
Creación de proyectos React con ViteJS: https://vitejs.dev/guide/
*/