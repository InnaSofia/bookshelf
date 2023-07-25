let bookCounter = 1

let currentBookId
const books = [
    {
      id: bookCounter++,
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
      year: '1994',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
      id: bookCounter++,
      title: 'JavaScript: The Good Parts',
      authors: 'Douglas Crockford',
      year: '2008',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
      id: bookCounter++,
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      id: bookCounter++,
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]

    





// Находим все элементы
const modalWindow = document.getElementById('modalWindow');//находим модальное окно
const addBookBtn = document.getElementById('addBookBtn');//кнопка 'добавить книгу'
const saveBookBtn = document.getElementById('saveBookBtn');//кнопка 'сохранить книгу'
const closeModalBtn = document.getElementById('closeModalBtn');//кнопка 'закрыть модальное окно'
const editBookBtn = document.getElementById('editBookBtn');//кнопка 'редактировать книгу'




addBookBtn.addEventListener('click', openModal )//открывается модальное окно
closeModalBtn.addEventListener('click', closeModal)//закрывается модальное окно
saveBookBtn.addEventListener('click',addBooks)//сохраняет книгу


//
const modalChange = document.getElementById('modalChange');//находим окно редактировать книгу
const editBook = document.getElementById('editBook');//кнопка 'редактировать книгу'(открывает окно редактировать)
const closeChange = document.getElementById('closeChange');//кнопка 'закрыть модальное окно,изменить книгу'







const book = document.getElementById('book')
const bookTitleInput = document.getElementById(".bookTitle input");//заголовок
const bookAuthorsInput = document.getElementById(".bookAuthors input");//автор
const bookYearInput = document.getElementById(".bookYear input");//год
const bookImageInput = document.getElementById(".bookImage input");//картинка


function changeBook(){
  const bookTitle = bookTitleInput.value;
  const bookAuthors = bookAuthorsInput.value;
  const bookYear = bookYearInput.value;
  const bookImage = bookImageInput.value;//все значения внутри input

  document.getElementById(".bookTitle") = title;// обновляем информацию о книге
  bodocument.getElementById(".bookAuthors") = authors;
  document.getElementById(".bookYear") = year;
  document.getElementById(".bookImage") = image;
}
//bookTitleInput.addEventListener("change", updateBook);// добавляем обработчик события
//bookAuthors.addEventListener("change",updateBook);
//bookYear.addEventListener("change", updateBook);
//bookImage.addEventListener("change", updateBook);


const update = document.getElementById('changeBook');//кнопка обновить книгу
update.addEventListener("click", () => {
  MakeUpdateBook(id)
})

//функция обновления книги
function MakeUpdateBook(id){


const updateTitle = document.getElementById('bookTitleUpdate').value
const updateAuthors = document.getElementById('bookAuthorsUpdate').value
const updateYear = document.getElementById('bookYearUpdate').value
const updateImage = document.getElementById('bookImageUpdate').value
//создаем книгу с обновленными данными
const updateBook = {
  id: id,
  title:updateTitle,
  authors: updateAuthors,
  year: updateYear,
  image: updateImage
}

const book = book.find((b) => {//находим книгу по id
  return b.id === id
})

const booksIndex = books.indexOf(book)//индекс книги

books.splice(booksIndex, 1, updateBook)//удаляем книгу из массива
renderBooks()
saveBooksToLocalStorage()
closeWindow()

}

closeChange.addEventListener('click',closeWindow )//закрывает окно изменить




//открыть модально окно новое для изменений данных
function openUpdateModal(id){
  currentBookId = id

  modalChange.style.display = "flex"
  const book = books.find(book => {
    return book.id === id
  })

  document.getElementById("bookTitleUpdate").value = book.title;// обновляем информацию о книге
  document.getElementById("bookAuthorsUpdate").value = book.authors;
  document.getElementById("bookYearUpdate").value = book.year;
  document.getElementById("bookImageUpdate").value = book.image;
}


//закрывает модальное окно измененное
function closeWindow(){
  modalChange.style.display = "none"
}


//получаем значения из полей ввода данных модального окна
function addBooks() {
  const bookImageValue = document.getElementById('bookImage').value
  const bookTitleValue = document.getElementById('bookTitle').value
  const bookAuthorsValue = document.getElementById('bookAuthors').value
  const bookYearValue = document.getElementById('bookYear').value

  //если введены не все данные
  if(bookImageValue === '' || bookTitleValue === '' || bookAuthorsValue === '' || bookYearValue === ''){
    document.getElementById('error').style.display = 'flex'
    return
  }
  const book = {
    id:bookCounter++,
    image: bookImageValue,
    title: bookTitleValue,
    authors: bookAuthorsValue,
    year: bookYearValue
  }
  
  books.push(book)
  renderBooks()
  clearForm()
  closeModal()
  saveBooksToLocalStorage()
}
//очистить форму после ввода
function clearForm(){
  document.getElementById('bookImage').value = ''
  document.getElementById('bookTitle').value =''
  document.getElementById('bookAuthors').value =''
  document.getElementById('bookYear').value =''
}

function saveBooksToLocalStorage(){
  const booksJson = JSON.stringify(books)
  localStorage.setItem('books', booksJson)
}

function openModal(){
  modalWindow.style.display = "flex"
}
function closeModal(){
  modalWindow.style.display = "none"
}


const container = document.getElementById("container")
function renderBooks(){
  container.innerHTML = ''//когда в контейнере пусто
    books.forEach ((book) => {//проходимся по каждому элементу массива и доб книгу
      container.innerHTML += `
<div class="list">
<div class="books">
<div class="image"><img class="img-books" src="${book.image}"></div>
<div class="title">${book.title}</div>
<div class="year">${book.year}</div>
<div class="authors">${book.authors}</div>
<div class="button-position">
<button id="deleteBook-${book.id}" class="delete-book">Удалить</button>
<button id="updateBook-${book.id}" class="delete-book">Обновить</button>
</div>
</div></div>
`})


books.forEach((book) => {
//находим книгу для удаления по id
  let deleteBookBtn = document.getElementById(`deleteBook-${book.id}`)
  deleteBookBtn.addEventListener('click',() =>  {
    deleteBook(book.id)
  })

})

books.forEach((book) => {
  //находим книгу для изменения по id
  let updateBookBtn = document.getElementById(`updateBook-${book.id}`)
  updateBookBtn.addEventListener('click',() =>  {
    openUpdateModal(book.id)
  })

})

 saveBooksToLocalStorage()
}




//удаление книги
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
 saveBooksToLocalStorage()

  }

  renderBooks()