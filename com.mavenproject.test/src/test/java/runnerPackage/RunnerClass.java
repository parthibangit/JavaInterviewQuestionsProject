package runnerPackage;


import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import utilityFiles.ObjectRepoReader;


@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/featureFiles",
                 glue = "stepDefinitionFiles",
                 tags = "@api1, @api2, @api3",
                 dryRun = false,
                 monochrome = true,
                 plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-report/report.html"},
                 strict = true
                 )


public class RunnerClass {
	
	@AfterClass
	public static void writeConfig() {
		
		Reporter.loadXMLConfig(new File(ObjectRepoReader.getXMLFile()));		
	}
	

}
