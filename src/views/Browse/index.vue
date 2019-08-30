<template>
  <layout class="browse">
    <div class="browse__tabs-container">
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :to="`/browse/${tab}`"
        class="browse__tab"
        :class="{ 'browse__tab--active': tab === $route.params.by }"
      >
       {{tab}}
      </router-link>
    </div>

    <div class="browse__items-container">
      <item-card
        v-for="item in items"
        :key="item.id"
        :image="item.images && item.images[0]"
        :name="item.name"
        :artist="item.artists && item.artists[0] && item.artists[0].name"
      />
    </div>
  </layout>
</template>

<script type="javascript">
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
</script>

<style scoped src="./index.css"></style>
