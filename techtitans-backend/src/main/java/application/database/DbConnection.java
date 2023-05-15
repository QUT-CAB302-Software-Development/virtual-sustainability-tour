package application.database;
import application.model.User;
import java.sql.*;
import java.util.List;

// Establishes the database connection and saves file.
public class DbConnection {

    private Connection connection;

    // Constructor which establishes DbConnection and creates a table if it does not exist
    public DbConnection(String url, String username, String password) throws SQLException {
        connection = DriverManager.getConnection(url, username, password);
        createTableIfNotExists();
    }

    //Creates table if does not exist already
    private void createTableIfNotExists() throws SQLException {
        String sql = "CREATE TABLE IF NOT EXISTS USERS " +
                "(NAME VARCHAR(255), " +
                "USERNAME VARCHAR(255), " +
                "PHONE BIGINT, " +
                "EMAIL VARCHAR(255), " +
                "PASSWORD VARCHAR(255), " +
                "PRIMARY KEY (USERNAME))";
        Statement stmt = connection.createStatement();
        stmt.execute(sql);
        stmt.close();
    }


    // Takes list of users as parameter and saves into h2 database using sql query. Not sure if static is an issue?
    public void saveUsers(List<User> users) throws SQLException {
        String sql = "INSERT INTO users (USERNAME, NAME, EMAIL, PHONE, PASSWORD) " +
                "VALUES (?, ?, ?, ?, ?)";
        PreparedStatement pstmt = connection.prepareStatement(sql);
        for (User user : users) {
            pstmt.setString(1, user.getUsername());
            pstmt.setString(2, user.getFirstName());
            pstmt.setString(3, user.getEmail());
            pstmt.setString(4, user.getPhone());
            pstmt.setString(5, user.getPassword());
            pstmt.executeUpdate();
        }
        pstmt.close();


//        sql = "CREATE TABLE test_table (" +
//                "id int, " +
//                "name varchar(255)" +
//                ")";
    }

    public void saveUser(User user) throws SQLException {
        String sql = "INSERT INTO users (USERNAME, PHONE, NAME, EMAIL, PASSWORD) " +
                "VALUES (?, ?, ?, ?, ?)";
        PreparedStatement pstmt = connection.prepareStatement(sql);

        pstmt.setString(1, user.getUsername());
        pstmt.setString(2, user.getPhone());
        pstmt.setString(3, user.getFirstName());
        pstmt.setString(4, user.getEmail());
        pstmt.setString(5, user.getPassword());
        pstmt.executeUpdate();

        pstmt.close();
    }

    public void close() throws SQLException {
        connection.close();
    }

    // Add other methods to interact with the database
}

