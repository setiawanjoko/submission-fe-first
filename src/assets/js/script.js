import { LS_SCOPE, LS_SORT } from "./common.js"
import './components/index.js'
import './validations/index.js'

if(typeof Storage !== 'undefined') {
    if(localStorage.getItem(LS_SCOPE) === null) {
        localStorage.setItem(LS_SCOPE, 0)
    }
    if(localStorage.getItem(LS_SORT) === null) {
        localStorage.setItem(LS_SORT, 'asc')
    }
} else {
    alert('Browser yang Anda gunakan tidak mendukung Web Storage')
}
