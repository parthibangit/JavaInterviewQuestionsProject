package utilityFiles;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;

import cucumber.api.Scenario;
import cucumber.api.java.Before;

public class ExtentReportConfig {
	
	String path = "./Reports/spark.html";
	String imgPath  = "./Reports/Screenshot.png";
	ExtentReports extent;
	ExtentTest test;                        // Used to generate logs in the report
	ExtentTest node;
	WebDriver driver;
	int count=0;
	
	@BeforeSuite
	public void setUp() {
		ExtentSparkReporter spark = new ExtentSparkReporter("./Reports/spark.html");  // Specify what kind of reports need to generate
		extent = new ExtentReports();       // We set the path where our reports need to generate
		extent.attachReporter(spark);
	}
	
	@Before
	public void nameSetUp(Scenario scenario) {
		test = extent.createTest(this.getClass().getSimpleName());
		scenario.getClass();
	}
	
	@AfterSuite
	public void close() {
		extent.flush();
	}

}
