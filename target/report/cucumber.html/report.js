$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./featureFiles/ERP.feature");
formatter.feature({
  "name": "",
  "description": "as a admin user I want to validate Supplier and Customer Modules",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "As admin I want to Create Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Customers"
    }
  ]
});
formatter.step({
  "name": "user navigates add customer page",
  "keyword": "When "
});
formatter.step({
  "name": "user capture customer number",
  "keyword": "And "
});
formatter.step({
  "name": "user enter customer details \"\u003cName\u003e\",\"\u003cAddress\u003e\",\"\u003cCity\u003e\",\"\u003cCountry\u003e\",\"\u003cPerson\u003e\",\"\u003cPhone\u003e\",\"\u003cEmail\u003e\",\"\u003cMobile\u003e\",\"\u003cNotes\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click add button",
  "keyword": "And "
});
formatter.step({
  "name": "user click confirm button",
  "keyword": "And "
});
formatter.step({
  "name": "user click alert ok button",
  "keyword": "And "
});
formatter.step({
  "name": "user search for customer number",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies customer number in table",
  "keyword": "Then "
});
formatter.step({
  "name": "user close browser",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "Address",
        "City",
        "Country",
        "Person",
        "Phone",
        "Email",
        "Mobile",
        "Notes"
      ]
    },
    {
      "cells": [
        "ajai5",
        "Street2",
        "City2",
        "India",
        "Shankar",
        "1234567892",
        "aj15@j.com",
        "9988776622",
        "I\u0027m content creator"
      ]
    },
    {
      "cells": [
        "ajai6",
        "Street3",
        "City3",
        "India",
        "Shankar",
        "1234567893",
        "aj16@j.com",
        "9988776633",
        "I\u0027m content creator"
      ]
    }
  ]
});
formatter.background({
  "name": "Successful login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPsteps.launchUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username \"admin\" and password \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPsteps.user_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPsteps.dashboard_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "As admin I want to Create Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Customers"
    }
  ]
});
formatter.step({
  "name": "user navigates add customer page",
  "keyword": "When "
});
formatter.match({
  "location": "ERPsteps.user_navigates_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user capture customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_capture_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter customer details \"ajai5\",\"Street2\",\"City2\",\"India\",\"Shankar\",\"1234567892\",\"aj15@j.com\",\"9988776622\",\"I\u0027m content creator\"",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_enter_customer_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_click_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click confirm button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_click_confirm_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click alert ok button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_click_alert_ok_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_search_for_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies customer number in table",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPsteps.user_verifies_customer_number_in_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPsteps.user_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Successful login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPsteps.launchUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username \"admin\" and password \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPsteps.user_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPsteps.dashboard_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "As admin I want to Create Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Customers"
    }
  ]
});
formatter.step({
  "name": "user navigates add customer page",
  "keyword": "When "
});
formatter.match({
  "location": "ERPsteps.user_navigates_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user capture customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_capture_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter customer details \"ajai6\",\"Street3\",\"City3\",\"India\",\"Shankar\",\"1234567893\",\"aj16@j.com\",\"9988776633\",\"I\u0027m content creator\"",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_enter_customer_details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_click_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click confirm button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_click_confirm_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click alert ok button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_click_alert_ok_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPsteps.user_search_for_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies customer number in table",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPsteps.user_verifies_customer_number_in_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPsteps.user_close_browser()"
});
formatter.result({
  "status": "passed"
});
});