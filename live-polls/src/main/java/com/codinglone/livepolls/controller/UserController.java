package com.codinglone.livepolls.controller;

import com.codinglone.livepolls.dto.UserDTO;
import com.codinglone.livepolls.entity.User;
import com.codinglone.livepolls.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String addUser(@RequestBody User user){
        userService.addUser(user);

        return "successfully added user";
    }

    @GetMapping
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/get")
    public User getUser(@RequestParam Integer id){
        return userService.getUser(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Void> updateUser(@PathVariable Integer id, @RequestBody User user){
        userService.updateUser(id, user);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id){
        userService.deleteUser(id);

        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/update-name/{id}")
    public ResponseEntity<Void> updateName(@PathVariable Integer id, @RequestBody UserDTO userDTO){
        userService.updateName(id, userDTO);

        return ResponseEntity.noContent().build();
    }


}
