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
  let displayBook = '';
  for (let i = 0; i < 6; i += 1) {
    displayBook += `

                <div class="card">
                    <ul>
                        <li>${books[i].title}</li>
                        <li>${books[i].author}</li>
                    </ul>
                    <button type="submit" id="remove-btn">Remove</button>
                </div>
    
       `;
  }
  bookList.innerHTML = displayBook;
}

display();