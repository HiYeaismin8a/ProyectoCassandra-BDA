const express = require("express"); //Importar el servicio de express para crear rutas
const router = express.Router(); //Instancias un objeto para Registrar|generar| rutas 
const get = require("./get");    //Intanciar|Importar las rutas del archivo GET y POST
const post = require("./post");

//DEFINIR = Declarar UNA RUTA
//GET
router.get("/alumnos", get.getAlumnos);
router.get("/alumnos/:curp", get.getAlumno);
router.get("/alumnos/docente/:curp", get.getAlumnosDocente);
router.get("/docentes", get.getDocentes);
router.get("/docentes/:curp", get.getDocente);
router.get("/docentes/escuela/:clave", get.getDocentesEscuela);
router.get("/escuelas", get.getEscuelas);
router.get("/escuelas/:clave", get.getEscuela);
router.get("/mantenimientos/escuelas/:clave", get.getMantenimientosEscuela);
router.get("/mantenimiento", get.getMantenimiento);
router.get("/mantenimiento/:curp", get.getMantenimientoo);
router.get("/administrativos", get.getAdministrativos);
router.get("/administrativos/:curp", get.getAdministrativo);
router.get("/administrativos/escuela/:clave", get.getAdministrativosEscuela);
router.get("/alumnos/escuela/:clave", get.getAlumnosEscuela);

//POST
router.post("/administrativo", post.postAdministrativos);
router.post("/alumno", post.postAlumnos);
router.post("/docente", post.postDocentes);
router.post("/escuela", post.postEscuela);
router.post("/mantenimiento", post.postMantenimiento);


module.exports = router;