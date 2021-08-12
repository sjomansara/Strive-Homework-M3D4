let books = []
const row = document.querySelector(".row")

window.onload = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(books => {
        displayBooks(books)
    })
    .catch(err => {
        console.log(err)
    })
}

console.log("Display books...")

function displayBooks(books) {
    console.log(books)
    const row = document.querySelector(".row")
    row.innerHTML = books.map(book => `
        <div class="col-12 col-sm-6 col-md-3" id="${book.title}">
            <div class="card mb-3" id="${book.asin}">
                <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <button type="button" class="btn btn-danger rounded btn-sm m-2" onclick="hideBook(${book.title})">Skip</button>
                    <button type="button" class="btn btn-primary rounded m-2 btn-sm" onclick="changeStyle(${book.asin})">Add to cart</button>
            </div>
        </div>
                `
    ).join("")
}

function hideBook(id) {
    let card = document.getElementById(id)
    card.remove()
}

function changeStyle(title) {
    document.getElementById(title).style.backgroundColor = "rgb(0,0,0)"
}