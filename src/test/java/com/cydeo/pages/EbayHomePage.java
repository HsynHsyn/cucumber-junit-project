package com.cydeo.pages;


import com.cydeo.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EbayHomePage {

    public EbayHomePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(linkText = "Sign in")
    public WebElement signInButton;

    @FindBy(id = "userid")
    public WebElement username;

    @FindBy(id = "pass")
    public WebElement password;

    @FindBy(id = "signin-continue-btn")
    public WebElement signInContinueButton1;

      @FindBy(id = "sgnBt")
    public WebElement signInEnterButton;

    @FindBy(id = "gh-ac-box")
    public WebElement searchBox;

    @FindBy(id = "gh-btn")
    public WebElement searchButton;



    public void login(String user, String pass){
        this.username.sendKeys(user);
        this.password.sendKeys(pass);
        this.signInEnterButton.click();
    }

}
