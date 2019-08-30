import SpotifyService from '@/services/SpotifyService'

const state = {
  loading: false,
  searchResults: {
    albums: [],
    playlists: [],
  },
}

const getters = {
  error: state => state.error,
  loading: state => state.loading,
  searchResults: state => state.searchResults,
}

const mutations = {
  SET_ERROR: (state, error) => {
    state.error = error
    state.loading = false
  },
  SET_LOADING: (state, value) => {
    state.loading = value
  },
  SET_SEARCH_RESULTS: (state, { albums, playlists }) => {
    state.searchResults = {
      albums,
      playlists,
    }
    state.loading = false
  },
}

const actions = {
  searchBy: async ({ commit }, { q, callback }) => {
    commit("SET_LOADING", true)
    try {
      if (q) {
        const { data: { albums, playlists } } = await SpotifyService.searchBy(q)
        commit("SET_SEARCH_RESULTS", { albums: albums.items, playlists: playlists.items })
      } else {
        commit("SET_SEARCH_RESULTS", { albums: [], playlists: [] })
      }
    } catch (error) {
      commit("SET_ERROR", 'We had a problem searching :(')
    } finally {
      if (callback) {
        callback()
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
