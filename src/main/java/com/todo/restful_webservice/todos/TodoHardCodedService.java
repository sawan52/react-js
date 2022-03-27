package com.todo.restful_webservice.todos;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "sawan52", "Learn Angular", new Date(), false));
        todos.add(new Todo(++idCounter, "sawan52", "Learn DSA", new Date(), false));
        todos.add(new Todo(++idCounter, "sawan52", "Learn React", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }
}
