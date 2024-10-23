package com.cydeo.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "html:target/cucumber-reports.html",
                "rerun:target/rerun.txt"
        },
                //html and rerun plugins are standard in Cucumber.
                //PrettyReports is not part of Cucumber's default configuration
                // and requires adding a third-party dependency.

        features = "src/test/resources/features",
        glue = "com/cydeo/step_definitions",
        dryRun = false,
        tags = "", // we can use in here some tags and just run this tag
        publish = true //generating a report with public link
)
public class CukesRunner {}
