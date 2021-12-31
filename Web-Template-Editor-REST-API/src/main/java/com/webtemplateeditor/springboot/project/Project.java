package com.webtemplateeditor.springboot.project;


import javax.persistence.CascadeType;
import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.webtemplateeditor.springboot.member.Member;



@Entity
@Table(name = "project")
public class Project {
	
	@Id
	private String projectName;
	

	
	@Column(name = "project_description")
	private String projectDescription;
	
	
	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn(name = "member_id")
	private Member member;



	public Project() {

	}


	public Project(String projectDescription, Member member) {
		super();
		this.projectDescription = projectDescription;
		this.member = member;
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


	public Member getMember() {
		return member;
	}


	public void setMember(Member member) {
		this.member = member;
	}
	
	





 

    

	

}
