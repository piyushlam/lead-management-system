package com.example.demo.controller;

import com.example.demo.entity.AuthUser;
import com.example.demo.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final AuthService service;

    public AuthController(AuthService service) {
        this.service = service;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        try {
            String username = body.getOrDefault("username", "");
            String password = body.getOrDefault("password", "");

            AuthUser user = service.login(username, password);

            return ResponseEntity.ok(Map.of(
                    "success", true,
                    "message", "Login success",
                    "username", user.getUsername(),
                    "fullName", user.getFullName(),
                    "role", user.getRole()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(Map.of(
                    "success", false,
                    "message", e.getMessage()
            ));
        }
    }
}