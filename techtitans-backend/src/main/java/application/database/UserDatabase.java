package application.database;
import application.model.User;
import com.google.gson.Gson;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

// User database contains user update methods
public class UserDatabase {
    private List<User> users = new ArrayList<>();
    private DbConnection dbConnection;

    // initialises new user, creates user, and adds to class list/
    public User createUser(String username, String phone, String firstName, String lastName, String email, String password) throws SQLException {
        User user = new User(username, phone, firstName, lastName, email, password);
        users.add(user);

        return user;
    }

    public List<User> getDummyUsers() {
        return users;
    }


    public UserDatabase(DbConnection dbConnection) {
        this.dbConnection = dbConnection;
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

    public boolean passwordMatch(String username, String password) {
        boolean user = userExists(username);
        if (user && getUser(username).getPassword().equals(password)) {
            return true;
        }
        return false;
    }

    // Save method calls save method from dbconnection
    public void save() {
        try {
            System.out.println(users.size());
            dbConnection.saveUsers(users);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static UserDatabase fromJson(String json) {
        Gson gson = new Gson();
        return gson.fromJson(json, UserDatabase.class);
    }
}
