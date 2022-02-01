const form = document.querySelector('#form')
const username = document.querySelector('.form-control #username')
const email = document.querySelector('.form-control #email')
const password1 = document.querySelector('.form-control #password')
const password2 = document.querySelector('.form-control #confirm-password')

let isRequired = false

const showSuccess = (input) => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

const showError = (input, message) => {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  formControl.querySelector('small').innerText = message
}

const checkRequired = (inputArr) => {
  inputArr.forEach(input => {
    if(input.value.trim() === '') {
      showError(input, `${input.id.toUpperCase()} is required`)
      isRequired = true
    } else {
      showSuccess(input)
    }
  })
  return isRequired
}

const checkLength = (input, min, max) => {
  if(input.value.length < min) {
    showError(input, `${input.id.toUpperCase()} should be atleast ${min} characters`)
  } else if(input.value.length > max) {
    showError(input, `${input.id.toUpperCase()} should be less than ${max} characters`)
  } else {
    showSuccess(input)
  }
}

const checkPassword = (password1, password2) => {
  if(password1.value !== password2.value) {
    showError(password2, `Passwords donot match`)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if(checkRequired([username, email, password1, password2])) {
    checkLength(username, 6, 20)
    checkLength(password1, 8, 15)
    checkPassword(password1, password2)
  }
})
