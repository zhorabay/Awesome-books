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
  for (let i = 0; i < books.length; i += 1) {
    displayBook += `

                <div class="card">
                  
                        <p>${books[i].title}</p>
                        <p>${books[i].author}</p>
                
                    <button type="submit" id="remove-btn">Remove</button>

                    <hr/>
                </div>
    
       `;
  }
  bookList.innerHTML = displayBook;
}



//add book section
const getTitle = localStorage.getItem('title');
const getAuthor = localStorage.getItem('author');


function addBook() {
  const newBook = { title : title.value = getTitle, author : author.value = getAuthor};
  books.push(newBook);

}
const addBtn = document.querySelector('.btn');

addBtn.addEventListener('click',addBook
());

display();