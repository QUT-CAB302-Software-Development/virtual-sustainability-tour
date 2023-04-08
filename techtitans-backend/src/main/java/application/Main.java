package application;


// import oldDatabase.DatabaseConnection;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;

import java.util.Arrays;

@SpringBootApplication
public class Main {


	// Main program entry point
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
		// DatabaseConnection databaseConnection = new DatabaseConnection();
		System.out.println("test123\n");
		
	}

	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {

		return null;
//		return args -> {
//
//			System.out.println("Let's inspect the beans provided by Spring Boot:");
//
//			String[] beanNames = ctx.getBeanDefinitionNames();
//			Arrays.sort(beanNames);
//			for (String beanName : beanNames) {
//				System.out.println(beanName);
//			}
//
//		};
	}

}
