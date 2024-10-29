package com.cloudthat.libraryManagementSystem;

public class Main {
    public static void main(String[] args) {
        System.out.println("welcome to Library Management System");
//        Book b1= new Book("1234567","Intro to java","James Gosling");
//        System.out.println(b1);
        Library l=new Library();
        l.addBook(new Book("1","book1","author1"));
        l.addBook(new Book("2","book2","author2"));
        l.addBook(new Book("3","book3","author3"));
//
//        l.removeBook("1");
//        l.dispBooks();
        l.findByIsbn("3");
        l.findByTitle("book2");
    }
}