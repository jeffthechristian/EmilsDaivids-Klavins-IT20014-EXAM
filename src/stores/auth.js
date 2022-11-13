import { reactive } from 'vue'

export const auth = reactive({
    name : Emils,
    surname : Klavins,
    code : IT20014,
    favorite_songs : [],

    user : {},
    is_authenticated: localStorage.is_authenticated ?? false,

    setUserData(name, surname, code) {
        this.name = name;
        this.surname = surname;
        this.code = code;
    },
    
    authenticate(email, password) {
        if (email == "emilsdaivids.klavins@va.lv" && password == "12345678" && password>6) {
           localStorage.is_authenticated ?? true;
           router.push('/')
        }
    },
    
    logout() {
        localStorage.clear();
        localStorage.is_authenticated ?? false;
        router.push('/login')
    },
    
    toggleFavorite(songID) {
    },
    
    getFavoriteSongs() {
    }
})