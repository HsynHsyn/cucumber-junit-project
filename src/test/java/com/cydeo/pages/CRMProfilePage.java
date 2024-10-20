package com.cydeo.pages;

import com.cydeo.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CRMProfilePage {

    public CRMProfilePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//input[@placeholder='Username or Email']")
    public WebElement username;

    @FindBy(xpath = "//input[@placeholder='Password']")
    public WebElement password;

    @FindBy(css = "input.login-btn")
    public WebElement loginButton;

    @FindBy(xpath = "//span[@id='user-name']")
    public WebElement profilePhoto;

    @FindBy(css = ".user-block.user-block-active")
    public WebElement userBlockActive;

    @FindBy(xpath = "//span[text()='Log out']")
    public WebElement logoutButton;

    @FindBy(xpath = "//div[@class = 'menu-popup-items']")
    public WebElement popupMenu;












}
