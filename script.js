const bookList = document.getElementById('book-list');

const books = [
  {
    title: 'Lorem Ipsum',
    author: 'Testeroo Testyy',
  },
  {
    title: 'Second Book',
    author: 'Testeroo Testyy',
  },
];

function display() {
  bookList.innerHTML = '';
  let displayBook = '';
  for (let i = 0; i < books.length; i += 1) {
    displayBook += `
      <div class="card">
        <p>${books[i].title}</p>
        <p>${books[i].author}</p>
        <button type="button" class="remove-btn">Remove</button>
        <hr/>
      </div>
    `;
  }
  bookList.innerHTML = displayBook;

  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach((button, index) => {
    button.addEventListener('click', () => removeBook(index));
  });
}

display();

function removeBook(index) {
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  display();
}

function addBook(event) {
  event.preventDefault(); 

  const title1 = document.getElementById('title').value;
  const author1 = document.getElementById('author').value;

  const newBook = { title: title1, author: author1 };
  books.push(newBook);

  localStorage.setItem('books', JSON.stringify(books));

  display(); 
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
}

function loadBooksFromLocalStorage() {
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    books.push(...JSON.parse(storedBooks));
  }
}

const addBtn = document.querySelector('.btn');
addBtn.addEventListener('click', addBook);

function clearLocalStorage() {
  localStorage.removeItem('books');
}

loadBooksFromLocalStorage();
window.addEventListener('beforeunload', clearLocalStorage);
