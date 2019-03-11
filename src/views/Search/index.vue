<template>
  <layout>
    <input
      type="text"
      v-model="searchCriteria"
      v-on:keydown.enter="search"
      class="search__input"
      placeholder="Start typing..."
    />

    <div
      v-show="!searched"
      class="search__title"
    >
      Type and hit enter to search!
    </div>

    <div v-show="hasAlbums">
      <div class="search__title">Albums</div>
      <div class="search__res-container">
        <item-card
          v-for="album in searchResults.albums"
          :key="album.id"
          :image="album.images && album.images[0]"
          :name="album.name"
          :artist="album.artists && album.artists[0] && album.artists[0].name"
        />
      </div>
    </div>

    <div v-show="hasPlaylists">
      <div class="search__title">Playlists</div>
      <div class="search__res-container">
        <item-card
          v-for="playlist in searchResults.playlists"
          :key="playlist.id"
          :image="playlist.images && playlist.images[0]"
          :name="playlist.name"
          :artist="playlist.artists && playlist.artists[0] && playlist.artists[0].name"
        />
      </div>
    </div>

    <div
      v-show="searched && !hasAlbums && !hasPlaylists"
      class="search__title"
    >
      It looks like there are no results :(
    </div>
  </layout>
</template>

<script type="javascript" src="./index.js"></script>
<style scoped src="./index.css"></style>
