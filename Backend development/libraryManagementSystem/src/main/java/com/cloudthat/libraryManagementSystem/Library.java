package com.cloudthat.libraryManagementSystem;
import java.util.Map;
import java.util.HashMap;
public class Library {
    private Map<String,Book> books;
//    private set<String> sbn
    public Library(){
        books=new HashMap<>();
    }
    public void addBook(Book book){
        if(books.containsKey(book.getIsbn()))
        {
            System.out.println("Book already exists");
        }
        else{
            books.put(book.getIsbn(),book);
            System.out.println("book added");
        }
    }
    public void removeBook(String isbn){
        if(books.containsKey(isbn))
        {
            Book remBook=books.remove(isbn);
            System.out.println("book removed:"+remBook);
        }
        else{
            System.out.println("Book not found");
        }
    }
    public void dispBooks(){
        //way 1
//        System.out.println(books);
        //way 2
//        for(Map.Entry<String, Book> entry: books.entrySet()) {
//            System.out.println(entry.getValue());
//        }
        books.forEach((isbn,book) -> System.out.println(book));
        //            books.values().forEach(System.out::println);
        }
    public void findByIsbn(String isbn){
        books.forEach((i,book) -> {
            if(i.equals(isbn))
                System.out.println(book);
        });
    }
    public void findByTitle(String title){
        books.forEach((i,book) -> {
            if(title.equals(book.getTitle()))
                System.out.println(book);
        });
    }

//    public void findByIsbn(String isbn){
//        Book book = books.get(isbn);
//        if(book != null){
//            System.out.println("Book Found: ");
//            System.out.println(book);
//        } else{
//            System.out.println("Book Not Found!");
//        }
//    }

//    public void findByTitle(String title) {
//        for (Map.Entry<String, Book> entry : books.entrySet()) {
//            if (entry.getValue().getTitle().equals(title)) {
//                System.out.println("Book Found");
//                System.out.println(entry.getValue());
//            } else {
//                System.out.println("Book not found");
//            }
//        }
//    }
}
