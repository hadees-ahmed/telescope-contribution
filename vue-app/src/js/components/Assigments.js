import AssigmentList from './AssignmentList.js'

export default {
    components:{AssigmentList},

    template:
        `
          <section class="class-y-6">
          <assigment-list :assignments="filters.incompleteAssignments" status="Inprogress"></assigment-list>
          <assigment-list :assignments="filters.completeAssignments" status="Completed"></assigment-list>
          </section>
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
    }
}
