var app = new Vue({
    el: '#app',
    data:{
        horarios: [],
        dia: "",
        hora: "00:00:00"
    },
    mounted: function() {
        this.load();
    },
    methods: {
        load: function(){
        this.dia = this.numberToDate(new Date().getDay());
        this.hora = this.timeParse(new Date);
        console.log(this.dia+" "+this.hora);
        axios.get(`/horarios/consulta/${this.dia}/${this.hora}`).then((response) => {
            this.horarios = response.data;
            this.horarios.forEach(element => {
                    var date2 = this.timeParse(new Date);
                    if(this.comparedToHours(element.horainicio, date2) >= 0 && this.comparedToHours(element.horafin, date2) < 0){
                        element.color = "verde";
                        console.log("verde");
                    }else{
                        element.color = "null";
                        console.log("null");
                    }
                });
            });
        },
        numberToDate: function(number) {
            switch (number) {
                case 0:
                    return "domingo";
                    break;
                case 1:    
                    return "lunes";
                    break;
                case 2:
                    return "martes";
                    break;
                case 3:
                    return "miercoles";
                    break;
                case 4:
                    return "jueves";
                    break;
                case 5:
                    return "viernes";
                    break;
                case 6:
                    return "sabado";
                    break;
                default:
                    break;
            }
        },
        timeParse: function (time){
            return this.timeNumberParse(time.getHours()) + ":" + this.timeNumberParse(time.getMinutes()) + ":00";
        },
        timeNumberParse: function (numberTime){
            var retorno = numberTime;
            if(retorno < 10){
                retorno = "0" + retorno;
            }
            return retorno;
        },
        comparedToHours: function (hours1, hours2){
            var retorno = 0;
            var hours1 = hours1.split(":");
            var hours2 = hours2.split(":");

            var date1 = new Date();
            date1.setHours(hours1[0]);
            date1.setMinutes(hours1[1]);

            var date2 = new Date();
            date2.setHours(hours2[0]);
            date2.setMinutes(hours2[1]);

            if(date1 < date2){
                retorno = 1;
            }else if(date1 > date2){
                retorno = -1;
            }
            return retorno;
        }
    }
});

var reloj = new Vue({
    el: '#reloj',
    data:{
        hora: "00:00:00",
        dia: ''
    }, 
    mounted: function() {
        this.hora = app.timeParse(new Date);
        console.log(this.hora);
        this.dia = app.numberToDate(new Date().getDay());
        setInterval(this.load(), 1000);
    },
    methods:{
        load: function(){
            var fecha = new Date();
            var minutos = fecha.getMinutes();

            console.log(minutos);
            if(minutos == 0 || minutos == 30){
                app.load();
            }

            this.hora = app.timeParse(new Date);
        }
    }
});
setInterval(reloj.load, 30000);