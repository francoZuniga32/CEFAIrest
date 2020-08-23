
var app = new Vue({
    el: '#app',
    data: {
        datos: data,
        carreras: data.carreras,
        duracion: 0,
        materias: {},
        anios: false,
        materias: false,
        add: false,
        carrerasValue: "-",
        aniosValue: "-",
        materiasValue: "-",
        desabilitado: [],
        info: null,
        horario: [],
        cuatrimestre: 2,
        lunes: [], martes: [], miercoles: [], jueves: [], viernes: [], sabado: [],
        errors: []
    },
    methods: {
        cargarAnios: function () {
            this.materias = false;
            this.anios = false;
            this.duracion = 0;
            this.aniosValue = "-";

            var idcarrera = this.carrerasValue;
            this.duracion = this.carreras[parseInt(idcarrera) - 1].duracion;
            this.anios = true;
        },
        cargarMaterias: function () {
            var idcarrera = this.carrerasValue;
            var anio = this.aniosValue;
            this.materiasValue = "-";

            this.materias = data.materias[parseInt(idcarrera) - 1][parseInt(anio) - 1];
        },
        addDisplay: function (){
            this.add = true;
        },
        consultar: function () {
            var idmateria = this.materiasValue;
            //llamada a la funcion para poder trar los datos
            if(!this.desabilitado.includes(idmateria)){
                if(idmateria != "-"){
                    this.desabilitado.push(idmateria);
                    axios.get(`/horarios/horarios/materia/${idmateria}/${this.cuatrimestre}`).then((response) => {
                        if(response.data.length > 0) {
                            response.data.forEach(element => {
                                this.horario.push(element);
                            })
                            this.errors = [];
                            this.clasificar(response.data);
                        }else{
                            this.errors = [];
                            this.errors.push(`La materia seleccionada no tiene recursados para el ${this.cuatrimestre}° cuatrimestre`);
                        }
                    });
                }else{
                    this.errors.push(`la materia seleccionada no es una materia valida, intente con otra opcion`);
                }
            }
        },
        clasificar: function (array) {
            array.forEach(element => {
                switch (element.dia) {
                    case 'Lunes':
                        this.lunes.push(element);
                        this.lunes.sort(this.compareDate);
                        break;
                    case 'Martes':
                        this.martes.push(element);
                        this.martes.sort(this.compareDate);
                        break;
                    case 'Miercoles':
                        this.miercoles.push(element);
                        this.miercoles.sort(this.compareDate);
                        break;
                    case 'Jueves':
                        this.jueves.push(element);
                        this.jueves.sort(this.compareDate);
                        break;
                    case 'Viernes':
                        this.viernes.push(element);
                        this.viernes.sort(this.compareDate);
                        break;
                    case 'Savado':
                        this.savado.push(element);
                        this.savado.sort(this.compareDate);
                        break;
                    default:

                        break;
                }
            })
        },
        compareDate: function(a, b) {
            var retorno;
            a = a.horainicio;
            b = b.horainicio;
            if(a > b){
                retorno = 1;
            }else if(a == b){
                retorno = 0;
            }else{
                retorno = -1;
            }
            return retorno;
        }
    }
});