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

    <p>"${book.title}" by ${book.author}</p>
    <button type="submit" class="submit">Remove</button>
    <hr>

    `;
    list.appendChild(flex);
  }

  showAlert(message, className) {
    const title = document.getElementById('book');
    this.title = title;
    const div = document.createElement('div');
    div.className = `alert ${className} `;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2000);
  }

  deleteBook(target) {
    const title = document.getElementById('book');
    this.title = title;
    if (target.className === 'submit') {
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

document.getElementById('book-form').addEventListener('submit',
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

document.getElementById('book-list').addEventListener('click',
  (e) => {
    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
  });
