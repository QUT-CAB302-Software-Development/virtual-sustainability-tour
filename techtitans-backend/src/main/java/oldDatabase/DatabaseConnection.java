package oldDatabase;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    private Connection conn;

    public DatabaseConnection() {

        // MySQL database information
        String url = "jdbc:mysql://localhost:3306/location_data";
        String username = "root";
        // String password = "";
        String password = "T3cht1t4n5";

        // Establish the database connection
        try {
            // Class.forName("com.mysql.jdbc.Driver");

            conn = DriverManager.getConnection(url, username, password);
            System.out.println("Database connection established successfully.");

        } catch (SQLException e) {
            System.out.println("Error establishing database connection: " + e.getMessage());
        }
    }

    public Connection getConnection() {
        return conn;
    }

    public void closeConnection() {
        try {
            conn.close();
            System.out.println("Database connection closed successfully.");
        } catch (SQLException e) {
            System.out.println("Error closing database connection: " + e.getMessage());
        }
    }
}
