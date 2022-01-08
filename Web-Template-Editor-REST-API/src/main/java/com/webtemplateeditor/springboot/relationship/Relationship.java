package com.webtemplateeditor.springboot.relationship;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import com.webtemplateeditor.springboot.member.Member;
import com.webtemplateeditor.springboot.project.Project;


@Embeddable
class Project_MemberKey implements Serializable {

    @Column(name = "project_name")
    String projectName;

    @Column(name = "member_id")
    Long memberId;
    
    
    

	public Project_MemberKey() {
	}

	public Project_MemberKey(String projectName, Long memberId) {
		super();
		this.projectName = projectName;
		this.memberId = memberId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public Long getMemberId() {
		return memberId;
	}

	public void setMemberId(Long memberId) {
		this.memberId = memberId;
	}

  
}

@Entity
public class Relationship {
	
	@EmbeddedId
	Project_MemberKey id;
	
	 @ManyToOne
	    @MapsId("projectName")
	    @JoinColumn(name = "project_name")
	    Project project;
	
	   @ManyToOne
	    @MapsId("memberId")
	    @JoinColumn(name = "member_id",unique = true)
	    Member member;
	   
	   
	   

		public Relationship() {
	}

		public Relationship(Project_MemberKey id, Project project, Member member) {
		super();
		this.id = id;
		this.project = project;
		this.member = member;
	}

		public Project_MemberKey getId() {
			return id;
		}

		public void setId(Project_MemberKey id) {
			this.id = id;
		}

		public Project getProject() {
			return project;
		}

		public void setProject(Project project) {
			this.project = project;
		}

		public Member getMember() {
			return member;
		}

		public void setMember(Member member) {
			this.member = member;
		}
	
	

}
