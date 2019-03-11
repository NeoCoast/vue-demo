import { mapGetters, mapActions } from 'vuex'
import Layout from '@/components/Layout/index.vue'
import ItemCard from '@/components/ItemCard/index.vue'

export default {
    name: 'search',
    components: {
        ItemCard,
        Layout,
    },
    data() {
        return {
            searched: false,
            searchCriteria: '',
        }
    },
    computed: {
        ...mapGetters('search', [
            'loading',
            'searchResults',
        ]),
        hasAlbums() {
            return this.searchResults.albums.length > 0
        },
        hasPlaylists() {
            return this.searchResults.playlists.length > 0
        }
    },
    methods: {
        ...mapActions('search', [
            'searchBy',
        ]),
        search() {
            this.searchBy({
                q: this.searchCriteria,
                callback: () => {
                    if (this.searchCriteria) {
                        this.searched = true
                    } else {
                        this.searched = false
                    }
                }
            })
        },
    }
}
