const main = document.querySelector('main')
const darkModeToggle = document.querySelector('.darkMode')
const darkModeCircle = document.querySelector('.dark-mode-circle')
const header = document.querySelector('header')
const details = document.querySelector('.details')
const inputs = document.querySelectorAll('input')

function darkMode() {
  main.classList.toggle('dark')
  darkModeCircle.classList.toggle('circle-right')
  darkModeToggle.classList.toggle('dark-mode-on')
  header.classList.toggle('headerDarkMode')
  details.classList.toggle('detailsDarkMode')
  for (let input in inputs) {
      input.classList.toggle('inputDarkMode')
  }
}