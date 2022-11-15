<script>
import { auth } from '/auth.js'
export default {
    data() {
        return {
            auth
        }
    },
}
</script>

<template>
    <div id="about-view">
        <div class="wrapper-header">
            <h1>ABOUT ME</h1>
            <div class="settings">
                <button id="btn-edit">Edit Form</button>
                <button id="btn-save">Save Form</button>
            </div>
        </div>
        <form>
            <div class="wrapper-input">
                <label>NAME</label>
                <input id="input-name" />
                <p id="txt-name">{{auth.user.name}}</p>
            </div>
            <div class="wrapper-input">
                <label>SURNAME</label>
                <input id="input-surname" />
                <p id="txt-surname">{{auth.user.surname}}</p>
            </div>
            <div class="wrapper-input">
                <label>STUDENT CODE</label>
                <input id="input-code" />
                <p id="txt-code">{{auth.user.code}}</p>
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
