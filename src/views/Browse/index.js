import { mapGetters, mapActions } from 'vuex'
import Layout from '@/components/Layout/index.vue'
import ItemCard from '@/components/ItemCard/index.vue'

export default {
  name: 'browse',
  components: {
    Layout,
    ItemCard,
  },
  data() {
    return {
      tabs: [
        'featured',
        'new-releases',
      ],
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: function () {
      this.fetchData()
    },
  },
  computed: {
    ...mapGetters('browse', [
      'error',
      'loading',
      'items',
    ]),
  },
  methods: {
    ...mapActions('browse', [
      'getFeatured',
      'getNewReleases',
    ]),
    fetchData() {
      const by = this.$route.params.by

      switch (by) {
        case 'featured':
          this.getFeatured()
          break
        case 'new-releases':
          this.getNewReleases()
          break
        default:
          break
      }
    },
  },
}
