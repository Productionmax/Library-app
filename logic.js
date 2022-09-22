const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien','295 pages', 'not read yet');
const nineteenEightyFour = new book('1984','George Orwell','328','Have read');
const theColorPurple = new book ('The Color Purple','Alice Walker','200','Have read');
let myLibrary = [theHobbit,nineteenEightyFour,theColorPurple];

function book(title,author,pages,status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        return(`${title} ${author}, ${pages}, ${status}`)
    }
}


// function addBookToLibrary(){
    
// }
function displayBook(){
    myLibrary.forEach((books)=>{
        return (books);
    });
}
console.log(displayBook());