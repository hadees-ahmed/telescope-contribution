import AssigmentList from './AssignmentList.js'
import CreateAssignmentForm from './CreateAssignmentForm.js'

export default {
    components:{AssigmentList, CreateAssignmentForm},

    template:
        `
          <assigment-list v-if="filters.incompleteAssignments.length >0" :assignments="filters.incompleteAssignments" status="Inprogress"></assigment-list>
          <assigment-list v-if="filters.completeAssignments.length >0" :assignments="filters.completeAssignments" status="Completed" ></assigment-list>
          <create-assignment-form @add="add"></create-assignment-form>
          
        `,
    data() {
        return {
            assignments: [
                {name: 'Physics', complete: false, id:1},
                {name: 'Chemistry', complete: false, id:2},
                {name: 'Maths', complete: false, id:3}
            ]
        }
    },

    computed: {
        filters() {
            return {
                incompleteAssignments: this.assignments.filter(assignment => !assignment.complete),
                completeAssignments: this.assignments.filter(assignment => assignment.complete)
            }

        }
    },

    methods:{
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            })
        }
    }
}
