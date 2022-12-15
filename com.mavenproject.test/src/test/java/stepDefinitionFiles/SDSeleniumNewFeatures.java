package stepDefinitionFiles;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import pageObjectsFiles.PgSeleniumNewFeatures;

public class SDSeleniumNewFeatures extends PgSeleniumNewFeatures {

	
	@Given("^User open the browser$")
	public void user_open_the_browser() throws Throwable {
	   super.openBrowser(); 
	}

	@When("^User check the selenium new tab features$")
	public void user_check_the_selenium_new_tab_features() throws Throwable {
	    super.checkTabs();
	}

	@Then("^User close the browser$")
	public void user_close_the_browser() throws Throwable {
		super.closeBrowser();
	}

}
