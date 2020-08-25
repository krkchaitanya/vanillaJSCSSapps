class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn; 
    }
}


class BookStore {

    static getBooks() {
        let books;
        if(null === localStorage.getItem("books")) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }

    static addBook(book) {
        let books = BookStore.getBooks();
        console.log("--adding books--", books);
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook(book) {
        let books = BookStore.getBooks();
        const filteredBooks = books.filter(bk => bk.isbn !== book.isbn);
        localStorage.setItem("books", JSON.stringify(filteredBooks));
    }

}

class UI {

    // Method to render defalut book list
    static displayBooks() {
        const bookList = BookStore.getBooks();
        if (!!bookList.length) {
            bookList.forEach(book => UI.addBookToTheList(book));
        } else {
            document.querySelector(".empty_list").innerText = "No items in the list"; 
        }
    }
    

    
    // Method to add a new book to the list
    static addBookToTheList(book) {
        console.log("entering addBookToTheList---");
        
        document.querySelector(".empty_list").innerText = "";
        
        // get the book list from the bookstore
        // Validate the isbn number against the local storage book list
        // add new book to the bookstore
        let isbnlist = []; 
        if(!!BookStore.getBooks().length)
        {
            isbnlist = BookStore.getBooks().map(book => book.isbn);    
        }

        if(!!!isbnlist.includes(book.isbn)) {
            BookStore.addBook(book);
      
        }

        while(document.querySelector("#book-list").children.length > 0) {
             document.querySelector("#book-list tr").remove();
            }

        BookStore.getBooks().forEach(book => {
            const list = document.getElementById("book-list");
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td>
                    <a href="#" id="delbook" class="btn book-delete">X</a>
                </td>
            `;
            list.appendChild(row);
        });

    }



    // Method to delete a book from the list
    static removeBook(book) {
        // Remove the row present on the DOM
        book.classList.contains("book-delete") &&
        book.parentElement.parentElement.remove();
        // remove the book from the bookstore        
        let selectedIsbn = 0;
        selectedIsbn = 
        undefined !== book.parentElement.parentElement.children[2] && 
        book.parentElement.parentElement.children[2].innerText;
        const selectedBook = BookStore.getBooks().filter(bk => bk.isbn === selectedIsbn);
        !!selectedIsbn && BookStore.removeBook(selectedBook[0]);
        // Display a message if the book list is empty
        const list = document.getElementById("book-list");
        !!!list.childElementCount &&
            (document.querySelector(".empty_list").innerText = "No items in the list");    
    }

}


// Initial event trigger to load the books on the DOM
document.addEventListener('DOMContentLoaded', UI.displayBooks());


// Event to add a new book to the list
document.querySelector("#book-form").addEventListener("submit", (e) => {
    // prevent default event
    e.preventDefault();
    document.querySelector(".booklist_error--msg").innerText = "";
    // get all the form input values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    // create new book object
    const newBookObj = new Book(title, author, isbn);
    const errorMsgArr = ["", undefined];
    if(
        errorMsgArr.includes(title) ||
        errorMsgArr.includes(author) ||
        errorMsgArr.includes(isbn))   
        {
            document.querySelector(".booklist_error--msg").innerText = "Enter valid book details";
        } else {
            UI.addBookToTheList(newBookObj);
            document.querySelector("#book-form").reset();
        }
});

// handle delete book button functionality
document.querySelector("#book-list").addEventListener("click", e => UI.removeBook(e.target));

