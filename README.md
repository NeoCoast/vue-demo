# Vue demo: spotify clone

## Project setup
```
yarn install
```

In order to correclty fetch data from Spotify's API, you need to get an `access-token`. To get this token, you'll need to do the following:

1. Install Postman
2. In Postman go to the `Authorizaton` tab
3. Set `Type` to `OAuth 2.0`
4. Press the `Get New Access Token` button, this will open a popup
5. In this popup set the following:

    | Field | Value |
    |-------|-------|
    | Token name | `postman-spotify` |
    | Callback URL | `https://www.getpostman.com/oauth2/callback` |
    | Auth URL | `https://accounts.spotify.com/authorize` |
    | Access Token URL | `https://accounts.spotify.com/api/token` |
    | Client ID | ******** |
    | Client Secret | ******** |
    | Scope | `playlist-read-private playlist-modify-private` |

    To get the `Client ID` and `Client Secret` follow [this Spotify Developers guide](https://developer.spotify.com/documentation/general/guides/app-settings/)

6. Press the `Request Token` button
7. Log in with your spotify account
8. Copy the `access-token` on the response popup.
9. Paste this token in: `/src/services/SpotifyServices.js` on the `authToken` variable

(You will need to follow this each time the `access-token` expires)

### Compiles and hot-reloads for development
```
yarn run serve
```

### Presentation slides at https://slides.com/tinteff/vue-101
