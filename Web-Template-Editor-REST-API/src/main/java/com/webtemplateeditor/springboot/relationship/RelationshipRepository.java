package com.webtemplateeditor.springboot.relationship;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public class RelationshipRepository {
	@Repository
	public interface ProjectRepository extends JpaRepository<Relationship, String> {

}
}
