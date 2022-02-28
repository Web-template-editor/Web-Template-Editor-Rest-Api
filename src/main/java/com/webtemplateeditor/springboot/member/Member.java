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
	
	
	

	@Column(name = "member_name",length = 1000)
	private String memberName;
	
	@Column(name = "member_github",length = 5000)
	private String memberGithub;
	
	@Column(name = "member_linkedin",length = 5000)
	private String memberLinkedIn;
	
	@Column(name = "member_facebook",length = 5000)
	private String memberFacebook;
	
	@Column(name = "member_email",length = 1000)
	private String memberEmail;
	
	@Column(name = "member_mobile")
	private String memberMobile;
	
	@OneToOne
	@JoinColumn(name = "projectid" )
	private Project project;

	public Member() {
		
	}

	public Member(long memberId, String memberName, String memberGithub, String memberLinkedIn, String memberFacebook,
			String memberEmail, String memberMobile, Project project) {
		super();
		this.memberId = memberId;
		this.memberName = memberName;
		this.memberGithub = memberGithub;
		this.memberLinkedIn = memberLinkedIn;
		this.memberFacebook = memberFacebook;
		this.memberEmail = memberEmail;
		this.memberMobile = memberMobile;
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

	public String getMemberEmail() {
		return memberEmail;
	}

	public void setMemberEmail(String memberEmail) {
		this.memberEmail = memberEmail;
	}

	public String getMemberMobile() {
		return memberMobile;
	}

	public void setMemberMobile(String memberMobile) {
		this.memberMobile = memberMobile;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}
	


	




}
