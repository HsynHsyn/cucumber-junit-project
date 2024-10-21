package com.cydeo.step_definitions;

import com.cydeo.pages.WikiSearchPage;
import com.cydeo.utilities.BrowserUtils;
import com.cydeo.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class Wiki_StepDefinitions {

    WikiSearchPage wikiSearchPage  = new WikiSearchPage();

    @Given("User is on Wikipedia home page")
    public void user_is_on_wikipedia_home_page() {
        Driver.getDriver().get("https://www.wikipedia.org");
        BrowserUtils.sleep(1);
        if (wikiSearchPage.minimize.isDisplayed()){
            wikiSearchPage.minimize.click();
            wikiSearchPage.closePopup.click();
        }else{
            wikiSearchPage.secondPopup.click();
        }

    }
    @When("User types {string} in the wiki search box")
    public void user_types_in_the_wiki_search_box(String searchValue) {

        wikiSearchPage.searchBox.sendKeys(searchValue);

    }
    @When("User clicks wiki search button")
    public void user_clicks_wiki_search_button() {

        wikiSearchPage.searchButton.click();

    }
    @Then("User sees {string} is in the wiki title")
    public void user_sees_is_in_the_wiki_title(String expectedInTitle) {

        BrowserUtils.verifyTitleContains(expectedInTitle);
    }

    @Then("User sees {string} is in the main header")
    public void userSeesIsInTheMainHeader(String arg0) {

        //String actualText = wikiResultPage.imageHeader.getText();
        //Assert.assertEquals(actualText, expectedText);

       // Assert.assertEquals(wikiResultPage.imageHeader.getText(), expectedText);
    }
}
