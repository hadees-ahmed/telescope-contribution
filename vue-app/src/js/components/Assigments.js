import AssigmentList from './AssignmentList.js'

export default {
    components:{AssigmentList},

    template:
        `
          <assigment-list v-if="filters.incompleteAssignments.length >0" :assignments="filters.incompleteAssignments" status="Inprogress"></assigment-list>
          <assigment-list v-if="filters.completeAssignments.length >0" :assignments="filters.completeAssignments" status="Completed" ></assigment-list>
          
          <form class="p-9" @submit.prevent="add">
            <div class=" border border-grey-600 text-black">
            <input v-model="newAssignment" placeholder="New Assignemnt..." class="p-2">
            
            <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
          </form>
        `,

    data() {
        return {
            assignments: [
                {name: 'Physics', complete: false, id:1},
                {name: 'Chemistry', complete: false, id:2},
                {name: 'Maths', complete: false, id:3}
            ],

            newAssignment: ''
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
        add(){
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });
            this.newAssignment = ''
        }
    }
}
