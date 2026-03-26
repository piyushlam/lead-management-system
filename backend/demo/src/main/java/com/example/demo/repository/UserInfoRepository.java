////////////////package com.example.demo.repository;
////////////////
////////////////import com.example.demo.entity.UserInfo;
////////////////import org.springframework.data.jpa.repository.JpaRepository;
////////////////import org.springframework.data.jpa.repository.Query;
////////////////import org.springframework.data.repository.query.Param;
////////////////import java.util.Optional;
////////////////
////////////////public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
////////////////    
////////////////    // Check if contact number already exists
////////////////    boolean existsByIrLeadContactNo(String irLeadContactNo);
////////////////    
////////////////    // Find by contact number
////////////////    Optional<UserInfo> findByIrLeadContactNo(String irLeadContactNo);
////////////////    
////////////////    // Find by lead ID
////////////////    Optional<UserInfo> findByIrLeadId(String irLeadId);
////////////////    
////////////////    // Get maximum sequence number for current month
////////////////    @Query("SELECT MAX(CAST(SUBSTRING(u.irLeadId, 7, 4) AS integer)) " +
////////////////           "FROM UserInfo u " +
////////////////           "WHERE u.irLeadId LIKE CONCAT('LDR', :monthPrefix, '%')")
////////////////    Integer findMaxSequenceForMonth(@Param("monthPrefix") String monthPrefix);
////////////////}
//////////////
//////////////
//////////////package com.example.demo.repository;
//////////////
//////////////import com.example.demo.entity.UserInfo;
//////////////import org.springframework.data.jpa.repository.JpaRepository;
//////////////import org.springframework.data.jpa.repository.Query;
//////////////import org.springframework.data.repository.query.Param;
//////////////import java.util.List;
//////////////import java.util.Optional;
//////////////
//////////////public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
//////////////    
//////////////    // Check if contact number already exists
//////////////    boolean existsByIrLeadContactNo(String irLeadContactNo);
//////////////    
//////////////    // Find by contact number
//////////////    Optional<UserInfo> findByIrLeadContactNo(String irLeadContactNo);
//////////////    
//////////////    // Find by lead ID
//////////////    Optional<UserInfo> findByIrLeadId(String irLeadId);
//////////////    
//////////////    // Count by status
//////////////    long countByIrLeadStatus(String status);
//////////////    
//////////////    // Find all by status
//////////////    List<UserInfo> findByIrLeadStatus(String status);
//////////////    
//////////////    // Get leads with low completion
//////////////    @Query("SELECT u FROM UserInfo u WHERE u.irLeadContactNo IS NULL OR u.irLeadName IS NULL OR u.irLeadEmail IS NULL")
//////////////    List<UserInfo> findIncompleteLeads();
//////////////    
//////////////    // Get maximum sequence number for current month
//////////////    @Query("SELECT MAX(CAST(SUBSTRING(u.irLeadId, 7, 4) AS integer)) " +
//////////////           "FROM UserInfo u " +
//////////////           "WHERE u.irLeadId LIKE CONCAT('LDR', :monthPrefix, '%')")
//////////////    Integer findMaxSequenceForMonth(@Param("monthPrefix") String monthPrefix);
//////////////}
////////////
////////////
////////////package com.example.demo.repository;
////////////
////////////import com.example.demo.entity.UserInfo;
////////////import org.springframework.data.jpa.repository.JpaRepository;
////////////
////////////public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
////////////    // No custom queries needed for basic save
////////////}              
//////////
//////////
//////////
//////////
//////////
//////////
//////////package com.example.demo.repository;
//////////
//////////import com.example.demo.entity.UserInfo;
//////////import org.springframework.data.jpa.repository.JpaRepository;
//////////import org.springframework.data.jpa.repository.Query;
//////////
//////////import java.util.Optional;
//////////
//////////public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
//////////
//////////    @Query(value = "SELECT * FROM user_info WHERE ir_lead_id LIKE ?1 ORDER BY ir_lead_seq_id DESC LIMIT 1", nativeQuery = true)
//////////    Optional<UserInfo> findLastLeadByMonth(String prefix);
//////////}
////////
////////
////////
////////
////////import java.util.Optional;
////////import org.springframework.data.jpa.repository.JpaRepository;
////////import org.springframework.data.jpa.repository.Query;
////////
////////public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
////////
////////    boolean existsByIrLeadContactNo(String contactNo);
////////
////////    @Query(value = "SELECT * FROM user_info WHERE ir_lead_id LIKE ?1 ORDER BY ir_lead_id DESC LIMIT 1",
////////            nativeQuery = true)
////////    Optional<UserInfo> findLastLeadByMonth(String prefix);
////////}
//////
//////
//////
//////package com.example.demo.repository;
//////
//////import com.example.demo.entity.UserInfo;
//////import org.springframework.data.jpa.repository.JpaRepository;
//////import org.springframework.data.jpa.repository.Query;
//////
//////import java.util.Optional;
//////
//////public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
//////
//////    boolean existsByIrLeadContactNo(String contactNo);
//////
//////    @Query(value = "SELECT * FROM user_info WHERE ir_lead_id LIKE ?1 ORDER BY ir_lead_id DESC LIMIT 1",
//////            nativeQuery = true)
//////    Optional<UserInfo> findLastLeadByMonth(String prefix);
//////}
//////
////
////
////
////
////
////
////package com.example.demo.repository;
////
////import com.example.demo.entity.UserInfo;
////import org.springframework.data.jpa.repository.JpaRepository;
////import org.springframework.data.jpa.repository.Query;
////
////import java.util.Optional;
////
////public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
////
////    @Query(value = "SELECT * FROM user_info WHERE ir_lead_id LIKE ?1 ORDER BY ir_lead_id DESC LIMIT 1",
////            nativeQuery = true)
////    Optional<UserInfo> findLastLeadByMonth(String prefix);
////}
////
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
//package com.example.demo.repository;
//
//import com.example.demo.entity.UserInfo;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//
//import java.util.List;
//import java.util.Optional;
//
//public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
//
//    // Contact number already exist hai kya (agar kabhi use karna ho)
//    boolean existsByIrLeadContactNo(String contactNo);
//
//    // Last lead id for given month (LEAD-YYYYMM-****)
//    @Query(
//            value = "SELECT * FROM user_info WHERE ir_lead_id LIKE ?1 ORDER BY ir_lead_id DESC LIMIT 1",
//            nativeQuery = true
//    )
//    Optional<UserInfo> findLastLeadByMonth(String prefix);
//
//    // ✅ NEW: status wise count
//    long countByIrLeadStatus(String irLeadStatus);
//
//    // ✅ NEW: status wise list, latest first
//    List<UserInfo> findByIrLeadStatusOrderByIrLeadDtimeDesc(String irLeadStatus);
//
//    // ✅ NEW: all leads, latest first
//    List<UserInfo> findAllByOrderByIrLeadDtimeDesc();
//}
//











package com.example.demo.repository;

import com.example.demo.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {

    boolean existsByIrLeadContactNo(String contactNo);

    @Query(
            value = "SELECT * FROM user_info WHERE ir_lead_id LIKE ?1 ORDER BY ir_lead_id DESC LIMIT 1",
            nativeQuery = true
    )
    Optional<UserInfo> findLastLeadByMonth(String prefix);

    // ✅ Summary counts
    long countByIrLeadStatus(String irLeadStatus);

    // ✅ Recent leads (latest first)
    List<UserInfo> findAllByOrderByIrLeadDtimeDesc();

    // ✅ Date range list
    List<UserInfo> findByIrLeadDtimeBetweenOrderByIrLeadDtimeDesc(LocalDateTime from, LocalDateTime to);

    // ✅ Date range counts
    long countByIrLeadDtimeBetween(LocalDateTime from, LocalDateTime to);

    long countByIrLeadStatusAndIrLeadDtimeBetween(String status, LocalDateTime from, LocalDateTime to);
}
