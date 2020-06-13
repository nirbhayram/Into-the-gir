console.log(Math.random());

function Book(name, author){
    this.name = name;
    this.author = author;
}

let books = [new Book(`Javascript`,`Nirbhay`), new Book(`Java`,`Ram`)];

let index = books.findIndex(function(book){
    if(book.name==`Java`){
        return true;
    }
    return false;
});
if(index>-1){
    console.log(books[index]);
}else{
    console.log(`No match found`);
}

let book = books.find((book)=>{
    if(book.author==`Nirbhay`){
        return true;
    }else{
        return false;
    }
});

console.log(book);

books.forEach((book)=>console.log(book.author));