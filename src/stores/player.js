import { reactive } from 'vue'

export const player = reactive({
    playlist   : [],
    now_playing: {}, // SONG OBJECT
    setPlaylist(songs) {
        this.playlist.push(songs);
    },
    setNowPlaying(song) {
        this.song = song; //varbut nav pareizi
    },
    getNowPlayingSongId() {
        return this.now_playing?.id;
    },
    getNowPlaying() {
        return this.now_playing; //varbūt nav pareizi
    },
    getNowPlayingAlbumID() {
        return this.now_playing?.album?.id ?? null;
    },
    getNowPlayingSongName() {
        return this.now_playing?.name ?? '';
    },
    getNowPlayingSongImage() {
        return this.now_playing?.album?.images[1].url ?? '';
    },
    getNowPlayingArtists() {
        return this.now_playing?.artists?.map(artist => artist.name).join(', ');
    },
    getNowPlayingSongPreview() {
        return this.now_playing?.preview_url;
    },
    getNextSong(){ //noteikti, ka nav pareizi :D
        const index = 0;
        for (let i = 0; i<=this.playlist.length; i++) {
            for (let j = 0; j<=this.now_playing.length; j++) {
                if (this.playlist.id[i] == this.now_playing.id[j]) {
                    return index = this.playlist.id[i + 1];
                } else {
                    return false;
                }
            }
        }
    },
    getPreviousSong() {
        const index = 0;
        for (let i = 0; i<=this.playlist.length; i++) {
            for (let j = 0; j<=this.now_playing.length; j++) {
                if (this.playlist.id[i] == this.now_playing.id[j]) {
                    return index = this.playlist.id[i - 1];
                } else {
                    return false;
                }
            }
        }
    },
    resetNowPlaying() {
        this.now_playing = {};
    }
})