
let myLibrary = [];
const form = document.querySelector("#bookform");
const submit = document.querySelector('.addBook');
//Submit enable function to addBookToLibrary
submit.addEventListener('click',addBookToLibrary);
//COnstructor for the books
function book(title,author,pages,status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function (){
        return (`Book Title`+ title + `by` + author + `Page Count:` + pages + `Read status:` + status)
    }
    myLibrary.push(this);
}
//Sample books
const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien','295 pages', 'not read yet');
const nineteenEightyFour = new book('1984','George Orwell','328','Have read');
const theColorPurple = new book ('The Color Purple','Alice Walker','200','Have read');

//Adding book to library
function addBookToLibrary(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').value;
    let newBook = new book(title, author , pages, status);
    myLibrary.push(newBook.info);
    console.log(myLibrary);
}

//take user input
//Store to the array
//