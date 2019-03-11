<template>
  <div class="side-bar">
    <router-link
      class="side-bar__option"
      v-for="option in options"
      :class="{ 'side-bar__option--active': activeTab(option.route) }"
      :to="option.route"
      :key="option.route"
    >
      <div
        v-if="activeTab(option.route)"
        class="side-bar__indicator"
      />
      <img
        :src="getIcon(activeTab(option.route) ? `${option.label}-active` : option.label)"
        alt=""
      />
      {{option.label}}
    </router-link>
  </div>
</template>

<script type="javascript" src="./index.js"></script>
<style scoped src="./index.css"></style>

