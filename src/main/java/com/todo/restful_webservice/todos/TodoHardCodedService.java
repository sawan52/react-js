package com.todo.restful_webservice.todos;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {

    private static List<Todo> todosList = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todosList.add(new Todo(++idCounter, "sawan52", "Learn Angular", new Date(), false));
        todosList.add(new Todo(++idCounter, "sawan52", "Learn DSA", new Date(), false));
        todosList.add(new Todo(++idCounter, "sawan52", "Learn React", new Date(), false));
    }

    public List<Todo> findAll() {
        return todosList;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        // If todo is not found...
        if (todo == null) return null;
        // If todo is removed successfully...
        if (todosList.remove(todo)) return todo;
        else return null;
    }

    private Todo findById(long id) {
        for (Todo todo : todosList) {
            if (todo.getId() == id) return todo;
        }
        return null;
    }
}
