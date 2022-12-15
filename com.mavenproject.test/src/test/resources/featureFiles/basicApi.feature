#Author: Parthiban Subburam
#Start Date: 19-03-2020
Feature: Creating user details

	@api1
	Scenario: Create user in application through API
  Given user set up a data for creation
  |Male  |Active|
  When create user through API with token "Bearer 225b80da07ba3f67f173a592b61bf7c441a42897a79fb648da2d1f7fe8152a97"
  Then capture the user response and verify the user details
  And user display the response
  
  @api2
  Scenario Outline: Fetch the user using path parameter
  Given user set path parameters for code <code> 
  When user send the request with "path" parameter
  And user display the response
  
  Examples:
  |code|
  |200|
  |201|
  
  @api3
  Scenario Outline: Fetch the user details using query parameter
  Given user set query parameters for "<name>" and "<status>"
  When user send the request with "query" parameter
  And user display the response
  
  Examples:
  |name |status|
  |vetri|Active|
  |Parthiban|Active|

