export default {
    template: `
    <form class="p-2" @submit.prevent="add">
            <div class=" border border-grey-600 text-black flex text-xs">
            <input v-model="newAssignment" placeholder="New Assignemnt..." class="p-1 flex-1">
            
            <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
          </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add(){
        this.$emit('add', this.newAssignment);
            this.newAssignment = ''
        }
    }
}
