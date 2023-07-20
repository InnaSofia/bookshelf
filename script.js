let bookCounter = 1
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



const bookTitleInput = document.getElementById("bookTitle").value = book.title;//заголовок
const bookAuthorsInput = document.getElementById("bookAuthors").value = book.authors;//автор
const bookYearInput = document.getElementById("bookYear").value = book.year;//год
const bookImageInput = document.getElementById("bookImage").value = book.image;//картинка


function changeBook(){
  const bookTitle = bookTitleInput.value;
  const bookAuthors = bookAuthorsInput.value;
  const bookYear = bookYearInput.value;
  const bookImage = bookImageInput.value;//все значения внутри input

  bookTitle.getElementsById(".bookTitle") = title;// обновляем информацию о книге
  bookAuthors.getElementsById(".bookAuthors") = authors;
  bookYear.getElementsById(".bookYear") = year;
  bookImage.getElementsById(".bookImage") = image;
}
bookTitleInput.addEventListener("change", updateBook);// добавляем обработчик события
bookAuthors.addEventListener("change",updateBook);
bookYear.addEventListener("change", updateBook);
bookImage.addEventListener("change", updateBook);


const updateBook = document.getElementById('updateBook');//кнопка обновить книгу

function updateBook(){
const bookTitleValue = bookTitleInput.value;
const  bookAuthorsValue = bookAuthorsInput.value;
const bookYearValue = bookYearInput.value;
const bookImageValue = bookImageInput.value;
}

closeChange.addEventListener('click',closeWindow )//закрывает окно изменить

//открыть
function windowChange(){
  modalChange.style.display = "flex"
  
}
//закрыть
function closeWindow(){
  modalChange.style.display = "none"
}



function addBooks() {
  const bookImageValue = document.getElementById('bookImage').value
  const bookTitleValue = document.getElementById('bookTitle').value
  const bookAuthorsValue = document.getElementById('bookAuthors').value
  const bookYearValue = document.getElementById('bookYear').value

  if(bookImageValue === '' || bookTitleValue === '' || bookAuthorsValue === '' || bookYearValue === ''){
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
<button id="editBook" class="delete-book">Редактировать</button>
<button id="updateBook" class="delete-book">Обновить</button>
</div>
</div></div>
`})


books.forEach((book) => {

  let deleteBookBtn = document.getElementById(`deleteBook-${book.id}`)
  deleteBookBtn.addEventListener('click',() =>  {
    deleteBook(book.id)
  })

})

 saveBooksToLocalStorage()
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
 saveBooksToLocalStorage()

  }

  renderBooks()