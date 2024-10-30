package com.cloudthat.libraryManagementSystem.Exceptions;

public class BookNotFoundException extends RuntimeException {
    public BookNotFoundException(String isbn) {
        super(isbn);
    }
}
