<script>
import { auth } from '/auth.js'
export default {
    data() {
        return {
            auth,
            inputName: false,
            inputSurname: false,
            inputCode: false,
            saveButton: false,

            currentName: true,
            currentSurname: true,
            currentCode: true,
            editButton: true,

            changeName: "",
            changeSurname: "",
            changeCode: ""
        }
    },
    methods: {
        //vismaz strādā :D
        setEditStuff() {
            if (this.inputName == false && this.inputSurname == false && this.inputCode == false) {
                this.inputName = true;
                this.inputSurname = true;
                this.inputCode = true;
                this.saveButton = true;

                this.editButton = false;
                this.currentName = false;
                this.currentSurname = false;
                this.currentCode = false;
            }
        },
        saveButtonStuff() {
            this.inputName = false;
            this.inputSurname = false;
            this.inputCode = false;
            this.saveButton = false;

            this.currentName = true;
            this.currentSurname = true;
            this.currentCode = true;
            this.editButton = true;

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
                <div v-if="editButton"><button id="btn-show-favorites" @click="setEditStuff()" v-bind:class="{
                }">Edit Form</button></div>
                <div v-if="saveButton"><button id="btn-save" @click="saveButtonStuff()" v-bind:class="{
                }">Save Form</button></div>
            </div>
        </div>
        <form>
            <div class="wrapper-input">
                <label>NAME</label>
                <div v-if="inputName"><input v-model="changeName" id="input-name" /></div>
                <div v-if="currentName"><p id="txt-name">{{auth.user.name}}</p></div>
            </div>
            <div class="wrapper-input">
                <label>SURNAME</label>
                <div v-if="inputSurname"><input v-model="changeSurname" id="input-surname" /></div>
                <div v-if="currentSurname"><p id="txt-surname">{{auth.user.surname}}</p></div>
            </div>
            <div class="wrapper-input">
                <label>STUDENT CODE</label>
                <div v-if="inputCode"><input v-model="changeCode" id="input-code" /></div>
                <div v-if="currentCode"><p id="txt-code">{{auth.user.code}}</p></div>
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
