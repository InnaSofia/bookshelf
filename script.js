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

    





// Находим все элементы
const modalWindow = document.querySelector('#modalWindow');//находим модальное окно
const addBookBtn = document.querySelector('#addBookBtn');//кнопка 'добавить книгу'
const saveBookBtn = document.querySelector('#saveBookBtn');//кнопка 'сохранить книгу'
const closeModalBtn = document.querySelector('#closeModalBtn');//кнопка 'закрыть модальное окно'



addBookBtn.addEventListener('click',openModal )
closeModalBtn.addEventListener('click', closeModal)

function openModal(){
  modalWindow.style.display = "flex"

}
function closeModal(){
  modalWindow.style.display = "none"
}

function renderBooks(){
  const container = document.getElementById("container")
  closeModal
  container.innerHTML = ''//когда в контейнере пусто
    books.forEach ((book) => {//проходимся по каждому элементу массива и доб книгу
      container.innerHTML += `
<div class="list">
<div class="books">
<div class="image"><img class="img-books" src="${book.image}"></div>
<div class="title">${book.title}</div>
<div class="year">${book.year}</div>
<div class="authors">${book.authors}</div>
<button id="deleteBook-${book.id}" class="button-book">Удалить</button>
</div></div>
`})


books.forEach((book) => {

  let deleteBookBtn = document.getElementById(`deleteBook-${books.id}`)
  deleteBookBtn.addEventListener('click',() =>  deleteBook(book.id))


})
}

function deleteBook(id){
  //шаг 1 найти книгу
  const bookDelete = books.find((b) => {
    return b.id === id
  })
  //индекс в массиве
  const booksIndex = books.indexOf(bookDelete)
  
  //удалить
  books.splice(booksIndex,1)
  //шаг4
  renderBooks()
  }

/*
//открытия модального окна
function openbooks() {
  books.style.display = 'block';
}

//закрытия модального окна
function closebooks() {
  buttonBook.style.display = 'none';
}*/



/*let isOpen = true

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

  }*/

  