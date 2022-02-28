package com.webtemplateeditor.springboot.member;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MemberNotFoundException extends Exception  {

	/**
	 * 
	 */

	private static final long serialVersionUID = 1L;
	public MemberNotFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

}