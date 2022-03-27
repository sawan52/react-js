package com.todo.restful_webservice.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloWorldController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }

    @GetMapping("/hello-bean")
    public HelloBean helloBean() {
        return new HelloBean("Hello World Bean!");
    }

    @GetMapping("/hello/{name}")
    public String helloPathVariable(@PathVariable String name) {
        return "Hello " + name;
//        throw new RuntimeException("Something went wrong!");
    }
}
