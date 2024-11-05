package com.example.demomvc.controller;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
//    @RequestMapping("/")
//    public String helloWorld(){
//        return "Hello world spring MVC";
//    }
    @Value("${user}")
    private String user;

    @GetMapping("/")
    public String helloWorld() {
        return "Hello " + user + ", Welome to Spring sessions.";
    }

}