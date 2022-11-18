const conectores = require("./conexion");
const cassandra = conectores.cassandra();
const redis = conectores.redis();

const postAdministrativos = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ADMINISTRATIVOS:POST:${new Date().toISOString()}`,
      `Registro de administrativo ${req.body.curp}`
    );
    redis.quit();
  });

  const queries = [
    {
      query:
        "INSERT INTO administrativos(curp, mail, hrEntrada, hrSalida, noBancaria, escuela, extTel, funcion, nombre, tel) VALUES(?,?,?,?,?,?,?,?,?,?)",
      params: [
        req.body.curp,
        req.body.mail,
        req.body.hrentrada,
        req.body.hrsalida,
        req.body.nobancaria,
        req.body.escuela,
        req.body.exttel,
        req.body.funcion,
        req.body.nombre,
        req.body.tel,
      ],
    },
    {
      query:
        "INSERT INTO Q3(curp, mail, hrEntrada, hrSalida, noBancaria, escuela, extTel, funcion, nombre, tel) VALUES(?,?,?,?,?,?,?,?,?,?)",
      params: [
        req.body.curp,
        req.body.mail,
        req.body.hrentrada,
        req.body.hrsalida,
        req.body.nobancaria,
        req.body.escuela,
        req.body.exttel,
        req.body.funcion,
        req.body.nombre,
        req.body.tel,
      ],
    },
  ];

  cassandra.batch(queries, { prepare: true }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
};

const postAlumnos = (req, res) => {
  console.log(req.body);
  redis.connect().then(() => {
    redis.set(
      `ALUMNOS:POST:${new Date().toISOString()}`,
      `Registro de alumno ${req.body.curp}`
    );
    redis.quit();
  });

  const queries = [
    {
      query:
        "INSERT INTO alumnos(curp, escuela, fechaIncripcion, fechaNac, gradoAcademico, nombre, tutor, credito) VALUES(?,?,?,?,?,?,?,?)",
      params: [
        req.body.curp,
        req.body.escuela,
        req.body.fechaincripcion,
        req.body.fechanac,
        req.body.gradoacademico,
        req.body.nombre,
        req.body.tutor,
        req.body.credito,
      ],
    },
    {
      query:
        "INSERT INTO alumnos_escuela(curp, escuela, fechaIncripcion, fechaNac, gradoAcademico, nombre, tutor, credito) VALUES(?,?,?,?,?,?,?,?)",
      params: [
        req.body.curp,
        req.body.escuela,
        req.body.fechaincripcion,
        req.body.fechanac,
        req.body.gradoacademico,
        req.body.nombre,
        req.body.tutor,
        req.body.credito,
      ],
    },
    {
      query:
        "INSERT INTO Q2(curp, escuela, fechaIncripcion, fechaNac, gradoAcademico, nombre, tutor, credito) VALUES(?,?,?,?,?,?,?,?)",
      params: [
        req.body.curp,
        req.body.escuela,
        req.body.fechaincripcion,
        req.body.fechanac,
        req.body.gradoacademico,
        req.body.nombre,
        req.body.tutor,
        req.body.credito,
      ],
    },
  ];

  cassandra.batch(queries, { prepare: true }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
};



const postDocentes = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `DOCENTES:POST:${new Date().toISOString()}`,
      `Registro de docente ${req.body.curp}`
    );
    redis.quit();
  });

  const queries = [
    {
      query:
        "INSERT INTO docente(curp, NOBANCARIA, escuela, AREAESPECIALIDAD, notelins,GRADOESTUDIO, nombre, NOOFICINA, tel, TUTORIAFIRMADA) VALUES(?,?,?,?,?,?,?,?,?,?)",
      params: [
        req.body.curp,
        req.body.nobancaria,
        req.body.escuela,
        req.body.areaespecialidad,
        req.body.notelins,
        req.body.gradoestudio,
        req.body.nombre,
        req.body.nooficina,
        req.body.tel,
        req.body.tutoriafirmada,
      ],
    },
    {
      query:
        "INSERT INTO Q1(curp, NOBANCARIA, escuela, AREAESPECIALIDAD, notelins,GRADOESTUDIO, nombre, NOOFICINA, tel, TUTORIAFIRMADA) VALUES(?,?,?,?,?,?,?,?,?,?)",
      params: [
        req.body.curp,
        req.body.nobancaria,
        req.body.escuela,
        req.body.areaespecialidad,
        req.body.notelins,
        req.body.gradoestudio,
        req.body.nombre,
        req.body.nooficina,
        req.body.tel,
        req.body.tutoriafirmada,
      ],
    },
  ];

  cassandra.batch(queries, { prepare: true }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
};

const postEscuela = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ESCUELAS:POST:${new Date().toISOString()}`,
      `Registro de escuela ${req.body.clave}`
    );
    redis.quit();
  });

  cassandra.execute(
    "INSERT INTO escuelas(clave, cd, direccion, nombre) VALUES(?,?,?,?)",
    [
      req.body.clave,
      req.body.cd,
      req.body.direccion,
      req.body.nombre
    ],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result);
    }
  );
};

const postMantenimiento = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `MANTENIMIENTO:POST:${new Date().toISOString()}`,
      `Registro de mantenimiento ${req.body.curp}`
    );
    redis.quit();
  });
  const queries = [
    {
      query:
        "INSERT INTO mantenimiento(curp, escuela, AREAESPECIALIDAD, nombre, tel, NOTELINS, nobancaria) VALUES(?,?,?,?,?,?,?)",
      params: [
        req.body.curp,
        req.body.escuela,
        req.body.areaespecialidad,
        req.body.nombre,
        req.body.tel,
        req.body.notelins,
        req.body.nobancaria,
      ],
    },
    {
      query:
        "INSERT INTO mantenimiento_escuela(curp, escuela, AREAESPECIALIDAD, nombre, tel, NOTELINS, nobancaria) VALUES(?,?,?,?,?,?,?)",
      params: [
        req.body.curp,
        req.body.escuela,
        req.body.areaespecialidad,
        req.body.nombre,
        req.body.tel,
        req.body.notelins,
        req.body.nobancaria,
      ],
    },
  ];

  cassandra.batch(queries, { prepare: true }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
};
//Request-> Requisito. Maneja la solicitud de la petición(controla los requisitos pa'la petición)  || 
//Result -> Resultado. Controla las Respuestas del servidor/Petición.(respode la soli del servidor)

module.exports = {
  postAdministrativos,
  postAlumnos,
  postDocentes,
  postEscuela,
  postMantenimiento,
};
