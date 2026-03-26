package com.example.demo.service;

import com.example.demo.entity.AuthUser;
import com.example.demo.repository.AuthUserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final AuthUserRepository repo;

    public AuthService(AuthUserRepository repo) {
        this.repo = repo;
    }

    public AuthUser login(String username, String password) {
        AuthUser user = repo.findByUsernameAndActive(username, 1)
                .orElseThrow(() -> new RuntimeException("Invalid username or user inactive"));

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }
}