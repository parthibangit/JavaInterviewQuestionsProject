package utilityFiles;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ObjectRepoReader {
	
	static Properties property = null;
	
	public static String reader(String key) throws IOException {
		
		File file = new File("testData/objectRepo.property");
		FileInputStream input = new FileInputStream(file);
		property = new Properties();
		property.load(input);
        String value = property.getProperty(key);	
		return value;
	}
	
	public static String getXMLFile() {		
		String xmlPath = property.getProperty("extentConfig");
		return xmlPath;
	}

}
