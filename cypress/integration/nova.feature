Feature: An attempt to break out the nova Java onBoarding API tests within the cypress cucumber framework
    
    I want to post to the security token generator and wrap the response with the onBoarding POST to the onBaording API and get a 200 ok back
    
Scenario: Nova Javascript/Cypress onBoarding API tests within the cypress cucumber framework. Positive Successful test
    Given I have a valid security token
    When I post to the onBoarding API
    Then i get a positive response

Scenario: Nova Javascript/Cypress onBoarding API tests within the cypress cucumber framework. Negative test
    Given I dont have a valid security token
    When I post to the onBoarding API without a valid security token
    Then I get a negative response

Scenario: Nova Javascript/Cypress onBoarding API tests within the cypress cucumber framework. Negative unsuccessful test
    Given I dont have a valid security token but i want this test to pass
    When I post to the onBoarding API
    Then i get a positive response