package database;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

// User database contains user update methods
public class UserDatabase {
    private List<User> users = new ArrayList<>();
    private DbConnection dbConnection;

    // initialises new user, creates user, and adds to class list/
    public User createUser(String username, String phone, String name, String email, String password, Date birthday) {
        User user = new User(username, phone, name, email, password, birthday);
        users.add(user);
        return user;
    }

    public UserDatabase(DbConnection dbConnection) {
        this.dbConnection = dbConnection;
    }

    public User userExists(String email) {
        for (User user : users) {
            if (user.getEmail().equals(email)) {
                return user;
            }
        }
        return null;
    }

    public User passwordMatch(String email, String password) {
        User user = userExists(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    // Save method calls save method from dbconnection
    public void save() {
        try {
            DbConnection.saveUsers(users);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
