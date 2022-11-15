<script>
import { auth } from '/auth.js'
export default {
    data() {
        return {
            auth,

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

            this.auth.user.name = this.changeName;
            this.auth.user.surname = this.changeSurname;
            this.auth.user.code = this.changeCode;
        }
    }
}
</script>

<template>
    <div id="about-view">
        <div class="wrapper-header">
            <h1>ABOUT ME</h1>
            <div class="settings">
                <div v-if="aboutGroup"><button id="btn-show-favorites" @click="setEditStuff()" v-bind:class="{}">Edit Form</button></div>
                <div v-if="editGroup"><button id="btn-show-favorites" @click="setCancelStuff()" v-bind:class="{active: editGroup}">Cancel</button></div>
                <div v-if="editGroup"><button id="btn-save" @click="saveButtonStuff()" v-bind:class="{
                }">Save Form</button></div>
            </div>
        </div>
        <form>
            <div class="wrapper-input">
                <label>NAME</label>
                <div v-if="editGroup"><input v-model="changeName" id="input-name" /></div>
                <div v-if="aboutGroup"><p id="txt-name">{{auth.user.name}}</p></div>
            </div>
            <div class="wrapper-input">
                <label>SURNAME</label>
                <div v-if="editGroup"><input v-model="changeSurname" id="input-surname" /></div>
                <div v-if="aboutGroup"><p id="txt-surname">{{auth.user.surname}}</p></div>
            </div>
            <div class="wrapper-input">
                <label>STUDENT CODE</label>
                <div v-if="editGroup"><input v-model="changeCode" id="input-code" /></div>
                <div v-if="aboutGroup"><p id="txt-code">{{auth.user.code}}</p></div>
            </div>
            <div class="wrapper-songs">
                <label>FAVORITE SONGS</label>
                <ul>
                    <li>
                        <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                        <div class="song-info">
                            <p id="txt-song" class="song-name">DEEP (feat. Nonô)</p>
                            <p id="txt-artist" class="song-artists">Example</p>
                        </div>
                    </li>
                </ul>
                <div id="txt-empty" class="empty">NO SONGS FOUND</div>
            </div>
        </form>
    </div>
</template>