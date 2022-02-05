package com.webtemplateeditor.springboot.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/projects")
public class ProjectController {
	
	
	
	@Autowired
	private ProjectRepository projectrepository;
	
	//To get all members and details of them
	@GetMapping("project")

	public List<Project> getAllMembers(){
		return this.projectrepository.findAll();
	}

	//get employee by id
	@GetMapping("project/{projectid}")
	public ResponseEntity<Project> getAllMemberById(@PathVariable(value="projectid") String projectId) throws ProjectNotFoundException{
			Project project=projectrepository.findById(projectId).orElseThrow(() -> new ProjectNotFoundException("Member is not found for this id::"+projectId));
					return ResponseEntity.ok().body(project);
	}
}
