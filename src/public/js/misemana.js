
Vue.component('materiacard',{
    props: ['materia'],
    template: `<div class="card">
                <h5 class="card-header">{{ materia.nombre }}</h5>
                <div class="card-body">
                    <p class="card-text">{{ materia.horainicio.substring(0,5) }} - {{ materia.horafin.substring(0,5) }}</p>
                </div>
                <div class="card-footer text-muted">
                    {{ materia.modulo }}
                </div>
            </div>`
})

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
                this.clasificar();
            });
        },
        clasificar: function () {
            this.horario.forEach(element => {
                switch (element.dia) {
                    case 'Lunes':
                        this.lunes.push(element);
                        break;
                    case 'Martes':
                        this.martes.push(element);
                        break;
                    case 'Miercoles':
                        this.miercoles.push(element);
                        break;
                    case 'Jueves':
                        this.jueves.push(element);
                        break;
                    case 'Viernes':
                        this.viernes.push(element);
                        break;
                    case 'Savado':
                        this.savado.push(element);
                        break;
                    default:

                        break;
                }
            })
        }
    }
});