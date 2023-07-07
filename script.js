const books = [
    {
      id:1,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      id:2,
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      id:3,
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      id:4,
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]

    const container = document.getElementById("container")
    books.forEach ((books) => {
      container.innerHTML += `
<div class="list">
<div class="books">
<div class="image"><img class="img-books" src="${books.image}"></div>
<div class="title">${books.title}</div>
<div class="year">${books.year}</div>
<div class="authors">${books.authors}</div>
<button onclick="deleteBook($(books.id))" class="button-book">Удалить</button>
</div></div>
`})


function deleteBooks(id){
//шаг 1 найти книгу
const books = books.find((b) => {
  return b.id === id
})
//индекс в массиве
const booksIndex = books.indexOf(books)

//удалить
books.splice(booksIndex,1)
//шаг4
renderBooks
}


// Находим все элементы
const openbooks = document.querySelector('myopenbooks');
const openbooks = document.querySelector('openbooks');
const openlist = document.querySelector('openlist');
const close = document.querySelector('close');


//открытия модального окна
function openbooks() {
  books.style.display = 'block';
}

//закрытия модального окна
function closebooks() {
  books.style.display = 'none';
}



let isOpen = true

function openbooks(){
    const myopenbooks = document.getElementById("myopenbooks")

    if(isOpen){


      myopenbooks.style.display = "none"
        isOpen = false //важно указать
//нужно закрыть
    }else{

      myopenbooks.style.display = "flex" 
        isOpen = true //важно указать 
// нужно открыть
    }

  }

  