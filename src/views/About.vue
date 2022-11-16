<script>
import { auth } from '/auth.js'
import songList from '../data/songs'

export default {
    data() {
        return {
            auth,

            songs: songList,
            isFavListEmpty: true,
            
            editGroup: false,
            aboutGroup: true,

            changeName: auth.user.name,
            changeSurname: auth.user.surname,
            changeCode: auth.user.code
        }
    },
    methods: {
        //Dienas beigās strādā, tākā viss ok :D
        setEditStuff() {
            this.editGroup = true;
            this.aboutGroup = false;
        },
        setCancelStuff() {
            this.editGroup = false;
            this.aboutGroup = true;
        },
        saveButtonStuff() {
            this.editGroup = false;
            this.aboutGroup = true;

            this.auth.setUserData(this.changeName, this.changeSurname, this.changeCode);
        },
        getArtists(artists) {
            let x = '';
            let length = Object.keys(artists).length;
            artists.forEach((ar, index) => {
                if (index != length - 1) {
                    x = x + ar.name + ", ";
                } else {
                    x = x + ar.name;
                }
            });
            return x;
        },
    },
  
    computed: {
        favoriteSongs() {
            let favoriteSongs = [];
            let x = auth.getFavoriteSongs();
            x.forEach((songID) => {
                this.songs.forEach((song) => {
                    if (song.id == songID) {
                        favoriteSongs.push(song);
                    }
                });
            });
            return favoriteSongs;
        }
    }
}
</script>

<template>
    <div id="about-view">
        <div class="wrapper-header">
            <h1>ABOUT ME</h1>
            <div class="settings">
                <div v-if="aboutGroup"><button id="btn-show-favorites" @click="setEditStuff()">Edit Form</button></div>
                <div v-if="editGroup"><button id="btn-show-favorites" @click="setCancelStuff()" :class="{active: editGroup}">Cancel</button></div>
                <div v-if="editGroup"><button id="btn-save" @click="saveButtonStuff()">Save Form</button></div>
            </div>
        </div>
        <form>
            <div class="wrapper-input">
                <label>NAME</label>
                <div v-if="editGroup"><input v-model="changeName" id="input-name" /></div>
                <div v-if="aboutGroup"><p id="txt-name">{{ auth.user.name }}</p></div>
            </div>
            <div class="wrapper-input">
                <label>SURNAME</label>
                <div v-if="editGroup"><input v-model="changeSurname" id="input-surname" /></div>
                <div v-if="aboutGroup"><p id="txt-surname">{{ auth.user.surname }}</p></div>
            </div>
            <div class="wrapper-input">
                <label>STUDENT CODE</label>
                <div v-if="editGroup"><input v-model="changeCode" id="input-code" /></div>
                <div v-if="aboutGroup"><p id="txt-code">{{ auth.user.code }}</p></div>
            </div>
            <div class="wrapper-songs">
                <label>FAVORITE SONGS</label>
                <ul v-if="auth.getFavoriteSongs().length">
                    <li v-for="song in favoriteSongs">
                        <img id="img-album" :src="song.album.images[1].url" />
                        <div class="song-info">
                            <p id="txt-song" class="song-name">{{ song.name }}</p>
                            <p id="txt-artist" class="song-artists">{{ getArtists(song.artists) }}</p>
                        </div>
                    </li>
                </ul>
                <div id="txt-empty" class="empty">NO SONGS FOUND</div>
            </div>
        </form>
    </div>
  </template>