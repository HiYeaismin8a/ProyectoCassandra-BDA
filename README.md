# **JAZMIN OCHOA BENITEZ**
# Gestión Escolar - BDA
# RUTAS
[`COLECCION EN POSTMAN`](https://www.getpostman.com/collections/304b6dfd9b5fb5f971a6)


### GET
1. localhost:3000/escuelas
2. localhost:3000/alumnos
3. localhost:3000/docentes
4. localhost:3000/mantenimiento
5. localhost:3000/administrativos
6. localhost:3000/alumnos/docente/6
7. localhost:3000/docentes/escuela/943172
8. localhost:3000/administrativos/escuela/943172
9. localhost:3000/alumnos/escuela/18DCT0340E
10. localhost:3000/mantenimientos/escuelas/943172


### POST - Estructura De Doc
``` json
Docente:
{
    "curp": "A6",
    "areaespecialidad": "SistemasLSO",
    "escuela": "943172",
    "gradoestudio": "Ingenieria",
    "nobancaria": "12345672",
    "nombre": "Juan Perez",
    "nooficina": "11",
    "notelins": 555555,
    "tel": "2234567890",
    "tutorados": [
        "OOBJ990323MNTCNZ04",
        "A5"
    ],
    "tutoriafirmada": false
}
```

```json
Administrativo:
{
    "curp": "1",
    "funcion": "String",
    "hrentrada": "String",
    "hrsalida": "String",
    "exttel": "String",
    "mail": "String",
    "curp": "String",
    "nombre": "String",
    "tel": "String",
    "nobancaria": "String",
    "escuela": "Un número o 24 caracteres"
}
```
Alumno
```json
    {
        
        "curp": "2DAOOBJ990323MNTCNZ04",
        "nombre": "String",
        "fechanac":"String",
        "fechaincripcion":"String",
        "gradoacademico": "String",
        "creditotutoriafirmada": "Boolean",
        "tutor": "Un número o 24 caracteres",
        "escuela": "Un número o 24 caracteres"
    }
 ```
 Escuela
 ```json
 {
        "clave": "String",
        "nombre": "String",
        "cd": "String",
        "direccion": "String",
        "administrativos": [
           "Un número o 24 caracteres",
            "Un número o 24 caracteres"
        ],
        "docentes": [
          "Un número o 24 caracteres",
          "Un número o 24 caracteres"
        ],
        "mantenimiento": [
            "Un número o 24 caracteres string",
            "Un número o 24 caracteres string"
        ],
        "alumnos": [
            "Un número o 24 caracteres o string",
           "Un número o 24 caracteres string",
        ]
    }
 ```
 Mantenimiento
 ```json
     {
        "notelins": "String",
        "areaespecialidad": "String",
        "curp": "String",
        "nombre": "String",
        "tel":"String",
        "nobancaria": "String",
        "escuela": "Un número o 24 caracteres",
    }
 ```

# CAPTURAS

![1](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/1.PNG)
![2](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/2.PNG)
![3](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/3.PNG)
![4](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/4.PNG)
![5](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/5.PNG)
![6](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/6.PNG)
![7](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/7.PNG)
![8](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/8.PNG)
![9](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/9.PNG)
![10](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/10.PNG)
![11](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/11.PNG)
![12](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/12.PNG)
![13](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/13.PNG)
![14](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/14.PNG)
![15](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/15.PNG)
![16](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/16.PNG)
![17](./Capturas_Gesti%C3%B3n_Escolar-Cassandra/17.PNG)