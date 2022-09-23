const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien','295 pages', 'not read yet');
const nineteenEightyFour = new book('1984','George Orwell','328','Have read');
const theColorPurple = new book ('The Color Purple','Alice Walker','200','Have read');
let myLibrary = [theHobbit,nineteenEightyFour,theColorPurple];

const submit = document.querySelector('.addBook');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const status = document.getElementById('status');
submit.addEventListener('click',addBookToLibrary);
//COnstructor for the books
function book(title,author,pages,status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        return(`${title} ${author}, ${pages}, ${status}`)
    }
}

//Adding book to library

function addBookToLibrary(){
    let newBook = new book(title.value , author.value , pages.value, status.value);
    return newBook.info;
}
console.log(addBookToLibrary());
//take user input
//Store to the array
//