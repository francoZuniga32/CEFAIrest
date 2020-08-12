var horarios = [
    {
        idMateria: 18,
        aula: '16',
        dia: 'Lunes',
        modulo: 'Teoría ',
        horainicio: '19:00:00',
        horafin: '18:00:00',
        cuatrimestre: 1,
        estado: 'normal',
        nombremateria: 'Modelos y Sistemas de Informacion',
        nombrecarrera: 'Licenciatura en Ciencias de la Computación'
    },
    {
        idMateria: 18,
        aula: '16',
        dia: 'Lunes',
        modulo: 'Teoría ',
        horainicio: '19:00:00',
        horafin: '21:00:00',
        cuatrimestre: 1,
        estado: 'normal',
        nombremateria: 'Modelos y Sistemas de Informacion',
        nombrecarrera: 'Licenciatura en Ciencias de la Computación'
    },
    {
        idMateria: 18,
        aula: '16',
        dia: 'Lunes',
        modulo: 'Teoría ',
        horainicio: '19:00:00',
        horafin: '21:00:00',
        cuatrimestre: 1,
        estado: 'normal',
        nombremateria: 'Modelos y Sistemas de Informacion',
        nombrecarrera: 'Licenciatura en Sistemas de Información'
    },
    {
        idMateria: 98,
        aula: 'Aula Informática Biblioteca',
        dia: 'Lunes',
        modulo: 'Unico',
        horainicio: '15:00:00',
        horafin: '21:00:00',
        cuatrimestre: 1,
        estado: 'normal',
        nombremateria: 'Programacion Web Avanzada',
        nombrecarrera: 'Tecnicatura Universitaria en Desarrollo Web'
    },
    {
        idMateria: 71,
        aula: 'Aula 13.1',
        dia: 'Lunes',
        modulo: 'Unico',
        horainicio: '17:00:00',
        horafin: '21:00:00',
        cuatrimestre: 1,
        estado: 'normal',
        nombremateria: 'Planificacion y Control de Proyectos',
        nombrecarrera: 'Licenciatura en Sistemas de Información'
    },
    {
        idMateria: 18,
        aula: '16',
        dia: 'Lunes',
        modulo: 'Teoría ',
        horainicio: '19:00:00',
        horafin: '21:00:00',
        cuatrimestre: 1,
        estado: 'normal',
        nombremateria: 'Modelos y Sistemas de Informacion',
        nombrecarrera: 'Profesorado en Informática'
    },
    {
        idMateria: 6,
        aula: 'Laboratorio III',
        dia: 'Lunes',
        modulo: 'Unico',
        horainicio: '18:00:00',
        horafin: '22:00:00',
        cuatrimestre: 1,
        estado: 'normal',
        nombremateria: 'Redes de Datos',
        nombrecarrera: 'Tecnicatura Universitaria en Administración de Sistemas y Software Libre'
    },
    {
        idMateria: 18,
        aula: '16',
        dia: 'Lunes',
        modulo: 'Teoría ',
        horainicio: '19:00:00',
        horafin: '21:00:00',
        cuatrimestre: 1,
        estado: 'normal',
        nombremateria: 'Modelos y Sistemas de Informacion',
        nombrecarrera: 'Profesorado en Informática'
    }
];

console.log(horarios);

console.log("-------------------------------------------------------");

var horarios2 = horarios.filter((horario) => {
    var date = new Date();
    var hora = horario.horafin.split(':');
    console.log(hora);
    console.log(date.getHours()+":"+date.getMinutes());
    var retorno = true;

    if(parseInt(hora[0]) < date.getHours()){
        retorno = false;
    }else if(parseInt(hora[1]) < date.getMinutes()){
        retorno = false;
    }

    return retorno;
});

console.log(horarios);
