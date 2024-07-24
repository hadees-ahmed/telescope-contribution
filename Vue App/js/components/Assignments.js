import AssignmentList from "./AssignmentList.js";
import AssignmentForm from "./AssignmentForm.js";

export default {
    template: `

<assignment-list :assignments="filters.inProgress" title="InProgress"></assignment-list>


<assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>

</div>
<assignment-form @add="add"></assignment-form>
`,

    components: {AssignmentList, AssignmentForm},

    data() {
        return {
            assignments: [
                {name: 'English', teacher: 'Faisal', complete: false, id: 1, tag: 'Language'},
                {name: 'Urdu', teacher: 'Ali', complete: false, id: 2, tag: 'Language'},
                {name: 'Computer', teacher: 'Yasir', complete: false, id: 3, tag: 'Technology'},
                {name: 'Mathematics', teacher: 'Sara', complete: false, id: 4, tag: 'Science'},
                {name: 'Biology', teacher: 'John', complete: false, id: 5, tag: 'Science'},
                {name: 'History', teacher: 'Emma', complete: false, id: 6, tag: 'Social Studies'},
                {name: 'Geography', teacher: 'Lucas', complete: false, id: 7, tag: 'Social Studies'},
                {name: 'Art', teacher: 'Sophia', complete: false, id: 8, tag: 'Creative'},
                {name: 'Music', teacher: 'Olivia', complete: false, id: 9, tag: 'Creative'},
                {name: 'Physical Education', teacher: 'Mike', complete: false, id: 10, tag: 'Health & Fitness'}
            ],
            tag:''
        }
    },

    computed: {
        filters() {
            return {
                inProgress:this.assignments.filter(a => !a.complete),
                completed:this.assignments.filter(a => a.complete)
            }
        }
    },

    methods: {
        add(assignment) {
            this.assignments.push({
                name: assignment,
                completed: false,
                id:this.assignments.length + 1
            })
        },
        searchTag() {

        }
    }
};
