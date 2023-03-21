# Web Application with Spring Web and Thymeleaf

This is a sample application that demonstrates how to build a web application with Spring Boot and Thymeleaf. This application allows you to sign up for an account, log in, and view a list of users.

It is not required of you to use this application as a starting point for your project. You may choose to start from scratch, or use another sample application as a starting point. This application is provided as a reference for you to use if you find it helpful.

To create a Spring Boot project in IntelliJ IDEA (Ultimate), follow the instructions in the [Create your first Spring application](https://www.jetbrains.com/help/idea/your-first-spring-application.html) tutorial.

## Dependencies

This project uses the following dependencies:

- Amazon Corretto 18
- Spring Boot 3.0.4
- Spring Web
- Thymeleaf

***Note:** Other dependencies may be added to the project as needed.*

## Software Requirements

This project requires the following software:

- IntelliJ IDEA Ultimate
  - Download: https://www.jetbrains.com/idea/download/
  - Obtain a free student license: https://www.jetbrains.com/community/education/#students

*Spring support is only available in IntelliJ IDEA Ultimate. For more information, see [Spring Support in IntelliJ IDEA](https://www.jetbrains.com/help/idea/spring-support.html).*

Additionally, the following software is recommended:

## Getting Started

To get started, clone this repository and open the project in IntelliJ IDEA Ultimate. Maven will download the required dependencies defined in the `pom.xml` file.

### 1. Configure the Project SDK

To configure the project SDK, goto `File > Project Structure...` and select the `Project` tab. In the `SDK` dropdown, select `corretto-18`. 

If the `corretto-18` SDK is not available, you will need to download and install it. This can be done by clicking the `Add SDK > Download JDK...` button and select `Version: 18`, `Vendor: Amazon Corretto 18.0.2`.

### 2. Running the Application

To run the application, run the `main` method in the `example.application.DemoApplication` class, found in `demo/src/main/java/example/application/DemoApplication.java`.

This will start the application on port 8080. You can access the application by navigating to `http://localhost:8080/login` in your browser.

### Project Structure

In this project, the Java code is located in the `src/main/java` directory, and the HTML templates are located in the `src/main/resources/templates` directory. 

Test files are located in the `src/test/java` directory.

## Recommended Tutorials

Please note that this is not an exhaustive list of tutorials. These are just some tutorials that I found helpful when I was learning Spring & Thymeleaf. You may find other tutorials more useful to you, depending on your learning style and your project requirements.

- Videos:
  - [(LinkedIn Learning) Create a Spring Project - by Todd Perkins](https://www.linkedin.com/learning/learning-java-applications-14700256/creating-a-spring-project) - This is a collection of short videos to get you started with Spring & Thymeleaf. We recommend the first 3 videos in this series:
    - Creating a Spring project
    - Building APIs
    - Returning JSON data
  - [(YouTube) Java Web Development: Java Thymeleaf - by LaunchCode](https://www.youtube.com/watch?v=UIetMLyDVjQ&list=PLs5n5nYB22fIVO1nSiNoUTHIbQujdHYuC&index=8) - This is a playlist of tutorials on how to use Spring with Thymeleaf to build a web application. We recommend the following tutorials of this series:
    - Java Hello Spring Part 3: Static Response. You will learn how to create a controller that returns a static view.

- Articles / Guides:
  - [Spring Official Guide](https://spring.io/guides#gettingStarted) - This is the official Spring guide. It is a good place to start if you are new to Spring. They are a bit long, but feel free to focus on the sections that are relevant to your project.
  - [Thymeleaf Official Documentation](https://www.thymeleaf.org/doc/tutorials/3.1/thymeleafspring.html) - This is the official Thymeleaf documentation. It is a good place to start if you are new to Thymeleaf. They are a bit long, so again, feel free to focus on the relevant sections.
  - [Introduction to Using Thymeleaf in Spring](https://www.baeldung.com/thymeleaf-in-spring-mvc) - This is a good article that explains how to use Thymeleaf with Spring MVC.
