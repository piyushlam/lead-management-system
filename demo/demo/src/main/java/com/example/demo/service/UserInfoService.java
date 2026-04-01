//////////////package com.example.demo.service;
//////////////
//////////////import com.example.demo.entity.UserInfo;
//////////////import com.example.demo.repository.UserInfoRepository;
//////////////import org.springframework.stereotype.Service;
//////////////import org.springframework.transaction.annotation.Transactional;
//////////////import java.time.LocalDateTime;
//////////////
//////////////@Service
//////////////@Transactional
//////////////public class UserInfoService {
//////////////
//////////////    private final UserInfoRepository repository;
//////////////    private final LeadIdGeneratorService idGenerator;
//////////////
//////////////    public UserInfoService(UserInfoRepository repository, LeadIdGeneratorService idGenerator) {
//////////////        this.repository = repository;
//////////////        this.idGenerator = idGenerator;
//////////////    }
//////////////
//////////////    public UserInfo saveUser(UserInfo user) {
//////////////        System.out.println("=== STARTING LEAD SAVE PROCESS ===");
//////////////        
//////////////        // STEP 1: Check duplicate contact
//////////////        if (user.getIrLeadContactNo() != null && 
//////////////            !user.getIrLeadContactNo().trim().isEmpty() && 
//////////////            repository.existsByIrLeadContactNo(user.getIrLeadContactNo())) {
//////////////            throw new RuntimeException("Contact number already exists: " + user.getIrLeadContactNo());
//////////////        }
//////////////        
//////////////        // STEP 2: Generate ID
//////////////        String generatedId = idGenerator.generateLeadId();
//////////////        System.out.println("1. Generated Lead ID: " + generatedId);
//////////////        user.setIrLeadId(generatedId);
//////////////        
//////////////        // STEP 3: Set defaults
//////////////        if (user.getIrLeadDtime() == null) {
//////////////            user.setIrLeadDtime(LocalDateTime.now());
//////////////        }
//////////////        
//////////////        if (user.getIrLeadIsTransfer() == null) {
//////////////            user.setIrLeadIsTransfer("No");
//////////////        }
//////////////        
//////////////        // STEP 4: Check for required fields
//////////////        boolean hasContact = user.getIrLeadContactNo() != null && 
//////////////                            !user.getIrLeadContactNo().trim().isEmpty();
//////////////        boolean hasName = user.getIrLeadName() != null && 
//////////////                         !user.getIrLeadName().trim().isEmpty();
//////////////        boolean hasEmail = user.getIrLeadEmail() != null && 
//////////////                          !user.getIrLeadEmail().trim().isEmpty();
//////////////        
//////////////        // STEP 5: Determine status
//////////////        if (hasContact && hasName && hasEmail) {
//////////////            user.setIrLeadStatus("Qualified");
//////////////            System.out.println("2. Status: QUALIFIED (All required fields present)");
//////////////        } else {
//////////////            user.setIrLeadStatus("Unqualified");
//////////////            System.out.println("2. Status: UNQUALIFIED (Missing: " + 
//////////////                (!hasContact ? "Contact, " : "") +
//////////////                (!hasName ? "Name, " : "") +
//////////////                (!hasEmail ? "Email" : "") + ")");
//////////////        }
//////////////        
//////////////        // STEP 6: Save to database
//////////////        try {
//////////////            UserInfo savedUser = repository.save(user);
//////////////            System.out.println("3. ✅ SAVED SUCCESSFULLY");
//////////////            System.out.println("   - Seq ID: " + savedUser.getIrLeadSeqId());
//////////////            System.out.println("   - Lead ID: " + savedUser.getIrLeadId());
//////////////            System.out.println("   - Status: " + savedUser.getIrLeadStatus());
//////////////            System.out.println("=== PROCESS COMPLETE ===");
//////////////            return savedUser;
//////////////        } catch (Exception e) {
//////////////            System.out.println("3. ❌ SAVE FAILED: " + e.getMessage());
//////////////            System.out.println("=== PROCESS FAILED ===");
//////////////            throw e;
//////////////        }
//////////////    }
//////////////    
//////////////    public long getTotalLeadCount() {
//////////////        return repository.count();
//////////////    }
//////////////    
//////////////    public UserInfoRepository getRepository() {
//////////////        return repository;
//////////////    }
//////////////}
////////////
////////////
////////////
////////////
////////////package com.example.demo.service;
////////////
////////////import com.example.demo.entity.UserInfo;
////////////import com.example.demo.repository.UserInfoRepository;
////////////import org.springframework.stereotype.Service;
////////////import org.springframework.transaction.annotation.Transactional;
////////////import java.time.LocalDateTime;
////////////
////////////@Service
////////////@Transactional
////////////public class UserInfoService {
////////////
////////////    private final UserInfoRepository repository;
////////////
////////////    public UserInfoService(UserInfoRepository repository) {
////////////        this.repository = repository;
////////////    }
////////////
////////////    public UserInfo saveUser(UserInfo user) {
////////////        System.out.println("\n=== SAVING LEAD ===");
////////////        
////////////        // Generate ID if not provided
////////////        if (user.getIrLeadId() == null || user.getIrLeadId().trim().isEmpty()) {
////////////            user.setIrLeadId(generateAutoId());
////////////        }
////////////        
////////////        // Set timestamp if not provided
////////////        if (user.getIrLeadDtime() == null) {
////////////            user.setIrLeadDtime(LocalDateTime.now());
////////////        }
////////////        
////////////        // Determine status based on available data
////////////        String status = determineStatus(user);
////////////        user.setIrLeadStatus(status);
////////////        
////////////        System.out.println("Saving with: ID=" + user.getIrLeadId() + 
////////////                          ", Status=" + status + 
////////////                          ", Contact=" + user.getIrLeadContactNo());
////////////        
////////////        // Save to database
////////////        UserInfo savedUser = repository.save(user);
////////////        System.out.println("✅ Saved successfully! Seq ID: " + savedUser.getIrLeadSeqId());
////////////        
////////////        return savedUser;
////////////    }
////////////    
////////////    private String generateAutoId() {
////////////        long count = repository.count();
////////////        return "AUTO-LDR-" + (count + 1) + "-" + System.currentTimeMillis();
////////////    }
////////////    
////////////    private String determineStatus(UserInfo user) {
////////////        // Simple scoring system
////////////        int score = 0;
////////////        
////////////        if (isNotEmpty(user.getIrLeadContactNo())) score += 30;
////////////        if (isNotEmpty(user.getIrLeadName())) score += 25;
////////////        if (isNotEmpty(user.getIrLeadEmail())) score += 25;
////////////        if (isNotEmpty(user.getIrLeadState())) score += 10;
////////////        if (isNotEmpty(user.getIrLeadCity())) score += 10;
////////////        
////////////        // Determine status
////////////        if (score >= 80) return "QUALIFIED";
////////////        if (score >= 30) return "UNQUALIFIED";
////////////        return "LOST";
////////////    }
////////////    
////////////    private boolean isNotEmpty(String value) {
////////////        return value != null && !value.trim().isEmpty();
////////////    }
////////////    
////////////    public long getTotalLeadCount() {
////////////        return repository.count();
////////////    }
////////////}
//////////
//////////
//////////package com.example.demo.service;
//////////
//////////import com.example.demo.entity.UserInfo;
//////////import com.example.demo.repository.UserInfoRepository;
//////////import org.springframework.stereotype.Service;
//////////import org.springframework.transaction.annotation.Transactional;
//////////
//////////@Service
//////////@Transactional
//////////public class UserInfoService {
//////////
//////////    private final UserInfoRepository repository;
//////////
//////////    // Simple constructor - no other dependencies needed
//////////    public UserInfoService(UserInfoRepository repository) {
//////////        this.repository = repository;
//////////    }
//////////
//////////    public UserInfo saveUser(UserInfo user) {
//////////        System.out.println("💾 Saving lead...");
//////////        System.out.println("Received: " + user);
//////////        
//////////        // Just save it - @PrePersist will handle ID generation and status
//////////        UserInfo savedUser = repository.save(user);
//////////        
//////////        System.out.println("✅ Saved successfully!");
//////////        System.out.println("Generated ID: " + savedUser.getIrLeadId());
//////////        System.out.println("Status: " + savedUser.getIrLeadStatus());
//////////        
//////////        return savedUser;
//////////    }
//////////    
//////////    public long getTotalLeadCount() {
//////////        return repository.count();
//////////    }
//////////}
////////
////////
////////
////////
////////
//////////package com.example.demo.service;
//////////
//////////import com.example.demo.entity.UserInfo;
//////////import com.example.demo.repository.UserInfoRepository;
//////////import org.springframework.stereotype.Service;
//////////import org.springframework.transaction.annotation.Transactional;
//////////
//////////import java.time.LocalDate;
//////////import java.time.format.DateTimeFormatter;
//////////import java.util.Optional;
//////////
//////////@Service
//////////@Transactional
//////////public class UserInfoService {
//////////
//////////    private final UserInfoRepository repository;
//////////
//////////    public UserInfoService(UserInfoRepository repository) {
//////////        this.repository = repository;
//////////    }
//////////
//////////    public UserInfo saveUser(UserInfo user) {
//////////
//////////        // 1️⃣ Generate Lead ID (LEAD-YYYYMM-0001)
//////////        String yearMonth = LocalDate.now()
//////////                .format(DateTimeFormatter.ofPattern("yyyyMM"));
//////////
//////////        String prefix = "LEAD-" + yearMonth + "-";
//////////
//////////        Optional<UserInfo> lastLead =
//////////                repository.findLastLeadByMonth(prefix + "%");
//////////
//////////        int nextNumber = 1;
//////////
//////////        if (lastLead.isPresent()) {
//////////            String lastId = lastLead.get().getIrLeadId();
//////////            String lastNumber =
//////////                    lastId.substring(lastId.lastIndexOf("-") + 1);
//////////            nextNumber = Integer.parseInt(lastNumber) + 1;
//////////        }
//////////
//////////        String formattedNumber = String.format("%04d", nextNumber);
//////////        String newLeadId = prefix + formattedNumber;
//////////
//////////        user.setIrLeadId(newLeadId);
//////////
//////////        // 2️⃣ Determine Status
//////////        user.setIrLeadStatus(determineStatus(user));
//////////
//////////        return repository.save(user);
//////////    }
//////////
//////////    private String determineStatus(UserInfo user) {
//////////
//////////        int filled = 0;
//////////
//////////        if (isNotEmpty(user.getIrLeadContactNo())) filled++;
//////////        if (isNotEmpty(user.getIrLeadName())) filled++;
//////////        if (isNotEmpty(user.getIrLeadEmail())) filled++;
//////////        if (isNotEmpty(user.getIrLeadState())) filled++;
//////////        if (isNotEmpty(user.getIrLeadCity())) filled++;
//////////        if (isNotEmpty(user.getIrLeadSource())) filled++;
//////////
//////////        if (filled >= 5) return "QUALIFIED";
//////////        if (filled >= 2) return "UNQUALIFIED";
//////////        return "LOST";
//////////    }
//////////
//////////    private boolean isNotEmpty(String value) {
//////////        return value != null && !value.trim().isEmpty();
//////////    }
//////////
//////////    public long getTotalLeadCount() {
//////////        return repository.count();
//////////    }
//////////}
////////
////////
////////
////////package com.example.demo.service;
////////
////////import com.example.demo.entity.UserInfo;
////////import com.example.demo.repository.UserInfoRepository;
////////import org.springframework.stereotype.Service;
////////import org.springframework.transaction.annotation.Transactional;
////////
////////import java.time.LocalDate;
////////import java.time.format.DateTimeFormatter;
////////import java.util.Optional;
////////
////////@Service
////////@Transactional
////////public class UserInfoService {
////////
////////    private final UserInfoRepository repository;
////////
////////    public UserInfoService(UserInfoRepository repository) {
////////        this.repository = repository;
////////    }
////////
////////    public UserInfo saveUser(UserInfo user) {
////////
////////        // 🔹 1️⃣ Prevent Duplicate Contact Number
////////        if (repository.existsByIrLeadContactNo(user.getIrLeadContactNo())) {
////////            throw new RuntimeException("Lead already exists with this contact number");
////////        }
////////
////////        // 🔹 2️⃣ Generate Lead ID (LEAD-YYYYMM-0001)
////////        String yearMonth = LocalDate.now()
////////                .format(DateTimeFormatter.ofPattern("yyyyMM"));
////////
////////        String prefix = "LEAD-" + yearMonth + "-";
////////
////////        Optional<UserInfo> lastLead =
////////                repository.findLastLeadByMonth(prefix + "%");
////////
////////        int nextNumber = 1;
////////
////////        if (lastLead.isPresent() && lastLead.get().getIrLeadId() != null) {
////////
////////            String lastId = lastLead.get().getIrLeadId();
////////
////////            try {
////////                String lastNumber =
////////                        lastId.substring(lastId.lastIndexOf("-") + 1);
////////
////////                nextNumber = Integer.parseInt(lastNumber) + 1;
////////
////////            } catch (NumberFormatException e) {
////////                nextNumber = 1; // fallback safety
////////            }
////////        }
////////
////////        String formattedNumber = String.format("%04d", nextNumber);
////////        String newLeadId = prefix + formattedNumber;
////////
////////        user.setIrLeadId(newLeadId);
////////
////////        // 🔹 3️⃣ Determine Status
////////        user.setIrLeadStatus(determineStatus(user));
////////
////////        return repository.save(user);
////////    }
////////
////////    // ===============================
////////    // 🔹 STATUS LOGIC
////////    // ===============================
////////
////////    private String determineStatus(UserInfo user) {
////////
////////        int filled = 0;
////////
////////        if (isNotEmpty(user.getIrLeadContactNo())) filled++;
////////        if (isNotEmpty(user.getIrLeadName())) filled++;
////////        if (isNotEmpty(user.getIrLeadEmail())) filled++;
////////        if (isNotEmpty(user.getIrLeadState())) filled++;
////////        if (isNotEmpty(user.getIrLeadCity())) filled++;
////////        if (isNotEmpty(user.getIrLeadSource())) filled++;
////////
////////        if (filled >= 5) return "QUALIFIED";
////////        if (filled >= 2) return "UNQUALIFIED";
////////        return "LOST";
////////    }
////////
////////    private boolean isNotEmpty(String value) {
////////        return value != null && !value.trim().isEmpty();
////////    }
////////
////////    // ===============================
////////    // 🔹 Utility
////////    // ===============================
////////
////////    public long getTotalLeadCount() {
////////        return repository.count();
////////    }
////////}
//////
//////
//////
//////
//////
//////
//////
//////package com.example.demo.service;
//////
//////import com.example.demo.entity.UserInfo;
//////import com.example.demo.repository.UserInfoRepository;
//////import org.springframework.stereotype.Service;
//////import org.springframework.transaction.annotation.Transactional;
//////
//////import java.time.LocalDate;
//////import java.time.format.DateTimeFormatter;
//////import java.util.Optional;
//////
//////@Service
//////@Transactional
//////public class UserInfoService {
//////
//////    private final UserInfoRepository repository;
//////
//////    public UserInfoService(UserInfoRepository repository) {
//////        this.repository = repository;
//////    }
//////
//////    public UserInfo saveUser(UserInfo user) {
//////
//////        // 🔥 Generate Lead ID (LEAD-YYYYMM-0001)
//////        String yearMonth = LocalDate.now()
//////                .format(DateTimeFormatter.ofPattern("yyyyMM"));
//////
//////        String prefix = "LEAD-" + yearMonth + "-";
//////
//////        Optional<UserInfo> lastLead =
//////                repository.findLastLeadByMonth(prefix + "%");
//////
//////        int nextNumber = 1;
//////
//////        if (lastLead.isPresent()) {
//////            String lastId = lastLead.get().getIrLeadId();
//////            String lastNumber =
//////                    lastId.substring(lastId.lastIndexOf("-") + 1);
//////            nextNumber = Integer.parseInt(lastNumber) + 1;
//////        }
//////
//////        String formattedNumber = String.format("%04d", nextNumber);
//////        user.setIrLeadId(prefix + formattedNumber);
//////
//////        // 🔥 STATUS LOGIC
//////        user.setIrLeadStatus(determineStatus(user));
//////
//////        return repository.save(user);
//////    }
//////
//////    private String determineStatus(UserInfo user) {
//////
//////        boolean contact = isNotEmpty(user.getIrLeadContactNo());
//////        boolean name = isNotEmpty(user.getIrLeadName());
//////        boolean email = isNotEmpty(user.getIrLeadEmail());
//////        boolean gender = isNotEmpty(user.getIrLeadGender());
//////        boolean state = isNotEmpty(user.getIrLeadState());
//////        boolean city = isNotEmpty(user.getIrLeadCity());
//////        boolean model = isNotEmpty(user.getIrLeadModl());
//////        boolean source = isNotEmpty(user.getIrLeadSource());
//////        boolean country = isNotEmpty(user.getCountryCode());
//////        boolean corp = isNotEmpty(user.getIrLeadCorpNo());
//////        boolean cmpn = isNotEmpty(user.getIrLeadCmpnNo());
//////        boolean received = isNotEmpty(user.getIrLeadReceivedNo());
//////        boolean upload = isNotEmpty(user.getIrLeadUploadSrc());
//////
//////        boolean allFilled =
//////                contact && name && email && gender &&
//////                state && city && model && source &&
//////                country && corp && cmpn && received && upload;
//////
//////        boolean noneFilled =
//////                !contact && !name && !email && !gender &&
//////                !state && !city && !model && !source &&
//////                !country && !corp && !cmpn && !received && !upload;
//////
//////        if (allFilled) return "QUALIFIED";
//////        if (noneFilled) return "LOST";
//////        return "UNQUALIFIED";
//////    }
//////
//////    private boolean isNotEmpty(String value) {
//////        return value != null && !value.trim().isEmpty();
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
////package com.example.demo.service;
////
////import com.example.demo.entity.UserInfo;
////import com.example.demo.repository.UserInfoRepository;
////import org.springframework.stereotype.Service;
////import org.springframework.transaction.annotation.Transactional;
////
////import java.time.LocalDate;
////import java.time.format.DateTimeFormatter;
////import java.util.HashMap;
////import java.util.List;
////import java.util.Map;
////import java.util.Optional;
////
////@Service
////@Transactional
////public class UserInfoService {
////
////    private final UserInfoRepository repository;
////
////    public UserInfoService(UserInfoRepository repository) {
////        this.repository = repository;
////    }
////
////    // 🔹 SAVE LEAD + AUTO ID + STATUS
////    public UserInfo saveUser(UserInfo user) {
////
////        // 1️⃣ Generate Lead ID (LEAD-YYYYMM-0001)
////        String yearMonth = LocalDate.now()
////                .format(DateTimeFormatter.ofPattern("yyyyMM"));
////
////        String prefix = "LEAD-" + yearMonth + "-";
////
////        Optional<UserInfo> lastLead =
////                repository.findLastLeadByMonth(prefix + "%");
////
////        int nextNumber = 1;
////
////        if (lastLead.isPresent()) {
////            String lastId = lastLead.get().getIrLeadId();          // LEAD-202602-0004
////            String lastNumber =
////                    lastId.substring(lastId.lastIndexOf("-") + 1); // 0004
////            nextNumber = Integer.parseInt(lastNumber) + 1;         // 5
////        }
////
////        String formattedNumber = String.format("%04d", nextNumber); // 0005
////        String newLeadId = prefix + formattedNumber;
////
////        user.setIrLeadId(newLeadId);
////
////        // 2️⃣ Determine Status
////        user.setIrLeadStatus(determineStatus(user));
////
////        return repository.save(user);
////    }
////
////    // 🔹 STATUS LOGIC
////    // sab required filled → QUALIFIED
////    // kuch filled, kuch nahi → UNQUALIFIED
////    // sab empty → LOST
////    private String determineStatus(UserInfo user) {
////
////        boolean hasAny =
////                isNotEmpty(user.getIrLeadContactNo()) ||
////                isNotEmpty(user.getIrLeadName()) ||
////                isNotEmpty(user.getIrLeadEmail()) ||
////                isNotEmpty(user.getIrLeadState()) ||
////                isNotEmpty(user.getIrLeadCity()) ||
////                isNotEmpty(user.getIrLeadSource());
////
////        // kuch bhi nahi bhara
////        if (!hasAny) {
////            return "LOST";
////        }
////
////        // agar koi required field empty hai → UNQUALIFIED
////        if (!isNotEmpty(user.getIrLeadContactNo())) return "UNQUALIFIED";
////        if (!isNotEmpty(user.getIrLeadName()))       return "UNQUALIFIED";
////        if (!isNotEmpty(user.getIrLeadEmail()))      return "UNQUALIFIED";
////        if (!isNotEmpty(user.getIrLeadState()))      return "UNQUALIFIED";
////        if (!isNotEmpty(user.getIrLeadCity()))       return "UNQUALIFIED";
////        if (!isNotEmpty(user.getIrLeadSource()))     return "UNQUALIFIED";
////
////        // sab bhar diya → QUALIFIED
////        return "QUALIFIED";
////    }
////
////    private boolean isNotEmpty(String value) {
////        return value != null && !value.trim().isEmpty();
////    }
////
////    // 🔹 Summary counts – dashboard cards ke liye
////    public Map<String, Long> getSummary() {
////        long total = repository.count();
////        long qualified = repository.countByIrLeadStatus("QUALIFIED");
////        long unqualified = repository.countByIrLeadStatus("UNQUALIFIED");
////        long lost = repository.countByIrLeadStatus("LOST");
////
////        Map<String, Long> map = new HashMap<>();
////        map.put("total", total);
////        map.put("qualified", qualified);
////        map.put("unqualified", unqualified);
////        map.put("lost", lost);
////        return map;
////    }
////
////    // 🔹 All leads (newest first) – dashboard table
////    public List<UserInfo> getAllLeads() {
////        return repository.findAllByOrderByIrLeadDtimeDesc();
////    }
////
////    // 🔹 Status wise list (optional)
////    public List<UserInfo> getLeadsByStatus(String status) {
////        return repository.findByIrLeadStatusOrderByIrLeadDtimeDesc(status);
////    }
////
////    public long getTotalLeadCount() {
////        return repository.count();
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
//package com.example.demo.service;
//
//import com.example.demo.entity.UserInfo;
//import com.example.demo.repository.UserInfoRepository;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.time.LocalDate;
//import java.time.format.DateTimeFormatter;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//import java.util.Optional;
//
//@Service
//@Transactional
//public class UserInfoService {
//
//    private final UserInfoRepository repository;
//
//    public UserInfoService(UserInfoRepository repository) {
//        this.repository = repository;
//    }
//
//    // 🔹 Lead save + ID generate + status logic
//    public UserInfo saveUser(UserInfo user) {
//
//        // 1️⃣ Generate Lead ID (LEAD-YYYYMM-0001)
//        String yearMonth = LocalDate.now()
//                .format(DateTimeFormatter.ofPattern("yyyyMM"));
//
//        String prefix = "LEAD-" + yearMonth + "-";
//
//        Optional<UserInfo> lastLead =
//                repository.findLastLeadByMonth(prefix + "%");
//
//        int nextNumber = 1;
//
//        if (lastLead.isPresent()) {
//            String lastId = lastLead.get().getIrLeadId();
//            String lastNumber =
//                    lastId.substring(lastId.lastIndexOf("-") + 1);
//            nextNumber = Integer.parseInt(lastNumber) + 1;
//        }
//
//        String formattedNumber = String.format("%04d", nextNumber);
//        String newLeadId = prefix + formattedNumber;
//
//        user.setIrLeadId(newLeadId);
//
//        // 2️⃣ Determine Status
//        user.setIrLeadStatus(determineStatus(user));
//
//        return repository.save(user);
//    }
//
//    // =====================
//    //  STATUS LOGIC
//    // =====================
//    private String determineStatus(UserInfo user) {
//
//        int filled = 0;
//
//        if (isNotEmpty(user.getIrLeadContactNo())) filled++;
//        if (isNotEmpty(user.getIrLeadName())) filled++;
//        if (isNotEmpty(user.getIrLeadEmail())) filled++;
//        if (isNotEmpty(user.getIrLeadState())) filled++;
//        if (isNotEmpty(user.getIrLeadCity())) filled++;
//        if (isNotEmpty(user.getIrLeadSource())) filled++;
//
//        // 🔹 Tumhari condition:
//        //  - sab fields filled ⇒ QUALIFIED
//        //  - kuch filled, kuch khaali ⇒ UNQUALIFIED
//        //  - sab khaali ⇒ LOST
//
//        int totalImportantFields = 6;
//
//        if (filled == 0) {
//            return "LOST";
//        } else if (filled == totalImportantFields) {
//            return "QUALIFIED";
//        } else {
//            return "UNQUALIFIED";
//        }
//    }
//
//    private boolean isNotEmpty(String value) {
//        return value != null && !value.trim().isEmpty();
//    }
//
//    // =====================
//    //  DASHBOARD METHODS
//    // =====================
//
//    // ✅ Total, Qualified, Unqualified, Lost ka summary
//    public Map<String, Long> getSummary() {
//        long total = repository.count();
//        long qualified = repository.countByIrLeadStatus("QUALIFIED");
//        long unqualified = repository.countByIrLeadStatus("UNQUALIFIED");
//        long lost = repository.countByIrLeadStatus("LOST");
//
//        Map<String, Long> map = new HashMap<>();
//        map.put("total", total);
//        map.put("qualified", qualified);
//        map.put("unqualified", unqualified);
//        map.put("lost", lost);
//        return map;
//    }
//
//    // ✅ Recent leads list (table ke liye)
//    public List<UserInfo> getAllLeads() {
//        return repository.findAllByOrderByIrLeadDtimeDesc();
//    }
//
//    public long getTotalLeadCount() {
//        return repository.count();
//    }
//}











package com.example.demo.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.UserInfo;
import com.example.demo.repository.UserInfoRepository;

@Service
@Transactional
public class UserInfoService {

    private final UserInfoRepository repository;

    public UserInfoService(UserInfoRepository repository) {
        this.repository = repository;
    }

    // 🔹 Lead save + ID generate + status logic
    public UserInfo saveUser(UserInfo user) {

        // 1️⃣ Generate Lead ID (LEAD-YYYYMM-0001)
        String yearMonth = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMM"));
        String prefix = "LEAD-" + yearMonth + "-";

        Optional<UserInfo> lastLead = repository.findLastLeadByMonth(prefix + "%");

        int nextNumber = 1;
        if (lastLead.isPresent()) {
            String lastId = lastLead.get().getIrLeadId();
            String lastNumber = lastId.substring(lastId.lastIndexOf("-") + 1);
            nextNumber = Integer.parseInt(lastNumber) + 1;
        }

        String formattedNumber = String.format("%04d", nextNumber);
        String newLeadId = prefix + formattedNumber;

        user.setIrLeadId(newLeadId);

        // 2️⃣ Determine Status
        user.setIrLeadStatus(determineStatus(user));

        return repository.save(user);
    }

    // =====================
    //  STATUS LOGIC
    // =====================
    private String determineStatus(UserInfo user) {

        int filled = 0;

        if (isNotEmpty(user.getIrLeadContactNo())) filled++;
        if (isNotEmpty(user.getIrLeadName())) filled++;
        if (isNotEmpty(user.getIrLeadEmail())) filled++;
        if (isNotEmpty(user.getIrLeadState())) filled++;
        if (isNotEmpty(user.getIrLeadCity())) filled++;
        if (isNotEmpty(user.getIrLeadSource())) filled++;

        int totalImportantFields = 6;

        if (filled == 0) return "LOST";
        if (filled == totalImportantFields) return "QUALIFIED";
        return "UNQUALIFIED";
    }

    private boolean isNotEmpty(String value) {
        return value != null && !value.trim().isEmpty();
    }

    // =====================
    //  DASHBOARD METHODS
    // =====================

    // ✅ Summary (optional date range)
    // from/to format: yyyy-MM-dd
    public Map<String, Long> getSummary(String from, String to) {

        boolean hasRange = from != null && !from.isBlank() && to != null && !to.isBlank();

        long total;
        long qualified;
        long unqualified;
        long lost;

        if (!hasRange) {
            total = repository.count();
            qualified = repository.countByIrLeadStatus("QUALIFIED");
            unqualified = repository.countByIrLeadStatus("UNQUALIFIED");
            lost = repository.countByIrLeadStatus("LOST");
        } else {
            LocalDateTime fromDT = LocalDate.parse(from).atStartOfDay();
            LocalDateTime toDT = LocalDate.parse(to).atTime(23, 59, 59);

            total = repository.countByIrLeadDtimeBetween(fromDT, toDT);
            qualified = repository.countByIrLeadStatusAndIrLeadDtimeBetween("QUALIFIED", fromDT, toDT);
            unqualified = repository.countByIrLeadStatusAndIrLeadDtimeBetween("UNQUALIFIED", fromDT, toDT);
            lost = repository.countByIrLeadStatusAndIrLeadDtimeBetween("LOST", fromDT, toDT);
        }

        Map<String, Long> map = new HashMap<>();
        map.put("total", total);
        map.put("qualified", qualified);
        map.put("unqualified", unqualified);
        map.put("lost", lost);
        return map;
    }

    // ✅ All leads (optional date range)
    public List<UserInfo> getAllLeads(String from, String to) {

        boolean hasRange = from != null && !from.isBlank() && to != null && !to.isBlank();

        if (!hasRange) {
            return repository.findAllByOrderByIrLeadDtimeDesc();
        }

        LocalDateTime fromDT = LocalDate.parse(from).atStartOfDay();
        LocalDateTime toDT = LocalDate.parse(to).atTime(23, 59, 59);

        return repository.findByIrLeadDtimeBetweenOrderByIrLeadDtimeDesc(fromDT, toDT);
    }

    public long getTotalLeadCount() {
        return repository.count();
    }
}