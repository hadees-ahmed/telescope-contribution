import Assignment from './Assignment.js'
export  default {
    components:{Assignment},

    template: `
    <section>
        <h1 v-show="assignments"> {{status}}
          <span>
            ({{assignments.length}})
          </span>
        </h1>
      <div class="flex gap-2">
      <button @click="currentTag = tag" v-for="tag in tags" :key="tag.id" class="border rounded px-1 py-px text-xs" :class="{ 'border-blue-500 text-blue-500' :tag === currentTag}">{{tag}}</button>
      </div>

      <ul class="border border-gray-600 divide-y divide-gray-600 mt-3">
            <assignment v-for="assignment in filteredAssignemnts" :key="assignment.id" :assignment="assignment"></assignment>
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
        tags() {
          return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    },

    props:{
        assignments: Array,
        status: String
    }
}
