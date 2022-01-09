package com.webtemplateeditor.springboot.member;

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
@RequestMapping("/members")
public class MemberController {
	
	
	
	@Autowired
	private MemberRepository memberrepository;
	
	//To get all members and details of them
	@GetMapping("allmember")

	public List<Member> getAllMembers(){
		return this.memberrepository.findAll();
	}

	//get object by id
	@GetMapping("memberbyid/{member_id}")
	public ResponseEntity<Member> getAllMemberById(@PathVariable(value="member_id") Long memberId) throws MemberNotFoundException{
			Member member=memberrepository.findById(memberId).orElseThrow(() -> new MemberNotFoundException("Member is not found for this id::"+memberId));
					return ResponseEntity.ok().body(member);
	}
	
	//Get all objects with a particular project name
	@GetMapping("membersbyprojectname/{project_name}")
	public Iterable<Member> getAllMemberByProjectName(@PathVariable("project_name") String projectName){
		return this.memberrepository.findByMemberProjectName(projectName);
	}
}
