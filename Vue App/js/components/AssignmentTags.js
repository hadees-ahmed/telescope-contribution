export default {
    template: `<div>
<button @click="this.$emit('update:modelValue',tag)" v-for="tag in allTags" :key="id" class="font-bold mb-2" :class="{'border-blue-500 text-blue-500' : tag === modelValue}">{{ tag }}</button>
</div>`,
    data() {
        return {
            currentTag: 'all'
        }
    },
    props:{
        tags: Array,
        modelValue:String
    },

    computed:{
        allTags() {
            return ['all', ...new Set(this.tags)];
        }
    }
}
