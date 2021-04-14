'use sctrict'

const vanBurger = document.querySelector('#nav-burger')

const nav = document.querySelector('#nav')
let isOpen = true
console.log(vanBurger, nav)
vanBurger.addEventListener('click', toggleNav)

function toggleNav () {
  if (isOpen) {
    nav.classList.add('is-open')
    nav.classList.remove('is-close')

  } else {
    nav.classList.remove('is-open')
    nav.classList.add('is-close')

  }
  console.log(nav.classList)
  isOpen = !isOpen
}
