package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
        System.out.println(" Lead Management System started successfully!");
        System.out.println(" Server running on: http://localhost:8082");
        System.out.println(" Health check: http://localhost:8082/api/lead/health");
        System.out.println(" Save lead endpoint: POST http://localhost:8082/api/lead/save");
    }
}