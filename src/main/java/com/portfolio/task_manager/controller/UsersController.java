package com.portfolio.task_manager.controller;

import com.portfolio.task_manager.model.User;
import com.portfolio.task_manager.repository.User_repository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/Users")
public class UsersController {

    private final User_repository user_Repository;

    public UsersController(User_repository user_Repository) {
        this.user_Repository = user_Repository;
    }

    @GetMapping
    public List<User> getUsers() {
        return user_Repository.findAll();
    }

    @GetMapping("/{id}")
    public User getUsers(@PathVariable Long id) {
        return user_Repository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createUser(@RequestBody User user) throws URISyntaxException {
        User savedUser = user_Repository.save(user);
        return ResponseEntity.created(new URI("/Users/" + savedUser.getId())).body(savedUser);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateUser(@PathVariable Long id, @RequestBody User user) {
        User currentUser = user_Repository.findById(id).orElseThrow(RuntimeException::new);
        currentUser.setName(user.getName());
        currentUser.setEmail(user.getEmail());
        currentUser = user_Repository.save(user);

        return ResponseEntity.ok(currentUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable Long id) {
        user_Repository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}