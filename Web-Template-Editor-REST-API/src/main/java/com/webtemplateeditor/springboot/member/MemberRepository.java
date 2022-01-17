package com.webtemplateeditor.springboot.member;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
	
	@Query("Select u from Member u where u.project.projectName=:c")
	Iterable<Member> findByMemberProjectName(@Param("c") String project_name);

}
