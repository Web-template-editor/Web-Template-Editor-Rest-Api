package com.webtemplateeditor.springboot.member;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
	
	@Query("Select u from Member u where u.project.projectid=:c")
	Iterable<Member> findByMemberProjectId(@Param("c") String project_id);

}
