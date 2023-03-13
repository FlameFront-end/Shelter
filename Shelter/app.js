let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')

const  showModal = () => {
    modal.classList.add('active')
    overlay.classList.add('active')
}
const closeModal = () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

