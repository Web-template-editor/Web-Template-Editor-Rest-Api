package com.webtemplateeditor.springboot.project;


import java.util.Set;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.webtemplateeditor.springboot.member.Member;
import com.webtemplateeditor.springboot.relationship.Relationship;



@Entity
@Table(name = "project")
public class Project {
	
	@Id
	@Column(name = "project_name")
	private String projectName;
	
	@Column(name = "project_description")
	private String projectDescription;
	

	public Project() {

	}


	public Project(String projectDescription, Member member) {
		super();
		this.projectDescription = projectDescription;
	}


	public String getProjectName() {
		return projectName;
	}


	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}


	public String getProjectDescription() {
		return projectDescription;
	}


	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}


	
	
	@OneToMany(mappedBy = "project")
	Set<Relationship> relationship;




 

    

	

}
