const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const showOverlay = () => {
    overlay.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = '1'
    }, 1)
}

const closeOverlay = () => {
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none'
    }, 1000)
}

const showModal = () => {
    modal.classList.add('active')
    showOverlay()
}
const closeModal = () => {
    modal.classList.remove('active')
    closeOverlay()
}


const burgerLogo = document.querySelector('.burger-logo')
const burgerMenu = document.querySelector('.burger-menu')


burgerLogo.addEventListener('click', function (){
    burgerMenu.classList.toggle('active')
    burgerLogo.classList.toggle('active')
    overlay.classList.toggle('active')
    if (overlay.classList.contains('active')) {
        showOverlay()
    } else {
        closeOverlay()
    }
    if (burgerMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }
})

const burgerLink = document.querySelectorAll('.burger-link')

burgerLink.forEach((element) => {
    element.addEventListener('click', function (){
        burgerMenu.classList.remove('active')
        burgerLogo.classList.remove('active')
        document.body.style.overflow = 'visible'
        closeOverlay()
    })
})

// Карусель

const BTN_LEFT = document.querySelector('.left__button');
const BTN_RIGHT = document.querySelector('.right__button');
const CAROUSEL = document.querySelector('.carousel');

const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');
const ITEM_ACTIVE = document.querySelector('#item-active');


const imgArr = ['pets-jennifer.png', 'pets-charly.png', 'pets-freddie.png', 'pets-katrine.png', 'pets-scarlet.png', 'pets-sophia.png', 'pets-timmy.png', 'pets-woody.png'];
const imgNames = ['Jennifer', 'Charly', 'Freddie', 'Katrine', 'Scarlet', 'Sophia', 'Timmy', 'Woody'];


const getRamdonImg = () => {
    return (Math.round(Math.random() * (imgArr.length - 1)));
}
let randonArrActive = [];
let randomActivIndex = [];
let randonLeftRight = [];
let randonLeftRightIndex = [];


const fillingRandom = () => {
    let a = getRamdonImg()
    if(randomActivIndex.includes(a)){
        fillingRandom()
    } else {
        randomActivIndex.push(a)
    }
}

fillingRandom()
fillingRandom()
fillingRandom()

// функция создания карт для Active при загрузке страницы
const createCardTemplateActive = (i) => {
    let imgNameSrc = randomActivIndex[i - 1]

    const card1 = document.createElement('div'); // создал карту
    card1.classList.add('cards'); // добавил класс
    card1.id = "id" + i

    let a =  `${imgNames[imgNameSrc]}`
    randonArrActive.push(a)

    const imgCard1 = document.createElement('img') // добывил img
    imgCard1.src = `./img/pets/${imgArr[imgNameSrc]}`// добавил рандомную картинку
    imgCard1.classList.add('cards__img') //добавли класс картинке
    imgCard1.alt = `${imgArr[imgNameSrc]}`
    card1.appendChild(imgCard1)

    const card1DivText = document.createElement('div'); // добавил div к тексту
    card1DivText.classList.add('cards__text') // добавил класс дива текства

    const card1DivTextP = document.createElement('p') // добавли р
    card1DivTextP.innerText = imgNames[imgNameSrc] // добавил текст к р
    card1DivText.appendChild(card1DivTextP)
    card1.appendChild(card1DivText)

    const buttonCards = document.createElement('button') // добавил кнопку
    buttonCards.classList.add('cards__button') // добавил класс к кнопке
    buttonCards.addEventListener('click', showModal)
    buttonCards.innerText = 'Learn more' // добавил текст к кнопке
    card1.appendChild(buttonCards)
    return card1
}


// функция создания карт для левой и правой части слайдера

const createCardTemplate = (i) => {
    let ramdonImg = getRamdonImg()

    if(randonArrActive.includes(imgNames[ramdonImg])){
        return createCardTemplate(i)
    } else if (randonLeftRight.includes(imgNames[ramdonImg])) {
        return createCardTemplate(i)
    }
    else {
        ramdonImg = ramdonImg
    }
    const card1 = document.createElement('div'); // создал карту
    card1.classList.add('cards'); // добавил класс
    card1.id = "id" + i

    let a =  `${imgNames[ramdonImg]}`
    randonLeftRight.push(a)

    const imgCard1 = document.createElement('img') // добывил img
    imgCard1.src = `./img/pets/${imgArr[ramdonImg]}`// добавил рандомную картинку
    imgCard1.classList.add('cards__img') //добавли класс картинке
    imgCard1.alt = `${imgArr[ramdonImg]}`
    console.log(imgNames[ramdonImg])
    card1.appendChild(imgCard1)

    const card1DivText = document.createElement('div'); // добавил div к тексту
    card1DivText.classList.add('cards__text') // добавил класс дива текства

    const card1DivTextP = document.createElement('p') // добавли р
    card1DivTextP.innerText = imgNames[ramdonImg] // добавил текст к р
    card1DivText.appendChild(card1DivTextP)
    card1.appendChild(card1DivText)

    const buttonCards = document.createElement('button') // добавил кнопку
    buttonCards.classList.add('cards__button') // добавил класс к кнопке
    buttonCards.innerText = 'Learn more' // добавил текст к кнопке
    buttonCards.addEventListener('click', showModal)
    card1.appendChild(buttonCards)
    return card1

}

// Создаем рандом для item-active
const createItemActive = () => {

    if (createItemActive.isRun) {
        return false
    }
    ITEM_ACTIVE.innerHTML = ''
    for (let i = 1; i < 4; i++) {
        const card1 = createCardTemplateActive(i);
        ITEM_ACTIVE.appendChild(card1)
    }
    createItemActive.isRun = true
}



createItemActive()

// Создаем рандом для item-left


const createItemLeft = () => {

    if (createItemLeft.isRun) {
        return false
    }
    ITEM_LEFT.innerHTML = ''
    ITEM_RIGHT.innerHTML = ''
    for (let i = 1; i < 4; i++) {
        const card1 = createCardTemplate(i);
        ITEM_LEFT.appendChild(card1)
    }
    createItemLeft.isRun = true

    ITEM_RIGHT.innerHTML = ITEM_LEFT.innerHTML
}

createItemLeft()



// При нажатии на левую кнопку
const moveLeft = () => {
    CAROUSEL.classList.add('transition-left');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
    ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML
    randonArrActive = randonLeftRight
};

// При нажатии на правую кнопку
const moveRight = () => {
    CAROUSEL.classList.add('transition-right');
    BTN_RIGHT.removeEventListener('click', moveRight);
    BTN_LEFT.removeEventListener('click', moveLeft);
    ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML
    randonArrActive = randonLeftRight
};

BTN_RIGHT.addEventListener('click', moveRight);
BTN_LEFT.addEventListener('click', moveLeft);
const card1 = createCardTemplate();

CAROUSEL.addEventListener('animationend', (animationEvent) => {
    randonLeftRight = []


    if(animationEvent.animationName === 'move-left') {
        CAROUSEL.classList.remove('transition-left');
        const leftItems = ITEM_LEFT.innerHTML;

        // Перезаписываем левый блок

        ITEM_ACTIVE.innerHTML = leftItems;
        ITEM_LEFT.innerHTML = ''
        for (let i = 1; i < 4; i++) {
            const card1 = createCardTemplate(i);
            ITEM_LEFT.appendChild(card1)
        }

    } else {
        CAROUSEL.classList.remove('transition-right');
        const rightItems = ITEM_RIGHT.innerHTML;
        document.querySelector('#item-active').innerHTML = rightItems;

        // Перезаписываем правый блок
        ITEM_RIGHT.innerHTML = '';
        for (let i = 1; i < 4; i++) {
            const card1 = createCardTemplate(i);
            ITEM_RIGHT.appendChild(card1)
        }
    }

    // Возвращаем кнопкам функцию прослушивания клика
    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
})



