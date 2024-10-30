package com.cloudthat.libraryManagementSystem;
import com.cloudthat.libraryManagementSystem.Exceptions.BookAlreadyExistsException;
import com.cloudthat.libraryManagementSystem.Exceptions.BookNotFoundException;

public class Main {
    public static void main(String[] args) throws BookAlreadyExistsException, BookNotFoundException {
        System.out.println("welcome to Library Management System");
//        Book b1= new Book("1234567","Intro to java","James Gosling");
//        System.out.println(b1);
        Library l=new Library();
        try {
            l.addBook(new Book("1", "book1", "author1"));
            l.addBook(new Book("2", "book2", "author2"));
            l.addBook(new Book("3", "book3", "author3"));
            l.addBook(new Book("3", "book3", "author3"));
        } catch (BookAlreadyExistsException e){
            System.out.println("Book with isbn "+e.getMessage()+" already exists");
        }

//
        try{
            l.removeBook("4");
        } catch (BookNotFoundException e) {
            System.out.println("Book with isbn "+e.getMessage()+" does not exist");
        }
//        l.dispBooks();
        l.findByIsbn("3");
        l.findByTitle("book2");
    }
}