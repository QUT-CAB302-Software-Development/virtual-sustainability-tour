[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/cgVKkZfY)
# Web Application with React, Spring boot, and H2 Database

# PR Documentation:

### Describe your changes

### Issue ticket number and link

### Checklist before requesting a review
- [] I have performed a self-review of my code
- [] I have tested the extensively tested the code
- [] Added comments to code to follow best practice

## Dependencies

This project uses the following dependencies:

- Amazon Corretto 18
- Spring Boot 3.0.4
- Spring H2
- React

## Software Requirements

## Getting Started

To get started, clone this repository and open the project in IntelliJ IDEA Ultimate. Maven will download the required dependencies defined in the `pom.xml` file.

### 1. Configure the Project SDK

To configure the project SDK, goto `File > Project Structure...` and select the `Project` tab. In the `SDK` dropdown, select `corretto-18`. 

If the `corretto-18` SDK is not available, you will need to download and install it. This can be done by clicking the `Add SDK > Download JDK...` button and select `Version: 18`, `Vendor: Amazon Corretto 18.0.2`.

### 2. Running the Application

To run the application, run the `main` method in the `example.application.Main` class, found in `demo/src/main/java/example/application/DemoApplication.java`.

This will start the application on port 8080. You can access the application by navigating to `http://localhost:8080/login` in your browser.

### Project Structure

In this project, the Java code is located in the `src/main/java` directory, and the HTML templates are located in the `src/main/resources/templates` directory. Test files are located in the `src/test/java` directory.
