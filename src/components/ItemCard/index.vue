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

<script type="javascript" src="./index.js"></script>
<style scoped src="./index.css"></style>

