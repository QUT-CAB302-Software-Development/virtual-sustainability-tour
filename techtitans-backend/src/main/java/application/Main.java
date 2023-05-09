package application;
import application.database.CompanyDatabase;
import application.database.DbConnection;
import application.database.ReviewDatabase;
import application.database.UserDatabase;
import jakarta.servlet.ServletContextListener;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.web.servlet.ServletListenerRegistrationBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;

import java.sql.SQLException;

@SpringBootApplication
public class Main {

	private static String username="sa";
	private static String password="password";
	private static String url="jdbc:h2:file:./techtitans-backend/src/main/data/demo;DB_CLOSE_ON_EXIT=FALSE";

	public static DbConnection dbConnection;


	static {
		try {
			dbConnection = new DbConnection(url, username, password);
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public static UserDatabase userDatabase = new UserDatabase(dbConnection);

	public static ReviewDatabase reviewDatabase = new ReviewDatabase(dbConnection);

	// Main program entry point
	public static void main(String[] args) {

		String url = "jdbc:h2:file:./techtitans-backend/src/main/data/demo";
		String username = "sa";
		String password = "password";

		SpringApplication.run(Main.class, args);
		try {
			dbConnection = new DbConnection(url, username, password);
			CompanyDatabase companyDatabase = new CompanyDatabase();
			// Call methods on the DbConnection object to interact with the database
			dbConnection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
