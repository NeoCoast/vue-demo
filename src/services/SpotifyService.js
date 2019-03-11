import axios from 'axios'

const authToken = ""

const spotifyClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`
  },
})

export default {
  getFeatured() {
    return spotifyClient.get('/browse/featured-playlists')
  },
  getNewReleases() {
    return spotifyClient.get('/browse/new-releases')
  },
  searchBy(q) {
    return spotifyClient.get(`/search?q=${encodeURI(q)}&type=album,playlist`)
  }
}
