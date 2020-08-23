var datos = data;

var app2 = new Vue({
    el: '#app2',
    data: {
        necesarias: null,
        disponibles: null,
        display: false
    }
});

var app = new Vue({
    el: '#app',
    data: {
        datos: datos,
        carreras: datos.carreras,
        duracion: 0,
        materias: {},
        anios: false,
        materias: false,
        info: null,
        carrerasValue: "-",
        aniosValue: "-",
        materiasValue: "-"
    },
    methods: {
        cargarAnios: function () {
            this.materias = false;
            this.anios = false;
            this.duracion = 0;

            var idcarrera = this.carrerasValue;
            this.aniosValue = "-";

            this.duracion = this.carreras[parseInt(idcarrera) - 1].duracion;
            this.anios = true;
        },
        cargarMaterias: function () {
            var idcarrera = this.carrerasValue;
            var anio = this.aniosValue;
            this.materiasValue = "-";

            this.materias = datos.materias[parseInt(idcarrera) - 1][parseInt(anio) - 1];
        },
        consultar: function () {
            var idcarrera = this.carrerasValue;
            var idmateria = this.materiasValue;
            //llamada a la funcion para poder trar los datos
            app2.display = false;
            app2.necesarias = null;
            app2.disponibles = null;
            axios.get(`/correlativas/consulta/${idcarrera}/${idmateria}`).then((response) => {
                app2.necesarias = response.data.necesarias;
                app2.disponibles = response.data.disponibles;
            });
            app2.display = true;
        }
    }
});