//Instancia asignada a una variable = Iportación
const bodyParser = require("body-parser"); //Traducir el cuerpo de la solicitud FEO a (Json).
const express = require("express");       //El encargado de levantar un servidor.
// Expres está en las librerias De NodeJS

const morgan = require("morgan");  //Para los logs -> Mensajes de consola que manda el servidor
const router = require("./routes/routes") //Instancias/requerir/importar rutas de otro archivo
const app = express();            //Se CREA el servidor


//*  **************************** << MIDDLEWARE >> ***************************************** */

app.use(morgan("dev"));          //Controla el Formato de los mensajes->Consola
app.use(bodyParser.json());     // Traducir el cuerpo de una solicitud en un cuerpo JSON
app.use(bodyParser.urlencoded({ extended: true })); //url Extendida para que acepte caracteres especiales ";=#$"
app.use("/", router)           // Raiz de la ruta (va antes). Una barra vacía es como no tener nada =vacío = la ignora cuando empieza a ejecutar la consulta

//*  *************************************************************************************** */


//lanzar/levantar/correr/iniciar/
app.listen(3000, () => console.log("Servidor en puerto 3000")); //Puerto, Calback una vez lanzada 
