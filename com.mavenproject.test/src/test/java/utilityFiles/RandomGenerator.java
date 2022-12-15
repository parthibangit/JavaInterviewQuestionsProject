package utilityFiles;

import org.apache.commons.lang3.RandomStringUtils;

public class RandomGenerator {
	
	public static String getName() {
	   String name = RandomStringUtils.randomAlphabetic(5);
	   return ("FirstName "+name);	   
   }
	
	public static String getEmail() {
	   String amount = RandomStringUtils.randomAlphabetic(2);
	   return ("test."+amount+"@gmail.com");	   
    }

	public static void main(String[] args) {
		
		System.out.println(getName());
		
	}
}
