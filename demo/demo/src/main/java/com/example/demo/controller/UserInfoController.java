//////////package com.example.demo.controller;
//////////
//////////import com.example.demo.entity.UserInfo;
//////////import com.example.demo.service.UserInfoService;
//////////import org.springframework.beans.factory.annotation.Autowired;
//////////import org.springframework.http.ResponseEntity;
//////////import org.springframework.web.bind.annotation.*;
//////////
//////////import java.time.LocalDateTime;
//////////import java.util.HashMap;
//////////import java.util.Map;
//////////
//////////@RestController
//////////@RequestMapping("/api/lead")
//////////public class UserInfoController {
//////////
//////////    @Autowired
//////////    private UserInfoService service;
//////////
//////////    @PostMapping("/save")
//////////    public ResponseEntity<Map<String, Object>> saveLead(@RequestBody UserInfo user) {
//////////        System.out.println("\n🌐 API CALL: /api/lead/save");
//////////        System.out.println("Received data: " + user);
//////////        
//////////        Map<String, Object> response = new HashMap<>();
//////////        
//////////        try {
//////////            // Save the user
//////////            UserInfo savedUser = service.saveUser(user);
//////////            
//////////            // Build success response
//////////            response.put("success", true);
//////////            response.put("ir_lead_seq_id", savedUser.getIrLeadSeqId());
//////////            response.put("ir_lead_id", savedUser.getIrLeadId());
//////////            response.put("ir_lead_status", savedUser.getIrLeadStatus());
//////////            response.put("ir_lead_dtime", savedUser.getIrLeadDtime());
//////////            response.put("timestamp", LocalDateTime.now());
//////////            
//////////            if ("Qualified".equals(savedUser.getIrLeadStatus())) {
//////////                response.put("message", "✅ Lead saved with QUALIFIED status");
//////////            } else {
//////////                response.put("message", "⚠️ Lead saved with UNQUALIFIED status");
//////////                response.put("reason", "Missing required information");
//////////            }
//////////            
//////////            return ResponseEntity.ok(response);
//////////            
//////////        } catch (Exception e) {
//////////            System.out.println("🔥 ERROR: " + e.getMessage());
//////////            e.printStackTrace();
//////////            
//////////            response.put("success", false);
//////////            response.put("error", e.getMessage());
//////////            response.put("timestamp", LocalDateTime.now());
//////////            
//////////            return ResponseEntity.status(500).body(response);
//////////        }
//////////    }
//////////    
//////////    @GetMapping("/health")
//////////    public ResponseEntity<Map<String, Object>> healthCheck() {
//////////        Map<String, Object> response = new HashMap<>();
//////////        
//////////        try {
//////////            // Try database connection
//////////            long count = service.getTotalLeadCount();
//////////            
//////////            response.put("status", "UP");
//////////            response.put("database", "CONNECTED");
//////////            response.put("total_leads", count);
//////////            response.put("timestamp", LocalDateTime.now());
//////////            
//////////            return ResponseEntity.ok(response);
//////////        } catch (Exception e) {
//////////            response.put("status", "DOWN");
//////////            response.put("database", "DISCONNECTED");
//////////            response.put("error", e.getMessage());
//////////            response.put("timestamp", LocalDateTime.now());
//////////            
//////////            return ResponseEntity.status(503).body(response);
//////////        }
//////////    }
//////////    
//////////    @GetMapping("/test-db")
//////////    public ResponseEntity<String> testDatabase() {
//////////        try {
//////////            long count = service.getTotalLeadCount();
//////////            return ResponseEntity.ok("✅ Database connected! Total records: " + count);
//////////        } catch (Exception e) {
//////////            return ResponseEntity.ok("❌ Database error: " + e.getMessage());
//////////        }
//////////    }
//////////}
////////
////////
////////
////////
////////package com.example.demo.controller;
////////
////////import com.example.demo.entity.UserInfo;
////////import com.example.demo.service.UserInfoService;
////////import org.springframework.beans.factory.annotation.Autowired;
////////import org.springframework.http.ResponseEntity;
////////import org.springframework.web.bind.annotation.*;
////////
////////import java.time.LocalDateTime;
////////import java.util.HashMap;
////////import java.util.Map;
////////
////////@RestController
////////@RequestMapping("/api/lead")
////////public class UserInfoController {
////////
////////    @Autowired
////////    private UserInfoService service;
////////
////////    @PostMapping("/save")
////////    public ResponseEntity<Map<String, Object>> saveLead(@RequestBody Map<String, Object> requestData) {
////////        System.out.println("\n🌐 API CALL: /api/lead/save");
////////        System.out.println("Received data: " + requestData);
////////        
////////        Map<String, Object> response = new HashMap<>();
////////        
////////        try {
////////            // Convert Map to UserInfo object
////////            UserInfo user = mapToUserInfo(requestData);
////////            
////////            // Save to database
////////            UserInfo savedUser = service.saveUser(user);
////////            
////////            // Build success response
////////            response.put("success", true);
////////            response.put("message", "Lead saved successfully");
////////            response.put("database_id", savedUser.getIrLeadSeqId());
////////            response.put("lead_id", savedUser.getIrLeadId());
////////            response.put("status", savedUser.getIrLeadStatus());
////////            response.put("contact", savedUser.getIrLeadContactNo());
////////            response.put("name", savedUser.getIrLeadName());
////////            response.put("timestamp", LocalDateTime.now());
////////            
////////            System.out.println("✅ Response: " + response);
////////            return ResponseEntity.ok(response);
////////            
////////        } catch (Exception e) {
////////            System.out.println("🔥 ERROR: " + e.getMessage());
////////            e.printStackTrace();
////////            
////////            response.put("success", false);
////////            response.put("message", "Failed to save lead");
////////            response.put("error", e.getMessage());
////////            response.put("timestamp", LocalDateTime.now());
////////            
////////            return ResponseEntity.status(500).body(response);
////////        }
////////    }
////////    
////////    private UserInfo mapToUserInfo(Map<String, Object> data) {
////////        UserInfo user = new UserInfo();
////////        
////////        // Map all possible fields (case-insensitive)
////////        for (Map.Entry<String, Object> entry : data.entrySet()) {
////////            String key = entry.getKey().toLowerCase();
////////            Object value = entry.getValue();
////////            
////////            if (value != null) {
////////                String stringValue = value.toString();
////////                
////////                switch(key) {
////////                    case "irleadcontactno":
////////                    case "contact":
////////                    case "phone":
////////                    case "mobile":
////////                        user.setIrLeadContactNo(stringValue);
////////                        break;
////////                    case "irleadname":
////////                    case "name":
////////                    case "fullname":
////////                        user.setIrLeadName(stringValue);
////////                        break;
////////                    case "irleademail":
////////                    case "email":
////////                        user.setIrLeadEmail(stringValue);
////////                        break;
////////                    case "irleadstate":
////////                    case "state":
////////                        user.setIrLeadState(stringValue);
////////                        break;
////////                    case "irleadcity":
////////                    case "city":
////////                        user.setIrLeadCity(stringValue);
////////                        break;
////////                    case "irleadgender":
////////                    case "gender":
////////                        user.setIrLeadGender(stringValue);
////////                        break;
////////                    case "irleadsource":
////////                    case "source":
////////                        user.setIrLeadSource(stringValue);
////////                        break;
////////                    case "irleadid":
////////                    case "leadid":
////////                        user.setIrLeadId(stringValue);
////////                        break;
////////                    // Add more fields as needed
////////                }
////////            }
////////        }
////////        
////////        return user;
////////    }
////////    
////////    @GetMapping("/test")
////////    public ResponseEntity<String> test() {
////////        return ResponseEntity.ok("✅ API is working! POST to /api/lead/save to save leads.");
////////    }
////////    
////////    @GetMapping("/health")
////////    public ResponseEntity<Map<String, Object>> health() {
////////        Map<String, Object> response = new HashMap<>();
////////        try {
////////            long count = service.getTotalLeadCount();
////////            response.put("status", "UP");
////////            response.put("database", "CONNECTED");
////////            response.put("total_leads", count);
////////            response.put("timestamp", LocalDateTime.now());
////////            return ResponseEntity.ok(response);
////////        } catch (Exception e) {
////////            response.put("status", "DOWN");
////////            response.put("error", e.getMessage());
////////            return ResponseEntity.status(503).body(response);
////////        }
////////    }
////////}
//////
//////
//////package com.example.demo.controller;
//////
//////import com.example.demo.entity.UserInfo;
//////import com.example.demo.service.UserInfoService;
//////import org.springframework.beans.factory.annotation.Autowired;
//////import org.springframework.http.ResponseEntity;
//////import org.springframework.web.bind.annotation.*;
//////
//////import java.time.LocalDateTime;
//////import java.util.HashMap;
//////import java.util.Map;
//////
//////@RestController
//////@RequestMapping("/api/lead")
//////public class UserInfoController {
//////
//////    @Autowired
//////    private UserInfoService service;
//////
//////    @PostMapping("/save")
//////    public ResponseEntity<Map<String, Object>> saveLead(@RequestBody UserInfo user) {
//////        System.out.println("\n📥 Received POST /api/lead/save");
//////        
//////        Map<String, Object> response = new HashMap<>();
//////        
//////        try {
//////            // Save user (ID will be auto-generated)
//////            UserInfo savedUser = service.saveUser(user);
//////            
//////            // Build response
//////            response.put("success", true);
//////            response.put("message", "Lead saved successfully");
//////            response.put("auto_generated_id", savedUser.getIrLeadId());
//////            response.put("status", savedUser.getIrLeadStatus());
//////            response.put("database_id", savedUser.getIrLeadSeqId());
//////            response.put("timestamp", LocalDateTime.now());
//////            
//////            return ResponseEntity.ok(response);
//////            
//////        } catch (Exception e) {
//////            response.put("success", false);
//////            response.put("error", e.getMessage());
//////            return ResponseEntity.status(500).body(response);
//////        }
//////    }
//////    
//////    @PostMapping("/save-any")
//////    public ResponseEntity<?> saveAny(@RequestBody Map<String, Object> data) {
//////        System.out.println("📥 Raw data: " + data);
//////        
//////        // Convert Map to UserInfo
//////        UserInfo user = new UserInfo();
//////        if (data.containsKey("contact")) {
//////            user.setIrLeadContactNo(data.get("contact").toString());
//////        }
//////        if (data.containsKey("name")) {
//////            user.setIrLeadName(data.get("name").toString());
//////        }
//////        if (data.containsKey("email")) {
//////            user.setIrLeadEmail(data.get("email").toString());
//////        }
//////        
//////        UserInfo saved = service.saveUser(user);
//////        
//////        return ResponseEntity.ok(Map.of(
//////            "id", saved.getIrLeadId(),
//////            "status", saved.getIrLeadStatus(),
//////            "message", "Saved with auto-generated ID"
//////        ));
//////    }
//////}
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////package com.example.demo.controller;
////
////import com.example.demo.entity.UserInfo;
////import com.example.demo.service.UserInfoService;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.http.ResponseEntity;
////import org.springframework.web.bind.annotation.*;
////
////import java.time.LocalDateTime;
////import java.util.HashMap;
////import java.util.List;
////import java.util.Map;
////
////@CrossOrigin(origins = "http://localhost:4200")   // Angular ke liye CORS allow
////@RestController
////@RequestMapping("/api/lead")
////public class UserInfoController {
////
////    @Autowired
////    private UserInfoService service;
////
////    // 🔹 1) SAVE LEAD
////    @PostMapping("/save")
////    public ResponseEntity<Map<String, Object>> saveLead(@RequestBody UserInfo user) {
////        System.out.println("\n📥 Received POST /api/lead/save");
////
////        Map<String, Object> response = new HashMap<>();
////
////        try {
////            UserInfo savedUser = service.saveUser(user);
////
////            response.put("success", true);
////            response.put("message", "Lead saved successfully");
////            response.put("auto_generated_id", savedUser.getIrLeadId());
////            response.put("status", savedUser.getIrLeadStatus());
////            response.put("database_id", savedUser.getIrLeadSeqId());
////            response.put("timestamp", LocalDateTime.now());
////
////            return ResponseEntity.ok(response);
////
////        } catch (Exception e) {
////            e.printStackTrace();
////            response.put("success", false);
////            response.put("error", e.getMessage());
////            return ResponseEntity.status(500).body(response);
////        }
////    }
////
////    // 🔹 2) SUMMARY – dashboard cards
////    @GetMapping("/summary")
////    public ResponseEntity<Map<String, Long>> getSummary() {
////        Map<String, Long> summary = service.getSummary();
////        return ResponseEntity.ok(summary);
////    }
////
////    // 🔹 3) ALL LEADS – dashboard table
////    @GetMapping("/all")
////    public ResponseEntity<List<UserInfo>> getAllLeads() {
////        List<UserInfo> leads = service.getAllLeads();
////        return ResponseEntity.ok(leads);
////    }
////
////    // 🔹 4) STATUS WISE LIST (optional)
////    @GetMapping("/status/{status}")
////    public ResponseEntity<List<UserInfo>> getLeadsByStatus(@PathVariable String status) {
////        List<UserInfo> leads = service.getLeadsByStatus(status.toUpperCase());
////        return ResponseEntity.ok(leads);
////    }
////}
//
//
//
//
//
//
//
//
//
//
//package com.example.demo.controller;
//
//import com.example.demo.entity.UserInfo;
//import com.example.demo.service.UserInfoService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.time.LocalDateTime;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/lead")
//@CrossOrigin(origins = "http://localhost:4200") // 👈 Angular se call allow
//public class UserInfoController {
//
//    @Autowired
//    private UserInfoService service;
//
//    // =======================
//    //  POST – SAVE LEAD
//    // =======================
//    @PostMapping("/save")
//    public ResponseEntity<Map<String, Object>> saveLead(@RequestBody UserInfo user) {
//        System.out.println("\n📥 Received POST /api/lead/save");
//
//        Map<String, Object> response = new HashMap<>();
//
//        try {
//            UserInfo savedUser = service.saveUser(user);
//
//            response.put("success", true);
//            response.put("message", "Lead saved successfully");
//            response.put("auto_generated_id", savedUser.getIrLeadId());
//            response.put("status", savedUser.getIrLeadStatus());
//            response.put("database_id", savedUser.getIrLeadSeqId());
//            response.put("timestamp", LocalDateTime.now());
//
//            return ResponseEntity.ok(response);
//
//        } catch (Exception e) {
//            e.printStackTrace();
//            response.put("success", false);
//            response.put("error", e.getMessage());
//            return ResponseEntity.status(500).body(response);
//        }
//    }
//
//    // Optional: raw map → UserInfo
//    @PostMapping("/save-any")
//    public ResponseEntity<?> saveAny(@RequestBody Map<String, Object> data) {
//        System.out.println("📥 Raw data: " + data);
//
//        UserInfo user = new UserInfo();
//        if (data.containsKey("contact")) {
//            user.setIrLeadContactNo(data.get("contact").toString());
//        }
//        if (data.containsKey("name")) {
//            user.setIrLeadName(data.get("name").toString());
//        }
//        if (data.containsKey("email")) {
//            user.setIrLeadEmail(data.get("email").toString());
//        }
//
//        UserInfo saved = service.saveUser(user);
//
//        return ResponseEntity.ok(Map.of(
//                "id", saved.getIrLeadId(),
//                "status", saved.getIrLeadStatus(),
//                "message", "Saved with auto-generated ID"
//        ));
//    }
//
//    // =======================
//    //  GET – SUMMARY
//    // =======================
//    @GetMapping("/summary")
//    public Map<String, Long> getLeadSummary() {
//        return service.getSummary();
//    }
//
//    // =======================
//    //  GET – ALL LEADS (TABLE)
//    // =======================
//    @GetMapping("/all")
//    public List<UserInfo> getAllLeads() {
//        return service.getAllLeads();
//    }
//}








package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/lead")
@CrossOrigin(origins = "http://localhost:4200")
public class UserInfoController {

    @Autowired
    private UserInfoService service;

    // =======================
    //  POST – SAVE LEAD
    // =======================
    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> saveLead(@RequestBody UserInfo user) {
        System.out.println("\n📥 Received POST /api/lead/save");

        Map<String, Object> response = new HashMap<>();

        try {
            UserInfo savedUser = service.saveUser(user);

            response.put("success", true);
            response.put("message", "Lead saved successfully");
            response.put("auto_generated_id", savedUser.getIrLeadId());
            response.put("status", savedUser.getIrLeadStatus());
            response.put("database_id", savedUser.getIrLeadSeqId());
            response.put("timestamp", LocalDateTime.now());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.status(500).body(response);
        }
    }

    // Optional: raw map → UserInfo
    @PostMapping("/save-any")
    public ResponseEntity<?> saveAny(@RequestBody Map<String, Object> data) {
        System.out.println("📥 Raw data: " + data);

        UserInfo user = new UserInfo();
        if (data.containsKey("contact")) {
            user.setIrLeadContactNo(data.get("contact").toString());
        }
        if (data.containsKey("name")) {
            user.setIrLeadName(data.get("name").toString());
        }
        if (data.containsKey("email")) {
            user.setIrLeadEmail(data.get("email").toString());
        }

        UserInfo saved = service.saveUser(user);

        return ResponseEntity.ok(Map.of(
                "id", saved.getIrLeadId(),
                "status", saved.getIrLeadStatus(),
                "message", "Saved with auto-generated ID"
        ));
    }

    // =======================
    //  GET – SUMMARY (date optional)
    //  /api/lead/summary?from=yyyy-MM-dd&to=yyyy-MM-dd
    // =======================
    @GetMapping("/summary")
    public Map<String, Long> getLeadSummary(
            @RequestParam(required = false) String from,
            @RequestParam(required = false) String to
    ) {
        return service.getSummary(from, to);
    }

    // =======================
    //  GET – ALL LEADS (date optional)
    //  /api/lead/all?from=yyyy-MM-dd&to=yyyy-MM-dd
    // =======================
    @GetMapping("/all")
    public List<UserInfo> getAllLeads(
            @RequestParam(required = false) String from,
            @RequestParam(required = false) String to
    ) {
        return service.getAllLeads(from, to);
    }
}