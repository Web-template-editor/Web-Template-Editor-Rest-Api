package com.webtemplateeditor.springboot.project;


import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;




@Entity
@Table(name = "project")
public class Project {
	
	@Id
	private String projectid;
	
	@Column(name = "project_name")
	private String projectName;
	
	@Column(name = "project_description")
	private String projectDescription;
	
	@Column(name = "internal_guide")
	private String internalGuide;
	
	@Column(name = "external_guide")
	private String externalGuide;
	
//	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
//	@JoinColumn(name = "member_id" ,unique = true)
//	private Member member;



	public Project() {

	}



	public Project(String projectid, String projectName, String projectDescription, String internalGuide,
		String externalGuide) {
	super();
	this.projectid = projectid;
	this.projectName = projectName;
	this.projectDescription = projectDescription;
	this.internalGuide = internalGuide;
	this.externalGuide = externalGuide;
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



	public String getProjectid() {
		return projectid;
	}



	public void setProjectid(String projectid) {
		this.projectid = projectid;
	}



	public String getInternalGuide() {
		return internalGuide;
	}



	public void setInternalGuide(String internalGuide) {
		this.internalGuide = internalGuide;
	}



	public String getExternalGuide() {
		return externalGuide;
	}



	public void setExternalGuide(String externalGuide) {
		this.externalGuide = externalGuide;
	}



	





 

    

	

}
