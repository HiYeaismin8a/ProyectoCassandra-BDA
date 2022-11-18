const conectores = require("./conexion");
const cassandra = conectores.cassandra();
const redis = conectores.redis();

const getAdministrativos = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ADMINISTRATIVOS:GET:${new Date().toUTCString()}`,
      `consulta de administrativos`
    );
    redis.quit();
  });
  cassandra.execute("SELECT * FROM administrativos", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result.rows);
  });
};

const getAdministrativosEscuela = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ADMINISTRATIVOS:GET:${new Date().toUTCString()}`,
      `consulta de administrativos de la escuela ${req.params.clave}`
    );
    redis.quit();
  });
  cassandra.execute(
    "SELECT * FROM Q3 WHERE escuela=?",
    [req.params.clave],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows);
    }
  );
};

const getAdministrativo = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `ADMINISTRATIVOS:GET:${new Date().toUTCString()}`,
      `Obtener de administrativos ${req.params.curp}`
    );
    redis.quit();
  });
  cassandra.execute(
    "SELECT * FROM administrativos where curp=?",
    [req.params.curp],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows[0]);
    }
  );
};

const getAlumnos = (req, res) => {
  redis.connect().then(() => {
    redis.set(`Alumnos:GET:${new Date().toUTCString()}`, `consulta de alumnos`);
    redis.quit();
  });
  cassandra.execute("SELECT * FROM alumnos", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result.rows);
  });
};

const getAlumnosDocente = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `Alumnos:GET:${new Date().toUTCString()}`,
      `consulta de tutorados del docente ${req.params.curp}`
    );
    redis.quit();
  });
  cassandra.execute(
    "SELECT * FROM Q2 WHERE TUTOR=?",
    [req.params.curp],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows);
    }
  );
};

const getAlumno = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `Alumnos:GET:${new Date().toUTCString()}`,
      `Obtener de alumnos ${req.params.curp}`
    );
    redis.quit();
  });
  cassandra.execute(
    "SELECT * FROM alumnos WHERE curp=?",
    [req.params.curp],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows[0]);
    }
  );
};

const getDocentes = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `Docentes:GET:${new Date().toUTCString()}`,
      `consulta de docentes`
    );
    redis.quit();
  });
  cassandra.execute("SELECT * FROM docente", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result.rows);
  });
};

const getDocentesEscuela = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `Docentes:GET:${new Date().toUTCString()}`,
      `consulta de docentes de la escuela ${req.params.clave}`
    );
    redis.quit();
  });
  cassandra.execute(
    "SELECT * FROM Q1 WHERE escuela=?",
    [req.params.clave],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows);
    }
  );
};

const getDocente = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `Docentes:GET:${new Date().toUTCString()}`,
      `OBTENER de docentes ${req.params.curp}`
    );
    redis.quit();
  });
  cassandra.execute(
    "SELECT * FROM docente where curp=?",
    [req.params.curp],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows[0]);
    }
  );
};

const getEscuelas = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `Escuela:GET:${new Date().toUTCString()}`,
      `consulta de escuelas`
    );
    redis.quit();
  });
  cassandra.execute("SELECT * FROM escuelas", (err, results) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(results.rows);
  });
};

const getEscuela = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `Escuela:GET:${new Date().toUTCString()}`,
      `OBTENER de escuela ${req.params.clave}`
    );
    redis.quit();
  });
  cassandra.execute(
    "SELECT * FROM escuelas where clave=?",
    [req.params.clave],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows[0]);
    }
  );
};

const getMantenimiento = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `mantenimiento:GET:${new Date().toUTCString()}`,
      `consulta de mantenimientos`
    );
    redis.quit();
  });
  cassandra.execute("SELECT * FROM mantenimiento", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result.rows);
  });
};
const getMantenimientoo = (req, res) => {
  redis.connect().then(() => {
    redis.set(
      `mantenimiento:GET:${new Date().toUTCString()}`,
      `Registro de mantenimiento ${req.params.curp}`
    );
    redis.quit();
  });
  cassandra.execute(
    "SELECT * FROM mantenimiento where curp=?",
    [req.params.curp],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows[0]);
    }
  );
};

const getMantenimientosEscuela = (req, res)=>{
  redis.connect().then(() => {
    redis.set(
      `mantenimiento:GET:${new Date().toUTCString()}`,
      `Consulta de mantenimiento ${req.params.clave}`
    );
    redis.quit();
  });
  cassandra.execute(
    "SELECT * FROM mantenimiento_escuela where escuela=?",
    [req.params.clave],
    { prepare: true },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows);
    }
  );
}
const getAlumnosEscuela = (req, res)=>{ 
//Request -> Requisito. Maneja la solicitud de la petición   || 
//Result -> Resultado. Respuestas del servidor/Petición
  redis.connect().then(() => {
    redis.set(
      `Alumnos-Escuela:GET:${new Date().toUTCString()}`, //
      `Consulta-Alumnos${req.params.clave}` //Parametro Ruta, no importan los espacios
    );
    redis.quit();
  });
  cassandra.execute(
    "SELECT * FROM alumnos_escuela WHERE escuela=?",
    [req.params.clave],
    {prepare: true},
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json(result.rows);
    }
  );
}
//Request -> Requisito.   || Result -> Resultado
//Request -> Requisito. Maneja la solicitud de la petición(manipula los requisitos)   || 
            //"Se Requiere como parámetro la clave"
//Result -> Resultado. Respuestas del servidor/Petición

module.exports = {
  getAlumnos,
  getAlumno,
  getAlumnosDocente,
  getAlumnosEscuela,
  
  getDocentes,
  getDocentesEscuela,
  getDocente,
  
  getAdministrativos,
  getAdministrativosEscuela,
  getAdministrativo,
  
  getEscuelas,
  getEscuela,
  getMantenimiento,
  getMantenimientoo,
  getMantenimientosEscuela
};
