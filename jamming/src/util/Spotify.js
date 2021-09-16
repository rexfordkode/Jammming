

const clientId = 'b1da8ab521f7413c9c46c38a163dffbd';
const redirectUri = 'http://localhos:3000';
let accessToken;

const Spotify = {

    getAccessToken (){
        if(accessToken){
            return accessToken;
        }
        //Check for an access Token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        
        if(accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            //This clear the parameters, allowing us to clear a new access token when it expires
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessTokenMatch;
        }else{
            const accessUrl =`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=
                token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
                window.location = accessUrl;
        }

    }
}

export default Spotify;

