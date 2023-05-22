package application;
import application.Exceptions.InvalidMessageException;
import application.database.ReviewDatabase;
import application.database.sustainability.CompanyDatabase;
import application.database.DbConnection;
import application.database.UserDatabase;
import application.database.dummy.Fetcher;
import application.dummyProducts.DummyProduct;
import application.dummyProducts.DummyProductFetcher;
import application.dummyProducts.DummyProducts;
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
	public static void main(String[] args) throws SQLException, InvalidMessageException {

		SpringApplication.run(Main.class, args);

		userDatabase.load();
		reviewDatabase.load();

	}
}
