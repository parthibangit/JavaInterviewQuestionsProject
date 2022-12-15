package pageObjectsFiles;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class PgSeleniumNewFeatures {
	
	
	WebDriver driver;
	
	public void openBrowser() throws InterruptedException {
		WebDriverManager.chromedriver().setup();
		driver= new ChromeDriver();
		driver.get("http://the-internet.herokuapp.com/checkboxes");
		driver.manage().window().maximize();
		Thread.sleep(5000);
	}
	
	
	public void checkTabs() {
		driver.switchTo().newWindow(WindowType.TAB);
        driver.switchTo().newWindow(WindowType.WINDOW);
        System.out.println("New features Tested");
	}
	
	
	public void closeBrowser() {
		driver.quit();
	}

}
