package application;
import application.database.DbConnection;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;

import java.sql.SQLException;

@SpringBootApplication
public class Main {

	public static DbConnection dbConnection;

	// Main program entry point
	public static void main(String[] args) {

		String url = "jdbc:h2:file:./techtitans-backend/src/main/data/demo";
		String username = "sa";
		String password = "password";

		SpringApplication.run(Main.class, args);
		try {
			dbConnection = new DbConnection(url, username, password);
			// Call methods on the DbConnection object to interact with the database
			dbConnection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
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
