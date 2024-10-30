package com.cloudthat.libraryManagementSystem.Exceptions;

public class BookAlreadyExistsException extends RuntimeException {
  public BookAlreadyExistsException(String isbn) {
    super(isbn);
  }
}
