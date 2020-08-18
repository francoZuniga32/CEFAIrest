
var app = new Vue({
    el: '#app',
    data: {
        datos: data,
        carreras: data.carreras,
        duracion: 0,
        materias: {},
        anios: false,
        materias: false,
        info: null,
        horario: [],
        lunes: [], martes: [], miercoles: [], jueves: [], viernes: [], sabado: []
    },
    methods: {
        cargarAnios: function () {
            this.materias = false;
            this.anios = false;
            this.duracion = 0;

            var idcarrera = this.$refs.carreras.value;
            this.duracion = this.carreras[parseInt(idcarrera) - 1].duracion;
            this.anios = true;
        },
        cargarMaterias: function () {
            var idcarrera = this.$refs.carreras.value;
            var anio = this.$refs.anios.value;

            this.materias = data.materias[parseInt(idcarrera) - 1][parseInt(anio) - 1];
        },
        consultar: function () {
            var idcarrera = this.$refs.carreras.value;
            var idmateria = this.$refs.materias.value;
            //llamada a la funcion para poder trar los datos

            axios.get(`/horarios/horarios/materia/${idmateria}`).then((response) => {
                response.data.forEach(element => {
                    this.horario.push(element);
                })
                this.clasificar(response.data);
            });
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