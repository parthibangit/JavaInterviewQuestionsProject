package utilityFiles;

import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;

import java.io.IOException;
import java.util.LinkedHashMap;

import org.testng.Assert;

import io.restassured.response.Response;

public class CommonMethods extends ObjectRepoReader {

	static RequestSpecification spec;
	static RequestSpecification request;
	static Response response;
	static LinkedHashMap<String, String> map;
	static String URI;
	static String path;
	
	
	public CommonMethods() throws IOException {
		URI = ObjectRepoReader.reader("baseURI");
		path = ObjectRepoReader.reader("basePath");
	}


	public static void postMethod(Object body, String token, String id) {
		spec = CommonSpecification.requestBuilder();
		request = given().spec(spec).contentType("application/json").body(body).header("Authorization", token);
		response = request.when().post();
		map = response.then().extract().path("data");	
	}


	public static void getMethod(String userNameField) throws IOException {
		String id = String.valueOf(map.get("id"));
		request = given();
		response = request.when().get(URI+path+"/"+id);
		verifyResponse(response, userNameField);
	}

	public static void updateMethod() {


	}

	public static void deleteMethod() {


	}

	public static void apiLog() {
		response.prettyPrint();
	}

	public static void verifyResponse(Response response, String actual) {

		map = response.then().extract().path("data");
		String expected = map.get("name");
		Assert.assertEquals(actual, expected);

	}
	
	public static void setPathParameter(String code) {	
		request = given().pathParam("code", code);
	}
	
	public static void getPathParameterValues() {
		response = request.get(URI+path+"/{code}");
	}
	

	public static void setQueryParameter(String name, String status) {	
		request = given().queryParam("name", name).queryParam("Status", status);
	}
	
	public static void getQueryParameterValues() {
		response = request.get(URI+path);
	}
	
	
}
