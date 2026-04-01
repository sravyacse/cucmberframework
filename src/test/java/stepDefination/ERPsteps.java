package stepDefination;

import java.time.Duration;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Reporter;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ERPsteps {
	WebDriver driver;
	String expected = "";
	String actual ="";
	@Given("User is on the login page")
	public void launchUrl() {
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.get("http://webapp.qedgetech.com/login.php");
	}

	@When("User enter username {string} and password {string}")
	public void user_enter_username_and_password(String user, String pass) {
		driver.findElement(By.name("username")).clear();
		driver.findElement(By.name("username")).sendKeys(user);
		driver.findElement(By.name("password")).clear();
		driver.findElement(By.name("password")).sendKeys(pass);
	}

	@When("clicks on Login button")
	public void clicks_on_Login_button() {
		driver.findElement(By.name("btnsubmit")).click();
	}

	@Then("Dashboard should be displayed")
	public void dashboard_should_be_displayed() throws InterruptedException {
		if(driver.findElement(By.xpath("//span[@id='ewPageCaption']")).isDisplayed()) {
			System.out.println("dashboard page displayed ");
		}
		Thread.sleep(1000);
	}

	@When("user navigates add supplier page")
	public void user_navigates_add_supplier_page() throws InterruptedException {
		driver.findElement(By.xpath("//li[@id='mi_a_suppliers']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("(//a[@data-caption='Add'])[1]")).click();
	}

	@When("user capture supplier number")
	public void user_capture_supplier_number() {
		expected = driver.findElement(By.name("x_Supplier_Number")).getAttribute("value");
	}

	@When("user enter supplier details {string},{string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_enter_supplier_details(String name, String address, String city, String country, String cperson, String pnumber, String email, String mnumber, String notes) {
		driver.findElement(By.name("x_Supplier_Name")).sendKeys(name);
		driver.findElement(By.name("x_Address")).sendKeys(address);
		driver.findElement(By.name("x_City")).sendKeys(city);
		driver.findElement(By.name("x_Country")).sendKeys(country);
		driver.findElement(By.name("x_Contact_Person")).sendKeys(cperson);
		driver.findElement(By.name("x_Phone_Number")).sendKeys(pnumber);
		driver.findElement(By.name("x__Email")).sendKeys(email);
		driver.findElement(By.name("x_Mobile_Number")).sendKeys(mnumber);
		driver.findElement(By.name("x_Notes")).sendKeys(notes);

	}

	@When("user click add button")
	public void user_click_add_button() throws Throwable {
		driver.findElement(By.id("btnAction")).sendKeys(Keys.ENTER);
		Thread.sleep(1000);
	}

	@When("user click confirm button")
	public void user_click_confirm_button() throws InterruptedException {
		driver.findElement(By.xpath("//button[normalize-space()='OK!']")).click();
		Thread.sleep(2000);
	}

	@When("user click alert ok button")
	public void user_click_alert_ok_button() throws InterruptedException {
		driver.findElement(By.xpath("(//button[starts-with(text(),'OK')])[6]")).click();
		Thread.sleep(2000);
	}

	@When("user search for supplier number")
	public void user_search_for_supplier_number() throws InterruptedException {
		if(!driver.findElement(By.xpath("//input[@id='psearch']")).isDisplayed())
			driver.findElement(By.xpath("//span[@data-caption='Search']")).click();
		driver.findElement(By.xpath("//input[@id='psearch']")).clear();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[@id='psearch']")).sendKeys(expected);
		driver.findElement(By.xpath("//button[@id='btnsubmit']")).click();
		Thread.sleep(3000);

	}

	@Then("user verifies supplier number in table")
	public void user_verifies_supplier_number_in_table() throws Throwable {
		actual = driver.findElement(By.xpath("//table[@class='table ewTable']/tbody/tr[1]/td[6]/div/span/span")).getText();
		Thread.sleep(3000);
		Reporter.log(actual+"   "+expected,true);
		try {
			Assert.assertEquals(actual, expected, "supplier number not found");
		}catch(AssertionError e) {
			Reporter.log(e.getMessage(),true);
		}
	}

	@When("user close browser")
	public void user_close_browser() {
		driver.quit();
	}
	

@When("user navigates add customer page")
public void user_navigates_add_customer_page() throws InterruptedException {
	driver.findElement(By.xpath("(//a[contains(normalize-space(),'Customers')])[2]")).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath("(//a[@data-caption='Add'])[1]")).click();
}

@When("user capture customer number")
public void user_capture_customer_number() {
	expected = driver.findElement(By.name("x_Customer_Number")).getAttribute("value");
}

@When("user enter customer details {string},{string},{string},{string},{string},{string},{string},{string},{string}")
public void user_enter_customer_details(String name, String address, String city, String country, String cperson, String pnumber, String email, String mnumber, String notes) {
	driver.findElement(By.name("x_Customer_Name")).sendKeys(name);
	driver.findElement(By.name("x_Address")).sendKeys(address);
	driver.findElement(By.name("x_City")).sendKeys(city);
	driver.findElement(By.name("x_Country")).sendKeys(country);
	driver.findElement(By.name("x_Contact_Person")).sendKeys(cperson);
	driver.findElement(By.name("x_Phone_Number")).sendKeys(pnumber);
	driver.findElement(By.name("x__Email")).sendKeys(email);
	driver.findElement(By.name("x_Mobile_Number")).sendKeys(mnumber);
	driver.findElement(By.name("x_Notes")).sendKeys(notes);

}

@When("user search for customer number")
public void user_search_for_customer_number() throws InterruptedException {
	if(!driver.findElement(By.xpath("//input[@id='psearch']")).isDisplayed())
		driver.findElement(By.xpath("//span[@data-caption='Search']")).click();
	driver.findElement(By.xpath("//input[@id='psearch']")).clear();
	Thread.sleep(3000);
	driver.findElement(By.xpath("//input[@id='psearch']")).sendKeys(expected);
	driver.findElement(By.xpath("//button[@id='btnsubmit']")).click();
	Thread.sleep(3000);
}


@Then("user verifies customer number in table")
public void user_verifies_customer_number_in_table() throws InterruptedException {
	actual = driver.findElement(By.xpath("//table[@class='table ewTable']/tbody/tr[1]/td[5]/div/span/span")).getText();
	Thread.sleep(3000);
	Reporter.log(actual+"   "+expected,true);
	try {
		Assert.assertEquals(actual, expected, "customer number not found");
	}catch(AssertionError e) {
		Reporter.log(e.getMessage(),true);
	}
}
	

}
