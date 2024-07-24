import AssignmentList from "./AssignmentList.js";
export default {
    template: `
<assignment-list :assignments="filters.inProgress" title="InProgress"></assignment-list>

<assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>
</div>`,

    components: {AssignmentList},

    data() {
        return {
            assignments: [
                {name: 'english', teacher: 'faisal', complete: false, id:1},
                {name: 'urdu', teacher: 'Ali', complete: false, id:2},
                {name: 'computer', teacher: 'yasir', complete: false, id:3}
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress:this.assignments.filter(a => !a.complete),
                completed:this.assignments.filter(a => a.complete)
            }
        }
    }
};
