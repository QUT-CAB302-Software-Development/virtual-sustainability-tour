package database;
import java.sql.*;
import java.util.List;

// Establishes the database connection and saves file.
public class DbConnection {
    private static Connection connection;

    // Constructor which establishes DbConnection and creates a table if it does not exist
    public DbConnection(String url, String username, String password) throws SQLException {
        connection = DriverManager.getConnection(url, username, password);
        createTableIfNotExists();
    }

    //Creates table if does not exist already
    private void createTableIfNotExists() throws SQLException {
        String sql = "CREATE TABLE IF NOT EXISTS users " +
                " name VARCHAR(255), " +
                " username VARCHAR(255), " +
                " phone VARCHAR(255), " +
                " email VARCHAR(255), " +
                " password VARCHAR(255), " +
                " PRIMARY KEY ( email ))";
        Statement stmt = connection.createStatement();
        stmt.execute(sql);
        stmt.close();
    }

    // Takes list of users as parameter and saves into h2 database using sql query. Not sure if static is an issue?
    public static void saveUsers(List<User> users) throws SQLException {
        String sql = "INSERT INTO users (username, phone, name, email, password) " +
                "VALUES (?, ?, ?, ?, ?)";
        PreparedStatement pstmt = connection.prepareStatement(sql);
        for (User user : users) {
            pstmt.setString(1, user.getUsername());
            pstmt.setString(2, user.getPhone());
            pstmt.setString(3, user.getName());
            pstmt.setString(4, user.getEmail());
            pstmt.setString(5, user.getPassword());
            pstmt.executeUpdate();
        }
        pstmt.close();
    }

    public void close() throws SQLException {
        connection.close();
    }

    // Add other methods to interact with the database
}

