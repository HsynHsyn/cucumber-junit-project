package com.cydeo.step_definitions;

import com.cydeo.pages.CRMProfilePage;

import com.cydeo.utilities.BrowserUtils;
import com.cydeo.utilities.Driver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;


public class CRMLogout_StepDefinition {


    CRMProfilePage crmProfilePage = new CRMProfilePage();

    @Given("user logs in with valid credentials")
    public void user_logs_in_with_valid_credentials() {

        Driver.getDriver().get("https://login1.nextbasecrm.com/stream/?login=yes");

        if (crmProfilePage.username.getAttribute("value").equals("helpdesk1@cydeo.com")){
            crmProfilePage.username.clear();
            crmProfilePage.username.sendKeys("helpdesk1@cydeo.com");
            crmProfilePage.password.sendKeys("UserUser");
            crmProfilePage.loginButton.click();
        }

    }

    @When("user navigates to their profile photo")
    public void user_navigates_to_their_profile_photo() {

    }

    @When("clicks on the profile photo")
    public void clicks_on_the_profile_photo() {
        BrowserUtils.sleep(2);
        crmProfilePage.profilePhoto.click();

    }

    @Then("user clicks on the Log out button")
    public void user_clicks_on_the_log_out_button() {
        BrowserUtils.sleep(2);
        crmProfilePage.logoutButton.click();


    }
    @Then("user should be redirected to the login page")
    public void user_should_be_redirected_to_the_login_page() {
        BrowserUtils.verifyTitle("Authorization");

    }

    @Then("user should see exactly five options under the profile name")
    public void user_should_see_exactly_five_options_under_the_profile_name() {

        crmProfilePage.profilePhoto.isDisplayed();

    }

    @When("user clicks the browser's back button")
    public void user_clicks_the_browser_s_back_button() {

        Driver.getDriver().navigate().back();

    }

    @Then("user should still be on the login page")
    public void user_should_still_be_on_the_login_page() {
        BrowserUtils.verifyTitle("Authorization");

    }




}
