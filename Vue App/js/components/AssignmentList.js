import Assignment from "./Assignment.js";
export default {
    components:{Assignment},

    template: `
    <section v-show="assignments.length">
      <h1 class="font-bold mb-2">{{ title }}</h1>
      <ul>
     
      <assignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"></assignment>
     
<!--        <li-->
<!--          v-for="assignment in assignments"-->
<!--          :key="assignment.id">-->
<!--          <label>-->
<!--            <input type="checkbox" v-model="assignment.complete">{{ assignment.name }}-->
<!--          </label>-->
<!--        </li>-->
      </ul>
    </section>
  `,
    props: {
        assignments: {
            type: Array,
        },
        title: {
            type: String,
        }
    }
}
