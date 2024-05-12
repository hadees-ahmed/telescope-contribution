export default {

    template: `
      <button :disabled="processing" :class="{
          'text-blue' :color === 'blue',
          'text-green':color === 'green'
       }">
        <slot/>
      </button>`,

    props: {
        color: {
            type: String
        },
    },

    data() {
        return {
            processing: false
        };
    }
}
