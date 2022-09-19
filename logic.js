function book(title,author,pages,status){
    this.title = title;
    this.author=author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        return(`${title} ${author}, ${pages}, ${status}`)
    }
}
const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien','295 pages', 'not read yet');
console.log(theHobbit.info());