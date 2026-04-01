@tag
Feature:
as a admin user I want to validate Supplier and Customer Modules
Background: Successful login
Given User is on the login page
When User enter username "admin" and password "master"
And clicks on Login button
Then Dashboard should be displayed
@Suppliers
Scenario Outline:
Create Supplier with multiple data
When user navigates add supplier page
And user capture supplier number
And user enter supplier details "<Name>","<Address>","<City>","<Country>","<Person>","<Phone>","<Email>","<Mobile>","<Notes>"
And user click add button
And user click confirm button
And user click alert ok button
And user search for supplier number
Then user verifies supplier number in table
When user close browser
Examples:
|Name|Address|City|Country|Person|Phone|Email|Mobile|Notes|
|Jai2|Street2|City2|India|Shankar|1234567892|j12@j.com|9988776622|I'm minister of external affairs|
|Jai3|Street3|City3|India|Shankar|1234567893|j13@j.com|9988776633|I'm minister of external affairs|
|Jai4|Street4|City4|India|Shankar|1234567894|j14@j.com|9988776644|I'm minister of external affairs|
|Jai2|Street2|City2|India|Shankar|1234567892|j15@j.com|9988776622|I'm minister of external affairs|
|Jai3|Street3|City3|India|Shankar|1234567893|j16@j.com|9988776633|I'm minister of external affairs|
@Customers
Scenario Outline:
As admin I want to Create Customer with multiple data
When user navigates add customer page
And user capture customer number
And user enter customer details "<Name>","<Address>","<City>","<Country>","<Person>","<Phone>","<Email>","<Mobile>","<Notes>"
And user click add button
And user click confirm button
And user click alert ok button
And user search for customer number
Then user verifies customer number in table
When user close browser
Examples:
|Name|Address|City|Country|Person|Phone|Email|Mobile|Notes|
|ajai5|Street2|City2|India|Shankar|1234567892|aj15@j.com|9988776622|I'm content creator|
|ajai6|Street3|City3|India|Shankar|1234567893|aj16@j.com|9988776633|I'm content creator|





