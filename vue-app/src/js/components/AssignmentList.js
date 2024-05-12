import Assignment from './Assignment.js'
export  default {
    components:{Assignment},

    template: `
    <section>
        <h1 v-show="assignments"> {{status}}</h1>
        <ul>
            <assignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"></assignment>
        </ul>
    </section>
    
    `,

    props:{
        assignments: Array,
        status: String
    }
}
