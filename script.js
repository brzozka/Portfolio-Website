// window.onscroll = function () {
//   myFunction()
// }
// var navbar = document.getElementById('topnav')
// var sticky = navbar.offsetTop
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add('sticky')
//   } else {
//     navbar.classList.remove('sticky')
//   }
// }
const header = document.querySelector('.navbar')

window.onscroll = function () {
  var top = window.scrollY
  if (top >= 100) {
    header.classList.add('navbarDark')
  } else {
    header.classList.remove('navbarDark')
  }
}

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
  l.addEventListener('click', () => {
    new bootstrap.Collapse(menuToggle).toggle()
  })
})
