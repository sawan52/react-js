package com.todo.restful_webservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello World!";
    }

    @GetMapping("/hello-bean")
    public HelloBean helloBean() {
        return new HelloBean("Hello World Bean!");
    }
}
