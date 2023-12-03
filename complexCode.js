/*
File: complexCode.js
Description: This code is a comprehensive solution for managing a library system. It includes various functionalities like adding, removing, and searching books, managing user accounts, borrowing and returning books, and generating reports.
*/

// Constants
const MAX_BOOKS_ALLOWED = 5;
const MAX_LOAN_DURATION = 14;

// Class Definitions
class Book {
  constructor(title, author, genre, isbn, quantity) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isbn = isbn;
    this.quantity = quantity;
  }

  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`ISBN: ${this.isbn}`);
    console.log(`Quantity: ${this.quantity}`);
  }
}

class User {
  constructor(id, name, email, booksBorrowed) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.booksBorrowed = booksBorrowed;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Books Borrowed: ${this.booksBorrowed}`);
  }
}

// Library Class
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.users = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(isbn) {
    const index = this.books.findIndex((book) => book.isbn === isbn);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  findBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn);
    return book ? book : null;
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(email) {
    const index = this.users.findIndex((user) => user.email === email);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  findUser(email) {
    const user = this.users.find((user) => user.email === email);
    return user ? user : null;
  }
}

// Library System
const myLibrary = new Library("My Library");

// Adding Books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic", "978-3-16-148410-0", 10);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Classic", "978-1-18-148410-3", 5);
const book3 = new Book("1984", "George Orwell", "Dystopian", "978-1-65-148410-5", 7);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Adding Users
const user1 = new User(1, "John Doe", "john.doe@example.com", []);
const user2 = new User(2, "Jane Smith", "jane.smith@example.com", []);

myLibrary.addUser(user1);
myLibrary.addUser(user2);

// Borrowing Books
function borrowBook(user, book) {
  if (book.quantity > 0 && user.booksBorrowed.length < MAX_BOOKS_ALLOWED) {
    user.booksBorrowed.push(book);
    book.quantity--;
    console.log(`${user.name} has borrowed "${book.title}".`);
  } else {
    console.log("Book not available or borrow limit reached.");
  }
}

borrowBook(user1, book1);
borrowBook(user1, book2);
borrowBook(user2, book3);

// Returning Books
function returnBook(user, book) {
  const index = user.booksBorrowed.findIndex((borrowedBook) => borrowedBook.isbn === book.isbn);
  if (index !== -1) {
    user.booksBorrowed.splice(index, 1);
    book.quantity++;
    console.log(`${user.name} has returned "${book.title}".`);
  } else {
    console.log(`${user.name} does not have the book "${book.title}".`);
  }
}

returnBook(user1, book1);
returnBook(user1, book3);

// Displaying Library Details
console.log(`--- Library: ${myLibrary.name} ---`);
console.log("Books:");
myLibrary.books.forEach((book) => book.displayDetails());
console.log("Users:");
myLibrary.users.forEach((user) => user.displayDetails());