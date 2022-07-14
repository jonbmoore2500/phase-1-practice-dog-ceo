// console.log('%c HI', 'color: firebrick')


function renderDog(dogPic) {
    let card = document.createElement('p')
    card.className = 'dogPics'
    card.innerHTML = `<img src='${dogPic}'>`
    document.querySelector('#dog-image-container').appendChild(card);
}
// Fetch Requests
// gets dogs resources
// window.addEventListener('DOMContentLoaded', () => {
//     fetch('https://dog.ceo/api/breeds/image/random/4')
//     .then(res => res.json())
//     .then(dogData => dogData.message.forEach(dogPic => renderDog(dogPic))) 
// })

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(dogData2 => handleListing(dogData2.message))
})
function handleListing(dogsObj) {
    //console.log(dogsObj)
    for (let dog in dogsObj) {
        //console.log(dogsObj[dog])
        if (typeof dogsObj[dog][0] == 'string') {
            // iterates through elements that have subBreeds (at least one)
            let breedsList = dogsObj[dog];
            for (let subBreed in breedsList) {
                //console.log(breedsList[subBreed])
                let dogEntry = document.createElement('li')
                dogEntry.className = 'dogListItem'
                dogEntry.textContent = `${breedsList[subBreed]} ${dog}`
                document.getElementById('dog-breeds').appendChild(dogEntry)
            }
        } else {    
        let dogEntry = document.createElement('li')
        dogEntry.className = 'dogListItem'
        dogEntry.textContent = dog
        document.getElementById('dog-breeds').appendChild(dogEntry)
        }
    }
    //console.log(dogsObj.australian)
    // adds changeColor functionality after creating the li elements
    changeColor();
}
// changes color of any breed after it is clicked. invoked after dom loads and after 
// the rows generate, if I invoke it elsewhere it runs before the rows actually exist
function changeColor() {
    let dogsList = document.getElementsByClassName('dogListItem');
    // console.log(dogsList)
    // console.log(dogsList[0])
    for (let i = 0; i < dogsList.length; i++) {
        let dogEntry = dogsList[i]
        dogEntry.addEventListener('click', () => {
            dogEntry.style.color = 'firebrick';
        })
    }
}
