package com.portfolio.task_manager.controller;

import com.portfolio.task_manager.model.Task;
import com.portfolio.task_manager.repository.Task_repository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/Tasks")
public class TasksController {

    private final Task_repository task_Repository;

    public TasksController(Task_repository task_Repository) {
        this.task_Repository = task_Repository;
    }

    @GetMapping
    public List<Task> getTasks() {
        return task_Repository.findAll();
    }

    @GetMapping("/{id}")
    public Task getTasks(@PathVariable Long id) {
        return task_Repository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createTask(@RequestBody Task task) throws URISyntaxException {
        Task savedTask = task_Repository.save(task);
        return ResponseEntity.created(new URI("/Tasks/" + savedTask.getId())).body(savedTask);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateTask(@PathVariable Long id, @RequestBody Task task) {
        Task currentTask = task_Repository.findById(id).orElseThrow(RuntimeException::new);
        currentTask.setItems(task.getItems());
        currentTask.setDeadline(task.getDeadline());
        currentTask.setTeam(task.getTeam());
        currentTask = task_Repository.save(task);

        return ResponseEntity.ok(currentTask);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteTask(@PathVariable Long id) {
        task_Repository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
