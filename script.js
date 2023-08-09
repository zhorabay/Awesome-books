function pages() {
  return {
    home: `
    <section id="library">
            <h1>All awesome Books</h1>
            <div id="book-list">
                
            </div>
    </section>
  `,

    addnew: `
    <section id="newbook">
            <div>
                <h2>Add a new book</h2>
            </div>
            <form id="book-form" class="book-form">
                <div>
                    <input type="text" id="title" class="title" placeholder="Title">
                </div>
                <div>
                    <input type="text" id="author" class="author" placeholder="Author">
                </div>
                <div>
                    <button type="submit" id="btn" class="btn">Add</button>
                </div>
            </form>
    </section>
  `,
    contact: `
    <section id="contact">
            <h2>Contact Information</h2>
            <p>Do you have any questions or you just want to say "Hello"? <br>
                You can reach out to us!</p><br>
            <ul class="contact-list">
                <li>Our e-mail: thebestlibrary@book.com</li>
                <li>Our phone number: +12345678912</li>
                <li>Our address: 5th Villa, Calm str, Happy Republic</li>
            </ul>
    </section>
  `,
  };
}

function getPageContent(page) {
  let contentToReturn;
  switch (page) {
    case 'home':
      contentToReturn = pages().home;
      break;
    case 'addnew':
      contentToReturn = pages().addnew;
      document.getElementById('content').innerHTML = contentToReturn;
      break;
    case 'contact':
      contentToReturn = pages().contact;
      document.getElementById('content').innerHTML = contentToReturn;
      break;
    default:
  }
  document.getElementById('content').innerHTML = contentToReturn;
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class UI {
  addBook(book) {
    const title = document.getElementById('book');
    this.title = title;
    const list = document.getElementById('book-list');
    const flex = document.createElement('div');
    flex.classList.add('lists');
    flex.innerHTML = `

    <p><span>"${book.title}"</span>  by  <span>${book.author}</span></p>
    <button type="submit" class="submit">Remove</button>
   
    `;

    list.appendChild(flex);
  }

  showAlert(message, className) {
    const title = document.getElementById('book');
    this.title = title;
    const div = document.createElement('div');
    div.className = `alert ${className} `;
    div.appendChild(document.createTextNode(message));

    const container = document.getElementById('newbook');
    const form = document.querySelector('form');

    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2000);
  }

  deleteBook(target) {
    const title = document.getElementById('book');
    this.title = title;
    if (target.classList.contains('submit')) {
      target.parentElement.remove();
    }
  }

  clearFields() {
    const title = document.getElementById('book');
    this.title = title;
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}

document.querySelector('#book-list').addEventListener('submit',
  (e) => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const book = new Book(title, author);

    const ui = new UI();

    if (title === '' || author === '') {
      ui.showAlert('Please fill in all fields', 'error');
    } else {
      ui.addBook(book);

      ui.showAlert('Book Added', 'success');

      ui.clearFields();
    }
    e.preventDefault();
  });

document.addEventListener('DOMContentLoaded', () => {
  getPageContent('home');

  document.addEventListener('submit', (e) => {
    if (e.target.classList.contains('submit')) {
      const ui = new UI();

      ui.deleteBook(e.target);

      ui.showAlert('Book Removed', 'success');

      e.preventDefault();
    }
  });
});

const time = document.getElementById('time');

setInterval(() => {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);
