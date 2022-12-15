package utilityFiles;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.specification.RequestSpecification;

public class CommonSpecification {
	
	
	public static RequestSpecification requestBuilder() {
		
		RequestSpecBuilder builder = new RequestSpecBuilder();
		builder.setBaseUri("https://gorest.co.in");
		builder.setBasePath("/public-api/users");
		RequestSpecification specification = builder.build();
		return specification;
		
	}

}
