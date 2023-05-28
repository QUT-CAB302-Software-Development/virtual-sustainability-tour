package application.database;
import application.model.User;
import com.google.gson.Gson;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

// User database contains user update methods
public class UserDatabase {
    private List<User> users = new ArrayList<>();
    private DbConnection dbConnection;

    public UserDatabase(DbConnection dbConnection) {
        this.dbConnection = dbConnection;
    }

    // initialises new user, creates user, and adds to class list/
    public User createUser(String username, String phone, String firstName, String lastName, String email, String password) throws SQLException {
        User user = new User(username, phone, firstName, lastName, email, password);
        users.add(user);

        return user;
    }

    public void addUser(User user) {
        users.add(user);
    }

    public List<User> getDummyUsers() {
        return users;
    }


    public boolean userExists(String username) {
        for (User user : users) {
            if (user.getUsername().equals(username)) {
                return true;
            }
        }
        return false;
    }

    public User getUser(String username) {
        for (User user : users) {
            if (user.getUsername().equals(username)) {
                return user;
            }
        }
        return null;
    }

    public void EditUser(String username, String newName, String newEmail, String newPhone, String newPassword) {
        User user = getUser(username);

        if (newName != null) {
            user.setUserName(newName);
        }

        if (newEmail != null) {
            user.setEmail(newEmail);
        }

        if (newPhone != null) {
            user.setPhone(newPhone);
        }

        if (newPassword != null) {
            user.setPassword(newPassword);
        }
    }

    public boolean passwordMatch(String username, String password) {
        boolean user = userExists(username);
        if (user && getUser(username).getPassword().equals(password)) {
            return true;
        }
        return false;
    }

    public void saveUser(User user) throws SQLException {

        String username = user.getUsername();
        String password = user.getPassword();
        String email = user.getEmail();
        String phone = user.getPhone();
        String firstName = user.getFirstName();
        String lastName = user.getLastName();

        String sql = "INSERT INTO users (USERNAME, PHONE, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD) " +
                "VALUES (?, ?, ?, ?, ?, ?)";

        List<String> data = Arrays.asList(
            user.getUsername(),
            user.getPhone(),
            user.getFirstName(),
            user.getLastName(),
            user.getEmail(),
            user.getPassword()
        );

        dbConnection.executeInsertStmt(sql, data);
    }


    public void saveUsers() throws SQLException {

        for (User user : users) {
            saveUser(user);
        }

    }

    public void load() throws SQLException {

        String sql = "SELECT * FROM USERS";

        PreparedStatement pstmt = dbConnection.connection.prepareStatement(sql);

        ResultSet rs = pstmt.executeQuery();

        while (rs.next()) {
            String username = rs.getString("USERNAME");
            String firstName = rs.getString("FIRST_NAME");
            String lastName = rs.getString("LAST_NAME");
            String phone = rs.getString("PHONE");
            String email = rs.getString("EMAIL");
            String password = rs.getString("PASSWORD");

            User user = new User(username, phone, firstName, lastName, email, password);

            users.add(user);
        }

        pstmt.close();
    }

    // Save method calls save method from dbconnection
    public void save() {
        try {
            dbConnection.executeDeleteAllStmt("USERS");
            saveUsers();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static UserDatabase fromJson(String json) {
        Gson gson = new Gson();
        return gson.fromJson(json, UserDatabase.class);
    }


}
