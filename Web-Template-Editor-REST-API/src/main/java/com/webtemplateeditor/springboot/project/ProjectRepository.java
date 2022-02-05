package com.webtemplateeditor.springboot.project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, String> {

	//@Query("DELETE FROM Project WHERE projectId=:projectid")
	//HttpStatus deleteByProjectId(String projectId, HttpStatus ok);

}
