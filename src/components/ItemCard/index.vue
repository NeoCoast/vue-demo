<template>
  <transition>
    <div class="item">
      <transition>
        <img
          class="item__image"
          :src="image.url"
          @load="onLoaded"
          v-show="loaded"
        />
      </transition>
      <div v-if="name && artist">
        <div class="item__name item__ellipsis">
          {{name}}
        </div>
        <div class="item__artist item__ellipsis">
          {{artist}}
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="javascript">
export default {
  name: 'item-card',
  props: {
    image: {
      type: Object,
      validator(value) {
        return !!value.url
      }
    },
    name: {
      type: String,
      required: true,
    },
    artist: String,
  },
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
</script>

<style scoped src="./index.css"></style>

