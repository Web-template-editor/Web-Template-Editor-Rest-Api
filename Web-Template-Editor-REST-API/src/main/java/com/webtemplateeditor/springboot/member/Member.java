package com.webtemplateeditor.springboot.member;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.webtemplateeditor.springboot.project.Project;

@Entity
@Table(name = "members")
public class Member {
	@Id
	private long memberId;
	
	
	

	@Column(name = "member_name")
	private String memberName;
	
	@Column(name = "member_github")
	private String memberGithub;
	
	@Column(name = "member_linkedin")
	private String memberLinkedIn;
	
	@Column(name = "member_facebook")
	private String memberFacebook;
	
	@Column(name = "member_instagram")
	private String memberInstagram;
	
	@OneToOne
	@JoinColumn(name = "projectid" )
	private Project project;

	public Member() {
		
	}
	


	public Member(long memberId, String memberName, String memberGithub, String memberLinkedIn, String memberFacebook,
			String memberInstagram, Project project) {
		super();
		this.memberId = memberId;
		this.memberName = memberName;
		this.memberGithub = memberGithub;
		this.memberLinkedIn = memberLinkedIn;
		this.memberFacebook = memberFacebook;
		this.memberInstagram = memberInstagram;
		this.project = project;
	}



	public long getMemberId() {
		return memberId;
	}



	public void setMemberId(long memberId) {
		this.memberId = memberId;
	}



	public String getMemberName() {
		return memberName;
	}



	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}



	public String getMemberGithub() {
		return memberGithub;
	}



	public void setMemberGithub(String memberGithub) {
		this.memberGithub = memberGithub;
	}



	public String getMemberLinkedIn() {
		return memberLinkedIn;
	}



	public void setMemberLinkedIn(String memberLinkedIn) {
		this.memberLinkedIn = memberLinkedIn;
	}



	public String getMemberFacebook() {
		return memberFacebook;
	}



	public void setMemberFacebook(String memberFacebook) {
		this.memberFacebook = memberFacebook;
	}



	public String getMemberInstagram() {
		return memberInstagram;
	}



	public void setMemberInstagram(String memberInstagram) {
		this.memberInstagram = memberInstagram;
	}



	public Project getProject() {
		return project;
	}



	public void setProject(Project project) {
		this.project = project;
	}



}
