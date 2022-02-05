package com.webtemplateeditor.springboot.member;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.webtemplateeditor.springboot.project.Project;
import com.webtemplateeditor.springboot.project.ProjectNotFoundException;




@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/members")
public class MemberController {
	
	
	
	@Autowired
	private MemberRepository memberrepository;
	
	//To get all members and details of them
	@GetMapping("member")

	public List<Member> getAllMembers(){
		return this.memberrepository.findAll();
	}
	
	@PostMapping("member")
	public Member createMember(@RequestBody Member member) {
		
		return this.memberrepository.save(member);
		
	}

	//get object by id
	@GetMapping("member/{member_id}")
	public ResponseEntity<Member> getAllMemberById(@PathVariable(value="member_id") Long memberId) throws MemberNotFoundException{
			Member member=memberrepository.findById(memberId).orElseThrow(() -> new MemberNotFoundException("Member is not found for this id::"+memberId));
					return ResponseEntity.ok().body(member);
	}
	
	//Get all objects with a particular project name
	@GetMapping("membersbyprojectname/{project_name}")
	public Iterable<Member> getAllMemberByProjectName(@PathVariable("project_name") String projectName){
		return this.memberrepository.findByMemberProjectName(projectName);
	}
	

	@PutMapping("member/{member_id}")
	public ResponseEntity<Member> updatememberById(@PathVariable(value="member_id") Long memberId,@RequestBody Member memberDetails) throws MemberNotFoundException{
		Member member=memberrepository.findById(memberId).orElseThrow(() -> new MemberNotFoundException("Member is not found for this id::"+memberId));
				member.setMemberFacebook(memberDetails.getMemberFacebook());
				member.setMemberId(memberDetails.getMemberId());
				member.setMemberGithub(memberDetails.getMemberGithub());
				member.setMemberInstagram(memberDetails.getMemberInstagram());
				member.setMemberLinkedIn(memberDetails.getMemberLinkedIn());
				member.setMemberName(memberDetails.getMemberName());
				member.setProject(memberDetails.getProject());
				return ResponseEntity.ok(this.memberrepository.save(member));
	}
	
	@DeleteMapping("memberbyid/{member_id}")
	public Map<String, Boolean> deleteMmeberById(@PathVariable(value="member_id") Long memberId) throws MemberNotFoundException{
		Member member=memberrepository.findById(memberId)
				.orElseThrow(()->new MemberNotFoundException("Member Not Found"+memberId));
		this.memberrepository.delete(member);
		Map<String, Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;	
	}
}
