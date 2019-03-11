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

<script type="javascript" src="./index.js"></script>
<style scoped src="./index.css"></style>
