import SpotifyService from '@/services/SpotifyService'

const state = {
    error: '',
    loading: false,
    items: [],
}

const getters = {
    error: state => state.error,
    loading: state => state.loading,
    items: state => state.items,
}

const mutations = {
    SET_ERROR: (state, error) => {
        state.error = error
        state.loading = false
    },
    SET_LOADING: (state, value) => {
        state.loading = value
    },
    SET_ITEMS: (state, items) => {
        state.items = items
        state.loading = false
    },
}

const actions = {
    getFeatured: async ({ commit }) => {
        commit("SET_LOADING", true)
        try {
            const { data: { playlists } } = await SpotifyService.getFeatured()
            commit("SET_ITEMS", playlists.items)
        } catch (error) {
            commit("SET_ERROR", 'We had a problem fetching the featured playlists :(')
        }
    },
    getNewReleases: async ({ commit }) => {
        commit("SET_LOADING", true)
        try {
            const { data: { albums } } = await SpotifyService.getNewReleases()
            commit("SET_ITEMS", albums.items)
        } catch (error) {
            commit("SET_ERROR", 'We had a problem fetching the new releases :(')
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
