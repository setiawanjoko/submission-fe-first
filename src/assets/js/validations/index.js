import { customValidationBodyHandler } from "./bodyValidation.js"
import { blurValidationHandler } from "./realtimeValidate.js"
import { customValidationTitleHandler } from "./titleValidation.js"

const form = document.querySelector('form')
const titleInput = form.elements.notetitle
const bodyInput = form.elements.notebody

form.addEventListener('submit', e => {
    e.preventDefault()
    const title = titleInput.value
    const body = bodyInput.value
    console.log({title, body})
})
titleInput.addEventListener('change', customValidationTitleHandler)
titleInput.addEventListener('invalid', customValidationTitleHandler)
titleInput.addEventListener('blur', blurValidationHandler)
bodyInput.addEventListener('change', customValidationBodyHandler)
bodyInput.addEventListener('invalid', customValidationBodyHandler)
bodyInput.addEventListener('blur', blurValidationHandler)