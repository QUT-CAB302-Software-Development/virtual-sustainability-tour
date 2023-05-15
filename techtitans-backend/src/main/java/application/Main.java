package application;
import application.database.ReviewDatabase;
import application.database.sustainability.CompanyDatabase;
import application.database.DbConnection;
import application.database.UserDatabase;
import application.database.dummy.Fetcher;
import application.model.User;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;

import java.sql.SQLException;
import java.util.List;

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

	public static CompanyDatabase companyDatabase = new CompanyDatabase(dbConnection);

	public static ReviewDatabase reviewDatabase = new ReviewDatabase(dbConnection);

	// Main program entry point
	public static void main(String[] args) {

		String url = "jdbc:h2:file:./techtitans-backend/src/main/data/demo";
		String username = "sa";
		String password = "password";

		Fetcher fetcher = new Fetcher();
		List<User> users = fetcher.fetchUsers();
		System.out.println(users);

		SpringApplication.run(Main.class, args);
		try {
			dbConnection = new DbConnection(url, username, password);
			// Call methods on the DbConnection object to interact with the database
			dbConnection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
