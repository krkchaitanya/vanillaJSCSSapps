class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn; 
    }
}

class UI {

    // Method to display books
    static displayBooks() {
        const StoredBooks = [
            {
                title: "Book one",
                author: "John Doe",
                isbn: "23432"
            },
            {
                title: "Second one",
                author: "John Doe",
                isbn: "03948"
            }
        ];

        const books = StoredBooks;

        books.forEach(book => UI.addBookToTheList(book));
    }
    

    // Method to add a new book to the list
    static addBookToTheList(book) {
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
    }


    // Method to delete a book from the list
    static removeBook(book) {
        book.classList.contains("book-delete") &&
        book.parentElement.parentElement.remove();
        
        const list = document.getElementById("book-list");
        !!!list.childElementCount &&
            (document.querySelector(".empty_list").innerText = "No items in the list");    
    }

}

// Function to add a new book to the list
const addNewBookToList = (e) => {
    e.preventDefault();
    console.log("--hitting the addNewBookToList method--");
};

// Initial event trigger to load the books on the DOM
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event to add a new book to the list
document.querySelector("#book-form").addEventListener("submit", (e) => {

    e.preventDefault();
    document.querySelector(".booklist_error--msg").innerText = "";

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

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

// handle delete book button
document.querySelector("#book-list").addEventListener("click", e => UI.removeBook(e.target));

