// console.log('%c HI', 'color: firebrick')


function renderDog(dogPic) {
    let card = document.createElement('p')
    card.className = 'dogPics'
    card.innerHTML = `<img src='${dogPic}'>`
    document.querySelector('#dog-image-container').appendChild(card);
}
// Fetch Requests
// gets dogs resources
window.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(dogData => dogData.message.forEach(dogPic => renderDog(dogPic))) 
})
