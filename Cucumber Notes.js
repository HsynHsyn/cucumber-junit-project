AGE OBJECT MODEL DESIGN PATTERN (POM)

What is PAGE OBJECT MODEL DESIGN PATTERN?
- Create a separate .java class for each page of the application.
- Store the web elements in their own java class.
- We can also store any relevant method specific to that page.
- The only imporant structural point of the project we didn't centralize yet was the LOCATORS of our project.
- Using POM Design Pattern now we will centralize our locators (WebElements) in their own respective Java classes.

How are we going to implement POM Design Pattern?

#1- Every time we create a java class for a new page of our application, we will initialize our driver instance with the object of that class.
	- This will ensure, when we use the object of that class, the object will allow us to reach to the WebElements we store in that specific class.

	LoginPage{

		public LoginPage(){
			PageFactory.initElements(driver, this);
		}

	}


#2- Instead of using .findElement() method, we will use @FindBy annotations.

@FindBy(id='locator')
public WebElement searchBar;


------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

MINIMUM VIABLE PRODUCT (MVP)
	- A minimum viable product is a version of a product with just enough features to be usable by early customers who can then provide feedback for future product development.


DATA DRIVEN TESTING

- WHAT IS DATA DRIVEN TESTING (DDT)
	- Executing same tests against different test data.

- WHAT IS DATA DRIVEN FRAMEWORK?
	- DDT Framework is the framework where we are able to read test data from outside of the source code, and execute our tests against different test data.
	- DDT Framework is supposed to be reading the data from outside of source code, such as:
		- MS Excel
		- MS Access
		- Databases
		- Configuration.properties
		- Feature files


- WHAT IS KEYWORD DRIVEN FRAMEWORK
	- Basically we are developing a framework that is build around executable keywords.
	- This requires a lot of time to invest in just to make it work, but also it is hard to maintain, and hard to scale because we have to expand the object repositories and keyword repositories consistently as the project gets bigger.


DEVELOPMENT TYPES

#1- TDD
#2- BDD


#1- TEST DRIVEN DEVELOPMENT (BUG FREE DEVELOPMENT)

	- There are certain repeating steps in TDD.

	#1- Write tests before writing any source code.
	#2- Run the tests and tests wil fail.
	#3- Write minimum amount of code to make the tests pass.
	#4- Run the tests AGAIN, and the tests will PASS.
	#5- REFACTOR AND REPEAT.

	- In TDD, developers are writing @Tests in the preferred programming languagues.
	- Thats why, the non-technical people won't understand the progress in the unit tests and development.
	- That is the reason we will be using the BDD aproach.


#2- BEHAVIOUR DRIVEN DEVELOPMENT (BDD)

	- BDD is an extension of TDD.
	- The general flow of implementation is very similar.

	- There are certain repeating steps in BDD.

	#1- Write SCENARIOS before writing any source code.
	#2- Run the SCENARIOS and SCENARIOS will fail.
	#3- Write minimum amount of code to make the SCENARIOS pass.
	#4- Run the SCENARIOS AGAIN, and the SCENARIOS will PASS.
	#5- REFACTOR AND REPEAT.

	- BDD approach is better to keep communication mistakes to a minimum level.
	- The documentation and scenarios are written in plain English to keep everyone on the same page.

	https://cucumber.io/docs/gherkin/reference/
 

- BDD has 2 different layers to be implemented.

#1- Business layer : FEATURE FILES
	- Feature files will be storing the different features, scenarios, and re-usable steps in Gherkin language.
	- Business side is mostly for collaborating with non-technical people.


	Feature 	: Can define a whole agile story. From 1 agile story we will generate multiple scenarios.
	Scenario 	: Each scenario is created from the agile story we have.
	Step 		: Each step defines the proper execution flow of the scenario we are working on.
		- Each step is re-usable part of our project.
		- We can use the same step in different scenarios in the same feature file or others.


#2- Implementation layer: STEP DEFINITIONS 
	- Technical people implement the "STEP DEFINITIONS" to convert steps (from the feature files) into concrete working actions (using JAVA+SELENIUM in our case)

- WHAT IS THE RUNNING ORDER OF A CUCUMBER BDD PROJECT?
	- Scenarios are executed in the order the we have in the feature files.
	- The steps orders that we provide in the feature file will call the java methods that are assigned to them in the step_definitions package.


- Why are we not using the TESTNG and using JUNIT?
	#1- Because the community is using JUNIT more than TestNG.
		- more questions
		- more answer
		- more demand
		- more opportunities

	#2- We don't need all the annotations that comes from TestNG anyways.


- Is Cucumber a testing tool?
	- No, the Cucumber is not a testing tool.
	- *** It is a BDD implementation tool. ***
	- It does not come with any testing or programming logic.
	- It does not have assertions, that's why we are using cucumber with junit: "cucumber-junit"
	- For programming approach we are using cucumber with java : "cucumber-java"

TestNG 	: Assert.assertTrue(boolean, "option failure message");
JUnit 	: Assert.assertTrue("option failure message", boolean);
-------------------------------------------------------------------------------------------

- HOW DO WE COMMENT IN A FEATURE FILE?
	- We can use the # sign to comment out lines in feature file.

- Can we have same step definition more than once?
	- No we cannot.
	- We can only have 1 definition to each step
	- If we had more than one step definition to same step, that would create confusion for the code and the developer.
	- For this reason, if we have same step definition twice, it wont even compile.


-------------------------------------------------------------------------------------------

- Rest of cucumber expectation

#1- dryRun
#2- tags
#3- html reports
#4- Background
#5- Hooks
#6- Parameterization
#7- dataTables
#8- scenario outlines
#9- parallel testing
#10- report generation

-------------------------------------------------------------------------------------------
dryRun:

	- Basically dryRun turns on and off the running of the step definitions.
	- When I run my Runner class, if I want to execute my step_definitions, I should be turning dryRun off.

- dryRun = true 
	--> it means dryRun is turned on. It will not execute the code, but only check if missing snippet. It will automatically generate snippet in the console for us to use.

- dryRun = false
	--> it means dryRun is turned OFF.
	--> It will execute everything, including Java+Selenium code, and also if any snippets missing it will generate them as well.

- If I don't want to watch all of the scenarios to be executed (open browser, go to google, search for something etc.), and I just want to get my snippet, I will turn the dryRun ON by giving boolean value "true"


-------------------------------------------------------------------------------------------

Multiple ways of generating the snippets

#1- We can generate snippets by running the Runner class. 
	- It will generate snippets with the method names with underscores "method_name()"
	- Also it will generate basic description line "turn above line into concrete actions"
	- Also will have the throw PendingException line as well

#2- We can just hover over the steps that are missing step definitions, and select "create stepdefitions"

-------------------------------------------------------------------------------------------

What is the order of using the reference keywords of Cucumber Gherkin?
	- We have multiple keywords for Cucumber feature files.

	- Given, When, Then, And, But

-> Regardless of the order we write these keys in the feature files, they will just execute the java method behind the step_definitions.
-> Which keyword we use does not change the functionality AT ALL.

--> GIVEN:
	- Given keyword is mostly used for pre-conditions.

ex: 

	Given user is already logged in and on the login page
	Given user is already on the search page
	Given user is already on the login page
	Given user is already on the home page

	Given I am on the login page

	Given student is on the login page

	Given officer is on the home page

	Given driver is on the login page

--> When
	- When is used for when a some action happens

Ex: 

	When user clicks to something
	When user searches for something
	When user enters librarian user name

--> And:
	- And is used when there are repeating steps 

--> But:
	- This is similar to "And", but it is used for mostly negative scenarios or comparing scenarios.

--> Then
	- Then is used for when the verification is happening

Ex: 
	Then user should see title is something
	Then user should see the dashboard
	Then user should see the search results

-------------------------------------------------------------------------------------------
TAGS:
	- Tags are used to create different scenario suites, and execute them in the way we want to execute.
	- We can use tags to include or exclude some scenarios or feature files.

	- If we put a @Tag on top of the Feature file itself, that whole page is marked as that @Tag.
	- If we put a @Tag on top of the Scenario, only that specific scenario is marked as that @Tag. 
	- You can have as many tags as you want for a feature file or a scenario, there is no limit.
	- The tags are CASE SENSTIVE.


- How do we use conditions with tags?

#1- or
#2- and
#3- and not


#1- or
	- "or" keyword can be used as a condition in "tags"
	- We can use "or" if we want to be less specific
	- "or" is similar to "||" in Java.
	- If either one of the sides of the tags are contained the scenario will be executed.


#2- and
	- "and" keyword is used to be more specific
	- Both sides of the tags must be contained for that scenario to be executed.
	- "and" is similar to "&&" in Java.


#3- and not
	- "and not" is used for excluding scenarios

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- WHAT IS THE TRIGGERING POINT OF YOUR FRAMEWORK?
- WHERE DO YOU RUN YOUR FRAMEWORK FROM?
	- The runner class.
	- You can name it anything you want;
		- CukesRunner
		- TestRunner
		- Runner
		- RoadRuner

#1- Runner class should know which type of report will be used
#2- Runner class should know where do we store the feature files
#3- Runner class should know where do we store the step definitions files
#4- Runner class should know which tags we want to run
#5- Runner class should know if we want to execute step_definitions or not (dryRun=true or false)

- How do we generate different types of reports?
	- We pass the "plugin" keyword in the @CucumberOptions
	- Inside the value of the "plugin" we determine the type of the report and where we want to store that report
	- We can also use "publish=true" option coming from Cucumber to generate a report and create a public link for that report for the team.


https://reports.cucumber.io

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

TELL ME ABOUT YOUR FRAMEWORK?

- WHAT IS A FRAMEWORK?
- Frameworks are basically commonly used, and proven approach of
creating file and folder structure, creating smart logic (implementing
design patterns, utilities) to be able to easily handle and maintain
our project

- WHY DO WE NEED TO CREATE A FRAMEWORK?
- Reusability
- Maintainability
- Scalability
- Accessibility
- Managability
- Ease of use
===============================================================
- *** TELL ME ABOUT YOUR FRAMEWORK *** ?
- Basically they want to hear how did you create and structured
your project, and what did you use in it to make it functional,
reusable, scalable etc.

	- What tools we used in our project?
	- Which programming language we used in our project?
	- Which testing tools we used in our project?
	- Which development approach we choose in our project?
	- What kind of folder structure you created, and why?

- I used Java programming language.
- Selenium
- Junit
- Cucumber for BDD
- Cucumber HTML Reports
- Maven

- Design patterns:
	- POM Design Pattern (Pages & WebElements)
	- Singleton Design Pattern (Driver utility)
- Created a package where we stored different types of utility classes
	- BrowserUtils
	- Driver
	- ConfigurationReader
- pom.xml
- configuration.properties

- ***** What does your frameworks folder structure look like?*****
How it started:
-src
	-main
	-java
-pom.xml

How its going:
-src
	-main
	-test
		-java
			-com.cydeo
				-step_definitions
					-Library_StepDefinitions.java
				-runners
					-CukesRunner.java
				-pages
				-utilities
					- Driver.java
					- ConfigurationReader.java
					- BrowserUtils.java
		-resources
			- features
				- Login.feature
			- testData
-pom.xml
-configuration.properties

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- WHAT IS TDD?
- BUG FREE DEVELOPMENT
- WHAT IS THE FLOW OF IMPLEMENTATION FOR TDD?
	#1- Write unit tests
	#2- Run the tests
	#3- Tests will fail
	#4- Write the code to pass the tests
	#5- Run the tests again
	#6- Tests will PASS!
	#7- Refactore and repeat!

- WHAT IS BDD?
	- Behaviour Driven Development
	- BDD is an extension of TDD.
		- What does it mean?
		- It means that the overall implementation flow is very VERY
similar.

- HOW IS BDD IS SIMILAR TO TDD?
	- Instead of writing TESTS, we write SCENARIOS in BDD.
	- We implement in a similar way in the TDD to turn the Scenarios
	into actions
											(using JAVA+SELENIUM+JUNIT)

- WHAT ARE THE 2 LAYERS OF BDD?

	#1 - BUSINESS LAYER

	#2 - IMPLEMENTATION LAYER

		#1- BUSINESS LAYER (- Feature files)

		- Feature files are written in Gherkin language (in Cucumber)which is basically English
		- Technical and non-technical people can read and understand these documents in details.
		- Certain keywords are used to make sense in feature files
		- Feature
		- Scenario
		- Given
		- When
		- Then
		- But
		- And

		#2- IMPLEMENTATION LAYER ( - Step definitions)

		- We are using the preferred programming language and other tools to implement the scenario that are written 
		  in the feature files.
		- We generate snippets and implement them in the step_definitions package

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
- WHAT IS A SNIPPET?

	- Basically unimplemented step definition methods that are
	automatically generated by cucumber for us to implement.
	- Different ways to generate a snippet?

	#1- Run the runner class to generate snippets for unimplemented steps in feature files.
	#2- Hover over with mouse, and select "Create step definition" or "Create all step definitions"
	#3- Put the cursor on the line and use the keyboard shortcuts below
	- MAC : "option + enter"
	- WINDOWS : "alt + enter"

- dryRun
	- If I just want to generate snippets and dont even want to execute the already implemented steps, 
	I can turn dryRun on by passing boolean value true

	- dryRun = true; --> turned on, and will not execute the implemented steps
	- dryRun = false; --> turned off, and will execute the implemented steps

- tags:
	- tags are used to group different scenarios in different test suites.
		- regression
		- smoke
		- @module1
		- @interestCollections

	- we can have as many tags as we want ***
	- and the name doesnt have to make sense
- html reports
	- we can generate reports using "html:target/cucumber-reports.html",

	html: --> determines the type of the report
	target/ --> we are deciding we do we store this report
	cucumber-reports.html --> we are giving the report file a name

---------------------------------------------------------------------------------------
	*** BACKGROUND: ***

	- Background is very similar to @BeforeMethod in TestNG.

	- @BeforeMethod runs before each test in that specific class.

	- Background steps will be executed once before each scenario in that feature file.

	- It will be executed ONCE.

	- It will only work for the scenarios in the same feature file.

	- We need to make sure from where the Background left off, all of the scenarios should be able to pick up and
	 continue with the test execution.
--------------------------------------------------------------------------------------------------------

	*** HOOKS ***

	- Hooks will allow us to create PRE and POST conditions for ALL of the scenarios in our project.
	- Hooks class is separated from the feature file.
	- Because we will be using programming logic, we will store the Hooks class under 'step_definitions' package

- What are the differences between the "Background" and "Hooks"?

	- Background is for the "BUSINESS" side of the BDD. (for the nontechnical people)
	- HOOKS is for the "IMPLEMENTATION" side of the BDD (for the technical people)

- By default:
	- Background only applies to all of the scenario in the same feature file.
	- *** Hooks will apply to all of the scenarios in the PROJECT. ***
	- BUT! We can use @Tags to limit which scenarios these @Before @After will apply.

- If we have more than one @Before @After, we can run them in the order we want them to be executed using
 "order=1". The smaller the number, the earlier it will be executed.

	- @Before : This will be executed before all of the scenarios
	- @After : This will be executed AFTER all of the scenarios
	- @BeforeStep : This will be executed before all of the STEPS in ** ALL OF THE SCENARIOS **
	- @AfterStep : This will be executed AFTER all of the STEPS in ** ALL OF THE SCENARIOS **

	- These method can be used for different types of setups and teardowns
	- opening browser
	- maximizing browser
	- connecting database
	- close connection to database
	- close the browser

	@Before (order = 1)
	public void setupMethod(){
		System.out.println("---> @Before: RUNNING BEFORE EACH SCENARIO");
	}

	@After
	public void teardownMethod(){
		System.out.println("---> @After: RUNNING AFTER EACH SCENARIO");
	}

	@BeforeStep
	public void setupStep(){
		System.out.println("-----> @BeforeSTEP : Running before each step!");
	}

	@AfterStep
		public void teardownStep(){
	System.out.println("-----> @AfterSTEP : Running after each step!");
	}

-----------------------------------------------------------------------------------------------------------















===============================================================



















