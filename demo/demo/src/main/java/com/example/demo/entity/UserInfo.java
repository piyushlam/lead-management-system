//////////package com.example.demo.entity;
//////////
//////////import jakarta.persistence.*;
//////////import java.time.LocalDateTime;
//////////
//////////@Entity
//////////@Table(name = "user_info")
//////////public class UserInfo {
//////////
//////////    @Id
//////////    @GeneratedValue(strategy = GenerationType.IDENTITY)
//////////    @Column(name = "ir_lead_seq_id")
//////////    private Long irLeadSeqId;
//////////
//////////    @Column(name = "ir_lead_corp_no")
//////////    private String irLeadCorpNo;
//////////
//////////    @Column(name = "ir_lead_cmpn_no")
//////////    private String irLeadCmpnNo;
//////////
//////////    @Column(name = "ir_lead_id", unique = true)
//////////    private String irLeadId;
//////////
//////////    @Column(name = "ir_lead_contact_no", unique = true)
//////////    private String irLeadContactNo;
//////////
//////////    @Column(name = "ir_lead_name")
//////////    private String irLeadName;
//////////
//////////    @Column(name = "ir_lead_gender")
//////////    private String irLeadGender;
//////////
//////////    @Column(name = "ir_lead_email")
//////////    private String irLeadEmail;
//////////
//////////    @Column(name = "ir_lead_state")
//////////    private String irLeadState;
//////////
//////////    @Column(name = "ir_lead_city")
//////////    private String irLeadCity;
//////////
//////////    @Column(name = "ir_lead_modl")
//////////    private String irLeadModl;
//////////
//////////    @Column(name = "ir_lead_source")
//////////    private String irLeadSource;
//////////
//////////    @Column(name = "country_code")
//////////    private String countryCode;
//////////
//////////    @Column(name = "ir_lead_dtime")
//////////    private LocalDateTime irLeadDtime;
//////////
//////////    @Column(name = "ir_lead_is_transfer")
//////////    private String irLeadIsTransfer = "No";
//////////
//////////    @Column(name = "ir_lead_received_no")
//////////    private String irLeadReceivedNo;
//////////
//////////    @Column(name = "ir_lead_upload_src")
//////////    private String irLeadUploadSrc;
//////////
//////////    @Column(name = "ir_lead_status")
//////////    private String irLeadStatus = "Unqualified";
//////////
//////////    // Default constructor
//////////    public UserInfo() {
//////////        this.irLeadDtime = LocalDateTime.now();
//////////    }
//////////
//////////    // Getters and Setters
//////////    public Long getIrLeadSeqId() { 
//////////        return irLeadSeqId; 
//////////    }
//////////    
//////////    public void setIrLeadSeqId(Long irLeadSeqId) { 
//////////        this.irLeadSeqId = irLeadSeqId; 
//////////    }
//////////
//////////    public String getIrLeadCorpNo() { 
//////////        return irLeadCorpNo; 
//////////    }
//////////    
//////////    public void setIrLeadCorpNo(String irLeadCorpNo) { 
//////////        this.irLeadCorpNo = irLeadCorpNo; 
//////////    }
//////////
//////////    public String getIrLeadCmpnNo() { 
//////////        return irLeadCmpnNo; 
//////////    }
//////////    
//////////    public void setIrLeadCmpnNo(String irLeadCmpnNo) { 
//////////        this.irLeadCmpnNo = irLeadCmpnNo; 
//////////    }
//////////
//////////    public String getIrLeadId() { 
//////////        return irLeadId; 
//////////    }
//////////    
//////////    public void setIrLeadId(String irLeadId) { 
//////////        this.irLeadId = irLeadId; 
//////////    }
//////////
//////////    public String getIrLeadContactNo() { 
//////////        return irLeadContactNo; 
//////////    }
//////////    
//////////    public void setIrLeadContactNo(String irLeadContactNo) { 
//////////        this.irLeadContactNo = irLeadContactNo; 
//////////    }
//////////
//////////    public String getIrLeadName() { 
//////////        return irLeadName; 
//////////    }
//////////    
//////////    public void setIrLeadName(String irLeadName) { 
//////////        this.irLeadName = irLeadName; 
//////////    }
//////////
//////////    public String getIrLeadGender() { 
//////////        return irLeadGender; 
//////////    }
//////////    
//////////    public void setIrLeadGender(String irLeadGender) { 
//////////        this.irLeadGender = irLeadGender; 
//////////    }
//////////
//////////    public String getIrLeadEmail() { 
//////////        return irLeadEmail; 
//////////    }
//////////    
//////////    public void setIrLeadEmail(String irLeadEmail) { 
//////////        this.irLeadEmail = irLeadEmail; 
//////////    }
//////////
//////////    public String getIrLeadState() { 
//////////        return irLeadState; 
//////////    }
//////////    
//////////    public void setIrLeadState(String irLeadState) { 
//////////        this.irLeadState = irLeadState; 
//////////    }
//////////
//////////    public String getIrLeadCity() { 
//////////        return irLeadCity; 
//////////    }
//////////    
//////////    public void setIrLeadCity(String irLeadCity) { 
//////////        this.irLeadCity = irLeadCity; 
//////////    }
//////////
//////////    public String getIrLeadModl() { 
//////////        return irLeadModl; 
//////////    }
//////////    
//////////    public void setIrLeadModl(String irLeadModl) { 
//////////        this.irLeadModl = irLeadModl; 
//////////    }
//////////
//////////    public String getIrLeadSource() { 
//////////        return irLeadSource; 
//////////    }
//////////    
//////////    public void setIrLeadSource(String irLeadSource) { 
//////////        this.irLeadSource = irLeadSource; 
//////////    }
//////////
//////////    public String getCountryCode() { 
//////////        return countryCode; 
//////////    }
//////////    
//////////    public void setCountryCode(String countryCode) { 
//////////        this.countryCode = countryCode; 
//////////    }
//////////
//////////    public LocalDateTime getIrLeadDtime() { 
//////////        return irLeadDtime; 
//////////    }
//////////    
//////////    public void setIrLeadDtime(LocalDateTime irLeadDtime) { 
//////////        this.irLeadDtime = irLeadDtime; 
//////////    }
//////////
//////////    public String getIrLeadIsTransfer() { 
//////////        return irLeadIsTransfer; 
//////////    }
//////////    
//////////    public void setIrLeadIsTransfer(String irLeadIsTransfer) { 
//////////        this.irLeadIsTransfer = irLeadIsTransfer; 
//////////    }
//////////
//////////    public String getIrLeadReceivedNo() { 
//////////        return irLeadReceivedNo; 
//////////    }
//////////    
//////////    public void setIrLeadReceivedNo(String irLeadReceivedNo) { 
//////////        this.irLeadReceivedNo = irLeadReceivedNo; 
//////////    }
//////////
//////////    public String getIrLeadUploadSrc() { 
//////////        return irLeadUploadSrc; 
//////////    }
//////////    
//////////    public void setIrLeadUploadSrc(String irLeadUploadSrc) { 
//////////        this.irLeadUploadSrc = irLeadUploadSrc; 
//////////    }
//////////
//////////    public String getIrLeadStatus() { 
//////////        return irLeadStatus; 
//////////    }
//////////    
//////////    public void setIrLeadStatus(String irLeadStatus) { 
//////////        this.irLeadStatus = irLeadStatus; 
//////////    }
//////////
//////////    @Override
//////////    public String toString() {
//////////        return "UserInfo{" +
//////////                "irLeadSeqId=" + irLeadSeqId +
//////////                ", irLeadId='" + irLeadId + '\'' +
//////////                ", irLeadContactNo='" + irLeadContactNo + '\'' +
//////////                ", irLeadName='" + irLeadName + '\'' +
//////////                ", irLeadStatus='" + irLeadStatus + '\'' +
//////////                '}';
//////////    }
//////////}
////////
////////
////////
////////
////////package com.example.demo.entity;
////////
////////import jakarta.persistence.*;
////////import java.time.LocalDateTime;
////////
////////@Entity
////////@Table(name = "user_info")
////////public class UserInfo {
////////
////////    @Id
////////    @GeneratedValue(strategy = GenerationType.IDENTITY)
////////    @Column(name = "ir_lead_seq_id")
////////    private Long irLeadSeqId;
////////
////////    @Column(name = "ir_lead_id")
////////    private String irLeadId;
////////
////////    @Column(name = "ir_lead_corp_no")
////////    private String irLeadCorpNo;
////////
////////    @Column(name = "ir_lead_cmpn_no")
////////    private String irLeadCmpnNo;
////////
////////    @Column(name = "ir_lead_contact_no")
////////    private String irLeadContactNo;
////////
////////    @Column(name = "ir_lead_name")
////////    private String irLeadName;
////////
////////    @Column(name = "ir_lead_gender")
////////    private String irLeadGender;
////////
////////    @Column(name = "ir_lead_email")
////////    private String irLeadEmail;
////////
////////    @Column(name = "ir_lead_state")
////////    private String irLeadState;
////////
////////    @Column(name = "ir_lead_city")
////////    private String irLeadCity;
////////
////////    @Column(name = "ir_lead_modl")
////////    private String irLeadModl;
////////
////////    @Column(name = "ir_lead_source")
////////    private String irLeadSource;
////////
////////    @Column(name = "country_code")
////////    private String countryCode;
////////
////////    @Column(name = "ir_lead_dtime")
////////    private LocalDateTime irLeadDtime;
////////
////////    @Column(name = "ir_lead_is_transfer")
////////    private String irLeadIsTransfer = "No";
////////
////////    @Column(name = "ir_lead_received_no")
////////    private String irLeadReceivedNo;
////////
////////    @Column(name = "ir_lead_upload_src")
////////    private String irLeadUploadSrc;
////////
////////    @Column(name = "ir_lead_status")
////////    private String irLeadStatus = "LOST";
////////
////////    // PrePersist - Runs BEFORE saving to database
////////    @PrePersist
////////    public void prePersist() {
////////        if (this.irLeadId == null || this.irLeadId.trim().isEmpty()) {
////////            // Generate a simple ID if not provided
////////            this.irLeadId = "LDR-AUTO-" + System.currentTimeMillis();
////////        }
////////        if (this.irLeadDtime == null) {
////////            this.irLeadDtime = LocalDateTime.now();
////////        }
////////        if (this.irLeadStatus == null) {
////////            this.irLeadStatus = "LOST";
////////        }
////////    }
////////
////////    // No-args constructor
////////    public UserInfo() {}
////////
////////    // All getters and setters...
////////    public Long getIrLeadSeqId() { return irLeadSeqId; }
////////    public void setIrLeadSeqId(Long irLeadSeqId) { this.irLeadSeqId = irLeadSeqId; }
////////    
////////    public String getIrLeadId() { return irLeadId; }
////////    public void setIrLeadId(String irLeadId) { this.irLeadId = irLeadId; }
////////    
////////    public String getIrLeadContactNo() { return irLeadContactNo; }
////////    public void setIrLeadContactNo(String irLeadContactNo) { this.irLeadContactNo = irLeadContactNo; }
////////    
////////    public String getIrLeadName() { return irLeadName; }
////////    public void setIrLeadName(String irLeadName) { this.irLeadName = irLeadName; }
////////    
////////    public String getIrLeadEmail() { return irLeadEmail; }
////////    public void setIrLeadEmail(String irLeadEmail) { this.irLeadEmail = irLeadEmail; }
////////    
////////    public String getIrLeadStatus() { return irLeadStatus; }
////////    public void setIrLeadStatus(String irLeadStatus) { this.irLeadStatus = irLeadStatus; }
////////    
////////    // ... [All other getters and setters] ...
////////    
////////    @Override
////////    public String toString() {
////////        return "UserInfo{id=" + irLeadSeqId + ", leadId=" + irLeadId + 
////////               ", contact=" + irLeadContactNo + ", name=" + irLeadName + 
////////               ", status=" + irLeadStatus + "}";
////////    }
////////}
//////
//////
//////
//////
//////package com.example.demo.entity;
//////
//////import jakarta.persistence.*;
//////import java.time.LocalDateTime;
//////import java.util.UUID;
//////
//////@Entity
//////@Table(name = "user_info")
//////public class UserInfo {
//////
//////    @Id
//////    @GeneratedValue(strategy = GenerationType.IDENTITY)
//////    @Column(name = "ir_lead_seq_id")
//////    private Long irLeadSeqId;
//////
//////    @Column(name = "ir_lead_id")
//////    private String irLeadId;
//////
//////    @Column(name = "ir_lead_contact_no")
//////    private String irLeadContactNo;
//////
//////    @Column(name = "ir_lead_name")
//////    private String irLeadName;
//////
//////    @Column(name = "ir_lead_email")
//////    private String irLeadEmail;
//////
//////    @Column(name = "ir_lead_state")
//////    private String irLeadState;
//////
//////    @Column(name = "ir_lead_city")
//////    private String irLeadCity;
//////
//////    @Column(name = "ir_lead_source")
//////    private String irLeadSource;
//////
//////    @Column(name = "ir_lead_status")
//////    private String irLeadStatus;
//////
//////    @Column(name = "ir_lead_dtime")
//////    private LocalDateTime irLeadDtime;
//////
//////    @PrePersist
//////    public void prePersist() {
//////        // Auto-generate ID if not provided
//////        if (this.irLeadId == null || this.irLeadId.trim().isEmpty()) {
//////            this.irLeadId = "LDR-" + System.currentTimeMillis();
//////        }
//////        
//////        // Auto-set timestamp
//////        if (this.irLeadDtime == null) {
//////            this.irLeadDtime = LocalDateTime.now();
//////        }
//////        
//////        // Auto-determine status
//////        if (this.irLeadStatus == null) {
//////            this.irLeadStatus = determineStatus();
//////        }
//////    }
//////    
//////    private String determineStatus() {
//////        int filled = 0;
//////        if (isNotEmpty(irLeadContactNo)) filled++;
//////        if (isNotEmpty(irLeadName)) filled++;
//////        if (isNotEmpty(irLeadEmail)) filled++;
//////        if (isNotEmpty(irLeadState)) filled++;
//////        if (isNotEmpty(irLeadCity)) filled++;
//////        if (isNotEmpty(irLeadSource)) filled++;
//////        
//////        if (filled >= 5) return "QUALIFIED";
//////        if (filled >= 2) return "UNQUALIFIED";
//////        return "LOST";
//////    }
//////    
//////    private boolean isNotEmpty(String value) {
//////        return value != null && !value.trim().isEmpty();
//////    }
//////
//////    // Getters and Setters
//////    public Long getIrLeadSeqId() { return irLeadSeqId; }
//////    public void setIrLeadSeqId(Long irLeadSeqId) { this.irLeadSeqId = irLeadSeqId; }
//////    
//////    public String getIrLeadId() { return irLeadId; }
//////    public void setIrLeadId(String irLeadId) { this.irLeadId = irLeadId; }
//////    
//////    public String getIrLeadContactNo() { return irLeadContactNo; }
//////    public void setIrLeadContactNo(String irLeadContactNo) { this.irLeadContactNo = irLeadContactNo; }
//////    
//////    public String getIrLeadName() { return irLeadName; }
//////    public void setIrLeadName(String irLeadName) { this.irLeadName = irLeadName; }
//////    
//////    public String getIrLeadEmail() { return irLeadEmail; }
//////    public void setIrLeadEmail(String irLeadEmail) { this.irLeadEmail = irLeadEmail; }
//////    
//////    public String getIrLeadStatus() { return irLeadStatus; }
//////    public void setIrLeadStatus(String irLeadStatus) { this.irLeadStatus = irLeadStatus; }
//////    
//////    public LocalDateTime getIrLeadDtime() { return irLeadDtime; }
//////    public void setIrLeadDtime(LocalDateTime irLeadDtime) { this.irLeadDtime = irLeadDtime; }
//////    
//////    // ... other getters/setters for optional fields ...
////
////
////
////
////
////
////
////package com.example.demo.entity;
////
////import jakarta.persistence.*;
////import java.time.LocalDateTime;
////
////@Entity
////@Table(name = "user_info")
////public class UserInfo {
////
////    @Id
////    @GeneratedValue(strategy = GenerationType.IDENTITY)
////    @Column(name = "ir_lead_seq_id")
////    private Long irLeadSeqId;
////
////    @Column(name = "ir_lead_id")
////    private String irLeadId;
////
////    @Column(name = "ir_lead_contact_no")
////    private String irLeadContactNo;
////
////    @Column(name = "ir_lead_name")
////    private String irLeadName;
////
////    @Column(name = "ir_lead_email")
////    private String irLeadEmail;
////
////    @Column(name = "ir_lead_state")
////    private String irLeadState;
////
////    @Column(name = "ir_lead_city")
////    private String irLeadCity;
////
////    @Column(name = "ir_lead_source")
////    private String irLeadSource;
////
////    @Column(name = "ir_lead_status")
////    private String irLeadStatus;
////
////    @Column(name = "ir_lead_dtime")
////    private LocalDateTime irLeadDtime;
////
////    // Automatically set timestamp before insert
////    @PrePersist
////    public void setTimestamp() {
////        if (this.irLeadDtime == null) {
////            this.irLeadDtime = LocalDateTime.now();
////        }
////    }
////
////    // ======================
////    // Getters and Setters
////    // ======================
////
////    public Long getIrLeadSeqId() {
////        return irLeadSeqId;
////    }
////
////    public void setIrLeadSeqId(Long irLeadSeqId) {
////        this.irLeadSeqId = irLeadSeqId;
////    }
////
////    public String getIrLeadId() {
////        return irLeadId;
////    }
////
////    public void setIrLeadId(String irLeadId) {
////        this.irLeadId = irLeadId;
////    }
////
////    public String getIrLeadContactNo() {
////        return irLeadContactNo;
////    }
////
////    public void setIrLeadContactNo(String irLeadContactNo) {
////        this.irLeadContactNo = irLeadContactNo;
////    }
////
////    public String getIrLeadName() {
////        return irLeadName;
////    }
////
////    public void setIrLeadName(String irLeadName) {
////        this.irLeadName = irLeadName;
////    }
////
////    public String getIrLeadEmail() {
////        return irLeadEmail;
////    }
////
////    public void setIrLeadEmail(String irLeadEmail) {
////        this.irLeadEmail = irLeadEmail;
////    }
////
////    public String getIrLeadState() {
////        return irLeadState;
////    }
////
////    public void setIrLeadState(String irLeadState) {
////        this.irLeadState = irLeadState;
////    }
////
////    public String getIrLeadCity() {
////        return irLeadCity;
////    }
////
////    public void setIrLeadCity(String irLeadCity) {
////        this.irLeadCity = irLeadCity;
////    }
////
////    public String getIrLeadSource() {
////        return irLeadSource;
////    }
////
////    public void setIrLeadSource(String irLeadSource) {
////        this.irLeadSource = irLeadSource;
////    }
////
////    public String getIrLeadStatus() {
////        return irLeadStatus;
////    }
////
////    public void setIrLeadStatus(String irLeadStatus) {
////        this.irLeadStatus = irLeadStatus;
////    }
////
////    public LocalDateTime getIrLeadDtime() {
////        return irLeadDtime;
////    }
////
////    public void setIrLeadDtime(LocalDateTime irLeadDtime) {
////        this.irLeadDtime = irLeadDtime;
////    }
////}
////
//////}
//
//
//
//
//
//
//package com.example.demo.entity;
//
//import jakarta.persistence.*;
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name = "user_info")
//public class UserInfo {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "ir_lead_seq_id")
//    private Long irLeadSeqId;
//
//    @Column(name = "ir_lead_id")
//    private String irLeadId;
//
//    @Column(name = "ir_lead_contact_no", unique = true)
//    private String irLeadContactNo;
//
//    @Column(name = "ir_lead_name")
//    private String irLeadName;
//
//    @Column(name = "ir_lead_email")
//    private String irLeadEmail;
//
//    @Column(name = "ir_lead_state")
//    private String irLeadState;
//
//    @Column(name = "ir_lead_city")
//    private String irLeadCity;
//
//    @Column(name = "ir_lead_source")
//    private String irLeadSource;
//
//    @Column(name = "ir_lead_status")
//    private String irLeadStatus;
//
//    @Column(name = "ir_lead_dtime")
//    private LocalDateTime irLeadDtime;
//
//    // Automatically set timestamp before insert
//    @PrePersist
//    public void setTimestamp() {
//        if (this.irLeadDtime == null) {
//            this.irLeadDtime = LocalDateTime.now();
//        }
//    }
//
//    // ===== Getters and Setters =====
//
//    public Long getIrLeadSeqId() {
//        return irLeadSeqId;
//    }
//
//    public void setIrLeadSeqId(Long irLeadSeqId) {
//        this.irLeadSeqId = irLeadSeqId;
//    }
//
//    public String getIrLeadId() {
//        return irLeadId;
//    }
//
//    public void setIrLeadId(String irLeadId) {
//        this.irLeadId = irLeadId;
//    }
//
//    public String getIrLeadContactNo() {
//        return irLeadContactNo;
//    }
//
//    public void setIrLeadContactNo(String irLeadContactNo) {
//        this.irLeadContactNo = irLeadContactNo;
//    }
//
//    public String getIrLeadName() {
//        return irLeadName;
//    }
//
//    public void setIrLeadName(String irLeadName) {
//        this.irLeadName = irLeadName;
//    }
//
//    public String getIrLeadEmail() {
//        return irLeadEmail;
//    }
//
//    public void setIrLeadEmail(String irLeadEmail) {
//        this.irLeadEmail = irLeadEmail;
//    }
//
//    public String getIrLeadState() {
//        return irLeadState;
//    }
//
//    public void setIrLeadState(String irLeadState) {
//        this.irLeadState = irLeadState;
//    }
//
//    public String getIrLeadCity() {
//        return irLeadCity;
//    }
//
//    public void setIrLeadCity(String irLeadCity) {
//        this.irLeadCity = irLeadCity;
//    }
//
//    public String getIrLeadSource() {
//        return irLeadSource;
//    }
//
//    public void setIrLeadSource(String irLeadSource) {
//        this.irLeadSource = irLeadSource;
//    }
//
//    public String getIrLeadStatus() {
//        return irLeadStatus;
//    }
//
//    public void setIrLeadStatus(String irLeadStatus) {
//        this.irLeadStatus = irLeadStatus;
//    }
//
//    public LocalDateTime getIrLeadDtime() {
//        return irLeadDtime;
//    }
//
//    public void setIrLeadDtime(LocalDateTime irLeadDtime) {
//        this.irLeadDtime = irLeadDtime;
//    }
//}



package com.example.demo.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_info")
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ir_lead_seq_id")
    private Long irLeadSeqId;

    @Column(name = "ir_lead_id")
    private String irLeadId;

    @Column(name = "ir_lead_contact_no", unique = true)
    private String irLeadContactNo;

    @Column(name = "ir_lead_name")
    private String irLeadName;

    @Column(name = "ir_lead_email")
    private String irLeadEmail;

    @Column(name = "ir_lead_gender")
    private String irLeadGender;

    @Column(name = "ir_lead_state")
    private String irLeadState;

    @Column(name = "ir_lead_city")
    private String irLeadCity;

    @Column(name = "ir_lead_modl")
    private String irLeadModl;

    @Column(name = "ir_lead_source")
    private String irLeadSource;

    @Column(name = "country_code")
    private String countryCode;

    @Column(name = "ir_lead_corp_no")
    private String irLeadCorpNo;

    @Column(name = "ir_lead_cmpn_no")
    private String irLeadCmpnNo;

    @Column(name = "ir_lead_received_no")
    private String irLeadReceivedNo;

    @Column(name = "ir_lead_upload_src")
    private String irLeadUploadSrc;

    @Column(name = "ir_lead_status")
    private String irLeadStatus;

    @Column(name = "ir_lead_dtime")
    private LocalDateTime irLeadDtime;

    @PrePersist
    public void setTimestamp() {
        if (this.irLeadDtime == null) {
            this.irLeadDtime = LocalDateTime.now();
        }
    }

    // ===== GETTERS & SETTERS =====

    public Long getIrLeadSeqId() { return irLeadSeqId; }
    public void setIrLeadSeqId(Long irLeadSeqId) { this.irLeadSeqId = irLeadSeqId; }

    public String getIrLeadId() { return irLeadId; }
    public void setIrLeadId(String irLeadId) { this.irLeadId = irLeadId; }

    public String getIrLeadContactNo() { return irLeadContactNo; }
    public void setIrLeadContactNo(String irLeadContactNo) { this.irLeadContactNo = irLeadContactNo; }

    public String getIrLeadName() { return irLeadName; }
    public void setIrLeadName(String irLeadName) { this.irLeadName = irLeadName; }

    public String getIrLeadEmail() { return irLeadEmail; }
    public void setIrLeadEmail(String irLeadEmail) { this.irLeadEmail = irLeadEmail; }

    public String getIrLeadGender() { return irLeadGender; }
    public void setIrLeadGender(String irLeadGender) { this.irLeadGender = irLeadGender; }

    public String getIrLeadState() { return irLeadState; }
    public void setIrLeadState(String irLeadState) { this.irLeadState = irLeadState; }

    public String getIrLeadCity() { return irLeadCity; }
    public void setIrLeadCity(String irLeadCity) { this.irLeadCity = irLeadCity; }

    public String getIrLeadModl() { return irLeadModl; }
    public void setIrLeadModl(String irLeadModl) { this.irLeadModl = irLeadModl; }

    public String getIrLeadSource() { return irLeadSource; }
    public void setIrLeadSource(String irLeadSource) { this.irLeadSource = irLeadSource; }

    public String getCountryCode() { return countryCode; }
    public void setCountryCode(String countryCode) { this.countryCode = countryCode; }

    public String getIrLeadCorpNo() { return irLeadCorpNo; }
    public void setIrLeadCorpNo(String irLeadCorpNo) { this.irLeadCorpNo = irLeadCorpNo; }

    public String getIrLeadCmpnNo() { return irLeadCmpnNo; }
    public void setIrLeadCmpnNo(String irLeadCmpnNo) { this.irLeadCmpnNo = irLeadCmpnNo; }

    public String getIrLeadReceivedNo() { return irLeadReceivedNo; }
    public void setIrLeadReceivedNo(String irLeadReceivedNo) { this.irLeadReceivedNo = irLeadReceivedNo; }

    public String getIrLeadUploadSrc() { return irLeadUploadSrc; }
    public void setIrLeadUploadSrc(String irLeadUploadSrc) { this.irLeadUploadSrc = irLeadUploadSrc; }

    public String getIrLeadStatus() { return irLeadStatus; }
    public void setIrLeadStatus(String irLeadStatus) { this.irLeadStatus = irLeadStatus; }

    public LocalDateTime getIrLeadDtime() { return irLeadDtime; }
    public void setIrLeadDtime(LocalDateTime irLeadDtime) { this.irLeadDtime = irLeadDtime; }
}
