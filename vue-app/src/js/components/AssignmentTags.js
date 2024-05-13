export default {
    template: `
     <div class="flex gap-2">
      <button @click="$emit('update:currentTag', tag)" v-for="tag in allTags" :key="tag.id" class="border rounded px-1 py-px text-xs" 
              :class="{ 'border-blue-500 text-blue-500' :tag === currentTag}">{{tag}}</button>
      </div>
    `,
    
    props:{
        tags: Array,
        currentTag: String
    },

    computed:{
        allTags() {
            return ['all', ...new Set(this.tags)];
        }
    }
}
