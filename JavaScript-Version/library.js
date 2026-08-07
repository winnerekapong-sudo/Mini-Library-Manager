// Mini Library Manager

let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        available: true
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert Martin",
        available: true
    },
    {
        id: 3,
        title: "Deep Work",
        author: "Cal Newport",
        available: false
    },
        {
        id: 4,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        available: true
    },
    {
        id: 5,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        available: false
    },
    {
        id: 6,
        title: "Atomic Habits",
        author: "James Clear",
        available: true
    }
];


// Add a book
function addBook(book) {
    books.push(book);
    console.log("Book added successfully");
}


// Remove a book
function removeBook(id) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books.splice(i, 1);
            console.log("Book removed successfully");
            return;
        }
    }

    console.log("Book not found");
}


// Borrow a book
function borrowBook(id) {
    for (let book of books) {
        if (book.id === id) {
            if (book.available) {
                book.available = false;
                console.log("Book borrowed successfully");
            } else {
                console.log("Book is already borrowed");
            }
            return;
        }
    }

    console.log("Book not found");
}


// Return a book
function returnBook(id) {
    for (let book of books) {
        if (book.id === id) {
            book.available = true;
            console.log("Book returned successfully");
            return;
        }
    }

    console.log("Book not found");
}


// Search by title
function searchBook(title) {
    for (let book of books) {
        if (book.title.toLowerCase() === title.toLowerCase()) {
            return book;
        }
    }

    return "Book not found";
}


// Display available books
function displayAvailableBooks() {
    for (let book of books) {
        if (book.available) {
            console.log(book);
        }
    }
}


// Display borrowed books
function displayBorrowedBooks() {
    for (let book of books) {
        if (!book.available) {
            console.log(book);
        }
    }
}


// Count total books
function countBooks() {
    return books.length;
}


// Bonus: Return available books as an array
function getAvailableBooks() {
    let availableBooks = [];

    for (let book of books) {
        if (book.available) {
            availableBooks.push(book);
        }
    }

    return availableBooks;
}


// Testing functions

addBook({
    id: 4,
    title: "JavaScript Basics",
    author: "John Smith",
    available: true
});

borrowBook(1);

returnBook(3);

console.log(searchBook("Clean Code"));

displayAvailableBooks();

displayBorrowedBooks();

console.log("Total books:", countBooks());

console.log(getAvailableBooks());
