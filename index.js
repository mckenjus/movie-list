const addButton = document.querySelector('#add-btn')

document.querySelector('message')

let addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('#userinput')
    let movie = document.createElement('li')
    let movieTitle =  document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = `X`
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    movieTitle.addEventListener('click', crossOffMovie)
    document.querySelector('span')
    document.querySelector('ul').appendChild(movie)
    inputField.value = ""
    
    
}
document.querySelector('form').addEventListener('submit', addMovie)

let deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted'
}
let crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    
    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'movie watched!'
    } else{
        message.textContent = 'movie added back'
    }
}