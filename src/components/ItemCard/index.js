export default {
  name: 'item-card',
  props: [
    'image',
    'name',
    'artist'
  ],
  data() {
    return {
      loaded: false,
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true
    },
  },
  computed: {
    itemStyle() {
      return `background-image: url(${this.image.url});`
    }
  },
}
