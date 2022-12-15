package stepDefinitionFiles;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pojoClass.PojoUserCreate;
import utilityFiles.CommonMethods;
import utilityFiles.RandomGenerator;

public class SdCreateUser extends CommonMethods {
	
	public SdCreateUser() throws IOException {
		super();
	}

	PojoUserCreate userClass = new PojoUserCreate();

	@Given("^user set up a data for creation$")
	public void user_set_up_a_data_for_creation(DataTable table) throws Throwable {
	    List<String> list = table.asList(String.class);
	    Iterator<String> itr = list.iterator();
	    String name = RandomGenerator.getName();
	    String email = RandomGenerator.getEmail();
	    userClass.setName(name);
    	userClass.setEmail(email);
	    
	    while(itr.hasNext()) {
	    	userClass.setGender(itr.next());
	    	userClass.setStatus(itr.next());
	    }
	   	    
	}
	
	@When("^create user through API with token \"([^\"]*)\"$")
	public void create_user_through_API_with_token(String token) throws Throwable {
		postMethod(userClass, token, "id");
	}
	
	@Then("^capture the user response and verify the user details$")
	public void capture_the_user_response_and_verify_the_user_details() throws Throwable {
		String userName = userClass.getName();
	    getMethod(userName);
	}
	
	@Then("^user display the response$")
	public void user_display_the_response() throws Throwable {
	    apiLog();
	}
	
	@Given("^user set path parameters for code (\\d+)$")
	public void user_set_path_parameters_for_code(String code) throws Throwable {
	   setPathParameter(code);
	}

	@When("^user send the request with \"([^\"]*)\" parameter$")
	public void user_send_the_request(String parameter) throws Throwable {
		
		if(parameter.equalsIgnoreCase("path")) {
			getPathParameterValues();
		}
		
		else if(parameter.equalsIgnoreCase("query")) {
			getQueryParameterValues();
		}
	   
	}
	

	@Given("^user set query parameters for \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_set_query_parameters_for_and(String name, String status) throws Throwable {
	   setQueryParameter(name, status);
	}
	
	
}
