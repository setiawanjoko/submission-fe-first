import data from "./dummy/data.js"
import './components/index.js'
import './validations/index.js'
import { LOCAL_STORAGE_KEY } from "./common.js"

if(typeof Storage !== 'undefined') {
    if(localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
    }
} else {
    alert('Browser yang Anda gunakan tidak mendukung Web Storage')
}