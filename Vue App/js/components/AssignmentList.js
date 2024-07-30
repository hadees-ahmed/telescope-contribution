import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
    components:{Assignment, AssignmentTags},

    template: `
    <section v-show="assignments.length">
      <h1 class="font-bold mb-2">{{ title }} <span>{{assignments.length}}</span>
</h1>
<assignment-tags v-model="currentTag"  @change="currentTag = $event" :tags="assignments.map( a => a.tag)" ></assignment-tags>

      <ul>
      <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
     
      </ul>
    </section>
  `,
    data() {
        return {
            currentTag: 'all'
        }
    },
    props: {
        assignments: {
            type: Array,
        },
        title: {
            type: String,
        },
    },

    computed:{
        filteredAssignments() {
            if (this.currentTag === 'all'){
                return this.assignments
            }
           return this.assignments.filter(assignments => assignments.tag === this.currentTag)
        },


    }

}
