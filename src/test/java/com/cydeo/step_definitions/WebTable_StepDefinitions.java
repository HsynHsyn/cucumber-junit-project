package com.cydeo.step_definitions;

import com.cydeo.pages.WT_LoginPage;
import com.cydeo.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.Map;

public class WebTable_StepDefinitions {

    WT_LoginPage wtLoginPage = new WT_LoginPage();

    @Given("user is on the Web Table app login page")
    public void user_is_on_the_web_table_app_login_page() {
        Driver.getDriver().get("https://web-table-2.cydeo.com/login");

    }

    @When("user enters correct username")
    public void user_enters_correct_username() {

        wtLoginPage.inputUsername.sendKeys("Test");
    }
    @When("user enters correct password")
    public void user_enters_correct_password() {

        wtLoginPage.inputPassword.sendKeys("Tester");

    }

    @When("user clicks to login button")
    public void user_clicks_to_login_button() {
        wtLoginPage.loginButton.click();

    }
    @Then("user should see orders word in the URL")
    public void user_should_see_orders_word_in_the_url() {

        String actualURL = Driver.getDriver().getCurrentUrl();
        String expectedURL = "orders";

        Assert.assertTrue(actualURL.contains(expectedURL));


    }

    @When("user enters {string} username and {string} password")
    public void userEntersUsernameAndPassword(String username, String password) {

        wtLoginPage.inputUsername.sendKeys(username);
        wtLoginPage.inputPassword.sendKeys(password);



    }

    @When("user enters below correct credentials")
    public void userEntersBelowCorrectCredentials(Map<String, String> credentials) {

        wtLoginPage.inputUsername.sendKeys(credentials.get("username"));
        wtLoginPage.inputPassword.sendKeys(credentials.get("password"));

    }

    @Given("user is already logged in to The Web table app")
    public void user_is_already_logged_in_to_the_web_table_app() {

        Driver.getDriver().get("https://web-table-2.cydeo.com/login");
        wtLoginPage.login();

    }
    @When("user is on the Order page")
    public void user_is_on_the_order_page() {



    }
    @Then("user sees below options under product dropdown")
    public void user_sees_below_options_under_product_dropdown(io.cucumber.datatable.DataTable dataTable) {

    }
}
