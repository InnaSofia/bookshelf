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

  
// Находим все элементы для добавления книги
const modalWindow = document.getElementById('modalWindow');//находим модальное окно
const addBookBtn = document.getElementById('addBookBtn');//кнопка 'добавить книгу'
const saveBookBtn = document.getElementById('saveBookBtn');//кнопка 'сохранить книгу'
const closeModalBtn = document.getElementById('closeModalBtn');//кнопка 'закрыть модальное окно'

// Находим все элементы для обновления книги
const modalChange = document.getElementById('modalChange');//находим окно редактировать книгу
const closeChange = document.getElementById('closeChange');//кнопка 'закрыть модальное окно,изменить книгу'
const updateBookBtn = document.getElementById('changeBook');//кнопка обновить книгу

addBookBtn.addEventListener('click', openModal )//открывается модальное окно
closeModalBtn.addEventListener('click', closeModal)//закрывается модальное окно
saveBookBtn.addEventListener('click',addBooks)//сохраняет книгу


updateBookBtn.addEventListener('click', changeBook);//обновляет
closeChange.addEventListener('click', closeWindow );//закрывает окно обновить

//находим обновленные элементы книги в инпуте
const bookTitleInput = document.getElementById("bookTitleUpdate");//заголовок ПРОПИСАНЫ в мод окне id
const bookAuthorsInput = document.getElementById("bookAuthorsUpdate");//автор
const bookYearInput = document.getElementById("bookYearUpdate");//год
const bookImageInput = document.getElementById("bookImageUpdate");//картинка



//функция обновления книги
function changeBook(){

  const bookTitle = bookTitleInput.value;
  const bookAuthors = bookAuthorsInput.value;
  const bookYear = bookYearInput.value;
  const bookImage = bookImageInput.value;//все значения внутри input
//по id ищем текущюю книгу(currentBookId),которую обновляем

if(bookTitle === '' || bookAuthors === '' || bookYear === '' || bookImage === ''){
  document.getElementById('errorUpdateModal').style.display = 'flex'
  return
}

const updateBook = books.find((book) => book.id === currentBookId)

//находим значения (const bookTitle...)
updateBook.title = bookTitle
updateBook.authors = bookAuthors
updateBook.year = bookYear
updateBook.image = bookImage
closeModal()//закрыть окно
renderBooks()//функ показывать все книги
closeWindow()//закрывает модальное окно измененное

}






//открыть модально окно новое для изменений данных
function openUpdateModal(id){
  currentBookId = id

  modalChange.style.display = "flex"
  const bookUpdate = books.find(book => {
    return book.id === id
  })

  document.getElementById("bookTitleUpdate").value = bookUpdate.title;// обновляем информацию о книге
  document.getElementById("bookAuthorsUpdate").value = bookUpdate.authors;
  document.getElementById("bookYearUpdate").value = bookUpdate.year;
  document.getElementById("bookImageUpdate").value = bookUpdate.image;

  const update =document.getElementById('changeBook')
  update.addEventListener('click',changeBook)
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
  /* if(bookImageValue === ''  || bookTitleValue === '' || bookAuthorsValue === '' || bookYearValue === '' ){
    document.getElementById('error').style.display = 'flex'
    return
  } */
  if(bookTitle === ''){
    document.getElementById('errorName').innerHTML = '<p>Заполните имя</p>'
    return
    }
    if(bookTitleValue === ''){
      document.getElementById('errorAuthors').innerHTML = '<p>Заполните автора</p>'
      
    }
    if(bookTitleValue === ''){
      document.getElementById('errorYear').innerHTML = '<p>Заполните год</p>'
      
    }
    if(bookTitleValue === ''){
      document.getElementById('errorImage').innerHTML = '<p>Вставьте ссылку на изображение</p>'
     
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

  /* 
  
  document.getElementById('bookImage').innerHTML = ''
  document.getElementById('bookTitle').innerHTML = ''
  document.getElementById('bookAuthors').innerHTML = ''
  document.getElementById('bookYear').innerHTML = '' */
}

function saveBooksToLocalStorage(){
  const booksJson = JSON.stringify(books)
  localStorage.setItem('books', booksJson)
}

function openModal(){
  modalWindow.style.display = "flex"
}
//закрыть окно
function closeModal(){
  modalWindow.style.display = "none"
}


const container = document.getElementById("container")
//функ показывать все книги
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

 /*  Swal.fire({
    title: 'Приветствую вас в библиотеке!',
    text: "Добавишь свою книгу?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Да!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Я рада!',
        'Добавляй свои книги.',
        'success'
      )
    }
  }) */