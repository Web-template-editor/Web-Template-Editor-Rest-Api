 package com.webtemplateeditor.springboot.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	public List<Project> getAllProjects(){
		return this.projectrepository.findAll();
	}

	//get employee by id
	@GetMapping("project/{projectid}")
	public ResponseEntity<Project> getAllProjectById(@PathVariable(value="projectid") String projectId) throws ProjectNotFoundException{
			Project project=projectrepository.findById(projectId).orElseThrow(() -> new ProjectNotFoundException("Member is not found for this id::"+projectId));
					return ResponseEntity.ok().body(project);
	}
	
	@PostMapping("project")
	public Project createProject(@RequestBody Project project) {
		
		return this.projectrepository.save(project);
		
	}
	
	@PutMapping("project/{projectid}")
	public ResponseEntity<Project> updateprojectById(@PathVariable(value="projectid") String projectId,@RequestBody Project projectDetails) throws ProjectNotFoundException{
		Project project=projectrepository.findById(projectId).orElseThrow(() -> new ProjectNotFoundException("Member is not found for this id::"+projectId));
		project.setExternalGuide(projectDetails.getExternalGuide());
		project.setProjectid(projectDetails.getProjectid());
		project.setInternalGuide(projectDetails.getInternalGuide());
		project.setProjectDescription(projectDetails.getProjectDescription());
		project.setProjectid(projectDetails.getProjectid());
		project.setProjectName(projectDetails.getProjectName());
		project.setProjectYear(projectDetails.getProjectYear());
				return ResponseEntity.ok(this.projectrepository.save(project));
	}
				
	@DeleteMapping("project/{projectid}")
	  public String deleteProjectById(@PathVariable(value="projectid") String projectId)throws ProjectNotFoundException {
        return projectrepository.findById(projectId)
                .map(project -> {
                	projectrepository.delete(project);
                    return "Delete Successfully!";
                }).orElseThrow(() -> new ProjectNotFoundException("Project not found with id " + projectId));
    }
	
	
	
}
