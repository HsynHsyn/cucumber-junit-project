package com.cydeo.step_definitions;

import com.cydeo.pages.EbayHomePage;
import com.cydeo.pages.WT_LoginPage;
import com.cydeo.utilities.BrowserUtils;
import com.cydeo.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class Ebay_StepDefinitions {

    EbayHomePage ebayHomePage = new EbayHomePage();


    @Given("User is on eBay home page")
    public void user_is_on_e_bay_home_page() {
        Driver.getDriver().get("https://www.ebay.co.uk/");
        ebayHomePage.signInButton.click();
    }
    @When("User logs in with {string} and {string}")
    public void user_logs_in_with_and(String username , String password) {

        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), Duration.ofSeconds(10));
        //ebayHomePage.login(username,password);
        ebayHomePage.username.sendKeys("primepickings.uk@gmail.com");
        ebayHomePage.signInContinueButton1.click();


        ebayHomePage.password.sendKeys("Hsyn2486.,=");
        ebayHomePage.signInEnterButton.click();

    }
    @When("User searches for {string}")
    public void user_searches_for(String searchTerm) {

        ebayHomePage.searchButton.sendKeys(searchTerm);

    }
    @When("User clicks the search button")
    public void user_clicks_the_search_button() {
        ebayHomePage.searchBox.click();

    }
    @Then("User sees {string} in the search results")
    public void user_sees_in_the_search_results(String searchTerm) {

        //Wooden Spoon for sale | eBay
        BrowserUtils.verifyTitleContains(searchTerm);

    }


}
