package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class) //this annotation is used to run runner class with junit
@CucumberOptions(dryRun = false,features = {"./featureFiles/ERP.feature"},monochrome = true,glue={"stepDefination"},
plugin = {"pretty","html:target/report/cucumber.html"},tags = ("@Customers"))
public class AppTest extends AbstractTestNGCucumberTests{

}
