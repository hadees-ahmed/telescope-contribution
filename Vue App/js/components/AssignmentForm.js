export default {
    template: `
    <form @submit.prevent="add">
<div class="border border-gray-600">
<input v-model="newAssignment" placeholder="new assignment ... " >
<button type="submit">Add</button>
</div>
</form>`,
    data() {
        return {
            newAssignment:''
        }
    },

    methods: {
        add() {
        this.$emit('add', this.newAssignment);
        this.newAssignment = ''
        }
    }
}
