import Assignment from './Assignment.js'
import AssignmnetTags from './AssignmentTags.js'
export  default {
    components:{Assignment, AssignmnetTags},

    template: `
    <section>
        <h1 v-show="assignments"> {{status}}
          <span>
            ({{assignments.length}})
          </span>
        </h1>

      <assignmnet-tags 
          v-model:currentTag="currentTag" 
          :tags="this.assignments.map(a => a.tag)" 
      ></assignmnet-tags>

      <ul class="border border-gray-600 divide-y divide-gray-600 mt-3">
            <assignment 
                v-for="assignment in filteredAssignemnts" 
                :key="assignment.id" 
                :assignment="assignment"
            ></assignment>
        </ul>
    </section>
    `,

    data() {
        return  {
            currentTag: 'all'
        };
    },

    computed:{
        filteredAssignemnts() {
            if (this.currentTag != 'all') {
                return this.assignments.filter(a => a.tag === this.currentTag)
            }
            return this.assignments
        },
    },

    props:{
        assignments: Array,
        status: String
    }
}
