let books = [

{
    id:1,
    title:"The Alchemist",
    author:"Paulo Coelho",
    available:true
},

{
    id:2,
    title:"Clean Code",
    author:"Robert Martin",
    available:true
},

{
    id:3,
    title:"Deep Work",
    author:"Cal Newport",
    available:false
}

];


// Add book

function addBook(){

let id = Number(document.getElementById("bookId").value);
let title = document.getElementById("title").value;
let author = document.getElementById("author").value;


books.push({

id:id,
title:title,
author:author,
available:true

});


alert("Book added successfully");

}



// Borrow book

function borrowBook(){

let id = Number(document.getElementById("actionId").value);


for(let book of books){

if(book.id === id){

book.available=false;

alert("Book borrowed successfully");

return;

}

}

alert("Book not found");

}




// Return book

function returnBook(){

let id = Number(document.getElementById("actionId").value);


for(let book of books){

if(book.id === id){

book.available=true;

alert("Book returned successfully");

return;

}

}


alert("Book not found");

}



// Search book

function searchBook(){

let title=document.getElementById("searchInput").value;


for(let book of books){

if(book.title.toLowerCase() === title.toLowerCase()){

document.getElementById("searchResult").innerHTML=

`
Title: ${book.title}<br>
Author: ${book.author}<br>
Available: ${book.available}
`;

return;

}

}


document.getElementById("searchResult").innerHTML="Book not found";

}




// Available books

function displayAvailableBooks(){

let output="";


for(let book of books){

if(book.available){

output +=

`
<div class="book">
<h3>${book.title}</h3>
<p>Author: ${book.author}</p>
</div>
`;

}

}


document.getElementById("bookDisplay").innerHTML=output;

}




// Borrowed books

function displayBorrowedBooks(){

let output="";


for(let book of books){

if(!book.available){

output +=

`
<div class="book">
<h3>${book.title}</h3>
<p>Author: ${book.author}</p>
</div>
`;

}

}


document.getElementById("bookDisplay").innerHTML=output;

}




// Count books

function countBooks(){

alert("Total books: " + books.length);

}