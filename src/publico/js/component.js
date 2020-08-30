Vue.component('materiacard',{
    props: ['materia'],
    template: `<div class="card">
                <h6 class="card-header">{{ materia.nombre }}</h6>
                <div class="card-body">
                    <p class="card-text">{{ materia.horainicio.substring(0,5) }} - {{ materia.horafin.substring(0,5) }}</p>
                </div>
                <div class="card-footer text-muted">
                    {{ materia.modulo }}
                </div>
            </div>`
});

Vue.component('selectmateria', {
    props: ['carreras', 'materias', 'anios'],
    template:``
});