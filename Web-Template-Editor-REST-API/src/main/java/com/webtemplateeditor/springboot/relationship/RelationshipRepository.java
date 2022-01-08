package com.webtemplateeditor.springboot.relationship;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RelationshipRepository extends JpaRepository<Relationship, Project_MemberKey> {
	Iterable<Relationship> findAllByIdProjectName(String projectName);

}
