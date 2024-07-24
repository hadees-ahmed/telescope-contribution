export default {
    template: `<div>
<button @click="this.$emit('change',tag)" v-for="tag in allTags" :key="id" class="font-bold mb-2" :class="{'border-blue-500 text-blue-500' : tag === currentTag}">{{ tag }}</button>
</div>`,
    data() {
        return {
            currentTag: 'all'
        }
    },
    props:{
        tags: Array,
        currentTag:String
    },

    computed:{
        allTags() {
            return ['all', ...new Set(this.tags)];
        }
    }
}
