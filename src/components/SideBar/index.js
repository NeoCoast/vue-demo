export default {
  name: 'side-bar',
  data() {
    return {
      options: [
        {
          label: 'Home',
          route: '/browse/featured',
        },
        {
          label: 'Search',
          route: '/search',
        },
      ],
    }
  },
  methods: {
    activeTab(route) {
      return route.includes(this.$route.name)
    },
    getIcon(name) {
      return require(`../../assets/${name}.svg`)
    }
  }
}
