package com.webtemplateeditor.springboot.relationship;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webtemplateeditor.springboot.project.Project;
import com.webtemplateeditor.springboot.project.ProjectNotFoundException;




@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/relations")

public class RelationshipController {
	
	
	
	
	@Autowired
	private RelationshipRepository relationshiprepository;
	
	//To get all members and details of them
	@GetMapping("project")

	public List<Relationship> getAllRelations(){
		return this.relationshiprepository.findAll();
	}
	
	//get employee by id
	@GetMapping("project/{project_name}")
	public Iterable<Relationship> getAllRelationsById(@PathVariable(value="project_name") String projectName){
		
		return this.relationshiprepository.findAllByIdProjectName(projectName);
	}
	
	}


