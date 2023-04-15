# Virtual Sustainable Tour / Calculator
2D Map provides accommodation, transportation, and disability accessible data in an interactive environment in Brisbane City (10-20 destinations). A carbon footprint/sustainability rating will be calculated based on their input on the map. The next screen will display a report on the sustainability of the location being visited. An algorithm produces alternative recommendations for destinations, transportations within a radius submitted by the user to help lower the carbon footprint of the trip. There is also an option to explore the space through a 360 degree image of the location.

### Optional Features
3D Map
Login, save location, and share location feature.
Save a group of locations as a whole trip.

## User Stories
1. As a user, I want to view a welcome page so that I can brief myself with the website title & short description.

ACCEPTANCE CRITERIA:
Given I am on a browser, when I visit the webpage, then the website should have no visual bugs on mobile or other aspect ratios.
This front end interface is built in React and has an ETC of 2 hours.

2. As a user in the welcome page, I want to be able to select a button redirecting to the 2D map page, so that I can access the 2D Map.

ACCEPTANCE CRITERIA:
Given there is a button leading to the 2D map page, when I select the button, then I should be redirected to the 2D map page.

3. As a developer, I want to see the github repository, so that I can credit the contributors.

ACCEPTANCE CRITERIA:
Given there is a github icon in the footer of every webpage, when I click on the icon, then I should be redirected to the github repository.
This front end interface is built in React and has an ETC of 2 hours.

4. As a user, I want a 2D map displayed so that I know sustainable destinations in Brisbane City. This will be built with React and Google Maps API. ETC 10 hours.

ACCEPTANCE CRITERIA:
Given I am on the 2D map page, when I hover around the map, then I should see destinations around the map.

5. As a developer, I want to set up a spring boot project, so I can begin working on the backend.

ACCEPTANCE CRITERIA:
A Spring Boot project should be set up with all necessary dependencies and configurations, including H2 database and Spring Data JPA. The project should be able to run and connect to the database.

6. As a developer, I want to create data models for the user in the database.

ACCEPTANCE CRITERIA:
The H2 database is set up. and user data and sql queries and methods are created, which can be used in the future.

7. As a user, I want to select a location in Brisbane so that I can know the details for a particular location.

ACCEPTANCE CRITERIA:
Given I am hovering around the map, when I select a particular location, then the map should display relevant information such as accommodation, transportation, etc.
This is displayed on User story 4, and uses the Google Maps API to store the data in MySQL. Complexity 20-30 hours.

8. As a developer, I want to use APIs from certain websites to scrape data for sustainability metrics for each location.

ACCEPTANCE CRITERIA:
The sustainalytics api is properly set up in javascript React, and the data can be easily called via a functional component to be used.

9. As a developer, I want to use APIs from google maps to scrape all the relevant location data.

ACCEPTANCE CRITERIA:
The google maps api is setup in react, and is put in a component which can be easily called to render the maps data on the screen.

10. As a user, I want to search for specific addresses in Brisbane, so that I can know sustainable information about the address.
A search algorithm is implemented and there is a search bar in which the user can input an address. Their input will be stored in a database using SQL. Database is used to query updated maps info from relevant API. ETC 10 hours.

ACCEPTANCE CRITERIA:

11. As a developer, I want to implement automated testing in my Github project, so that I can ensure that my code is functioning as intended and reduce the risk of introducing bugs.

ACCEPTANCE CRITERIA:
Automated tests should be set up using a testing framework such as JUnit or TestNG. Tests should cover all critical components of the codebase, including edge cases and error handling. Automated tests should be configured to run whenever new code is pushed to the Github repository. Test results should be visible in Github and should include information on which tests passed and failed.
Given I have entered a keyword into the search bar, when I click on “Search”, then the system should display locations relevant to the keyword.

12. As a user, I want to be able to filter my search results on different metrics so I can find results quicker and easier. Most importantly, I want to filter based on sustainability ratings, so I can identify locations within a certain sustainability rating.

ACCEPTANCE CRITERIA:
Given I am on the search bar, when I select the “Filter search” option, then the system should allow me to filter results based on my input.

13. As a user, I want the carbon footprint displayed on a location when I click it so that I know the sustainability rating, picture, location, and other relevant details of that location. Displaying this with React and data from Google Maps API, ETC 10 hours.

ACCEPTANCE CRITERIA:
Given I am on the 2D Map, when I select a location on the map, then the system should display the carbon footprint, sustainability rating, picture, etc. of that location.

14. As a user, I want a menu bar on the top of the web application, so that I can navigate on the application easily to exit a location or page. React, ETC 2 hours.

ACCEPTANCE CRITERIA:
Given I am on the header, when I select the menu bar, then the system should display a dropdown menu.

15. As a user, I want to input a radius around my chosen location, so that I can view alternative locations within my initial chosen area.

ACCEPTANCE CRITERIA:
After I have chosen a location, recommendations around the area with higher sustainability ratings and similar accommodations are shown, with a radius slider which can be dragged by the user.

16. As a user, I want to explore the space I have chosen virtually.

ACCEPTANCE CRITERIA:
Upon selecting the tour button on the location card, I am taken to a page with a 360 degree image of the location, which is interactive. Using React and Google Maps API to access the pictures, ETC of 5 hours.

17. As a user, I want to interact with the 360 degree image, so that I can access information about the location.

ACCEPTANCE CRITERIA:
When taken to the 360 degree image, the user should be able to view the eco-friendly rating and other relevant information about the location.

18. As a new user, I want to register so that I can create an account.

ACCEPTANCE CRITERIA:
Given I am on the registration page, when I click on “register”, the system should prompt me to enter my details to register an account.

19. As a registered user, I want to login so that I leave feedback.

ACCEPTANCE CRITERIA:
Given I am on the login page, when I click on “login”, then the system should prompt me to enter my details (username and password).
Given the username and password are valid, when I click on “enter”, then the system should allow me to leave feedback.

20. As a logged-in user, I want to leave feedback, so that I can share my comments.

ACCEPTANCE CRITERIA:
Given I am on the feedback text box, when I click the box, the the system should allow me to input text into the text box.

21. As a logged-in user, I want to share my feedback, so that the developers can receive constructive feedback.

ACCEPTANCE CRITERIA:
Given I have finished inputting my feedback, when I click on “Submit”, then the system should share my comments in the web app.

22. As a developer, I want to implement CI/CD in my Github project using Github Actions, so that I can automate the process of building, testing, and deploying my code.

ACCEPTANCE CRITERIA:
A Github Actions workflow should be set up to automatically build and test the codebase whenever changes are pushed to the repository. The workflow should include steps to compile the code, run automated tests, and generate a build artefact if all tests pass. The build artefact should be automatically deployed to a staging environment if it passes all tests. Deployment to production should be triggered manually or automatically, depending on the project requirements. The workflow should include notifications to the development team if any step fails, including information on which step failed and why.

### Functionalities
Users can search for specific addresses in Brisbane.
Users can view eco-friendly statistics, pictures, and location data.
Users can save their favourite destinations and share them on social media.
Users can view road networks and other road information.
Users can filter their search result based on eco-friendly rating or other criteria.
Users can view transportation options between departure and destination.
Users can view accommodation options at the accommodation and book them through the application.
Users can leave feedback and share their comments.
Users can view feedback from other users.
Users can register and login

### Resources
Google maps location data scraping
https://www.youtube.com/watch?v=UKdQjQX1Pko
OpenStreetMap API or the Mapbox API
Java google maps for reference https://www.youtube.com/watch?v=-ofmjUWQEAI
Custom map with markers https://www.youtube.com/watch?v=CdDXbvBFXLY
Backend user system and sharing https://www.sustainalytics.com/esg-ratings
Build and Deploy a Google Maps Travel Companion Application | React.js
Build an Airbnb Clone with REACT JS for Beginners! https://www.youtube.com/watch?v=BtJeH_-XYaA
Build a Wildfire Tracker With React & NASA API https://www.youtube.com/watch?v=ontX4zfVqK8
Coding Session - Google Maps With React JS https://www.youtube.com/watch?v=5J6fs_BlVC0
Tutorial: Your Virtual Tours on Google Street View https://www.bing.com/videos/search?q=How+To+Create+A+Virtual+Tour+Using+Google+Street+View&docid=603517156508308580&mid=22EFBD48961123DBEA8B22EFBD48961123DBEA8B&view=detail&FORM=VIRE
How to Integrate the Google Maps API into React Applications https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications
