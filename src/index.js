// console.log('%c HI', 'color: firebrick')


// function renderDog(dogPic) {
//     let card = document.createElement('p')
//     card.className = 'dogPics'
//     card.innerHTML = `<img src='${dogPic}'>`
//     document.querySelector('#dog-image-container').appendChild(card);
// }
// // Fetch Requests

// //gets dogs photos
// window.addEventListener('DOMContentLoaded', () => {
//     fetch('https://dog.ceo/api/breeds/image/random/4')
//     .then(res => res.json())
//     .then(dogData => dogData.message.forEach(dogPic => renderDog(dogPic))) 
// })

//gets dogs list
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
    // same with handleDropdown
    changeColor();
    handleDropdown();
}
// changes color of any breed after it is clicked. invoked after dom loads and after 
// the rows generate, if invoked it elsewhere it runs before the rows actually exist
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


// adds event listener to dropdown, triggering whenever it changes
// every time, resets style.display for each li element and hides it if it 
// doesn't start with the proper letter
function handleDropdown() {
    document.getElementById('breed-dropdown').addEventListener('change', (e) => {
        let listItems = document.getElementsByClassName('dogListItem')
        if (e.target.value === 'blank') {
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].style.display = '';
                }
        } else {
            for (let i = 0; i < listItems.length; i++) {
                //console.log(listItems[i])
                listItems[i].style.display = ''
                if (listItems[i].textContent[0] !== e.target.value) {
                    listItems[i].style.display = 'none'
                }
            }
        }
    })
}