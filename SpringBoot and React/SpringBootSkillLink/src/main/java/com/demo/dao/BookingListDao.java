package com.demo.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.demo.model.BookingList;
@Repository
public interface BookingListDao extends JpaRepository<BookingList,Integer> {

	@Query(value="select *from BookingList where userid =:userID",nativeQuery=true)
	List<BookingList> getall(int userID);
	
	
	





	@Modifying
	@Query(value = "update BookingList set status=:s where bookingid=:rid", nativeQuery = true)
	int updateStatus(String s, int rid);





	@Transactional
	@Modifying
	@Query(value="delete from userrequirements where reuirement_id=:id",nativeQuery=true)
	int removedata(int id);
	

}
