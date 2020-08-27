Vue.component('materiacardadmin',{
    props: ['materia', 'url'],
    template: `<div class="card">
                <a role="button" v-bind:href="url" class="btn btn-link d-flex justify-content-end">
                    <span class="material-icons">
                        create
                    </span>
                </a>
                <h6 class="card-header">
                    {{ materia.nombre }}
                </h6>
                <div class="card-body">
                    <p class="card-text">{{ materia.horainicio.substring(0,5) }} - {{ materia.horafin.substring(0,5) }}</p>
                </div>
                <div class="card-footer text-muted">
                    {{ materia.modulo }}
                </div>
            </div>`
});