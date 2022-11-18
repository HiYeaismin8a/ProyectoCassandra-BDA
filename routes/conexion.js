const cassandra = require('cassandra-driver');//Instancia para traer el controlador de cassandra
const redis = require('redis');

const clienteCassandra = () => {
  return new cassandra.Client({
    contactPoints: ['localhost'],   //correr un contenedor en el localhost. Lugar donde se irá a buscar la keyspace/BD información.
    localDataCenter: 'datacenter1', //Clúster = Centro de datos. Se asigna por default al usar:
    //SimpleStrategy cuando se crea la Keyspace.

    keyspace: 'gestionescolar_lab8', //nombre de  keyspace = (yo)base de datos
  });
};

const conRedis = () => {
  const client = redis.createClient();
  return client;
};

//Exportar el cliente de cassandra como cassandra,  ||  Igual con Redis.
module.exports = { cassandra: clienteCassandra, redis: conRedis };