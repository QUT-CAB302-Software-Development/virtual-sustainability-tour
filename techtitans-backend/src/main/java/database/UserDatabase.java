package database;
import java.util.ArrayList;
import java.util.List;

// User database contains user update methods
public class UserDatabase {
    List<User> users = new ArrayList<>();

    // initialises new user, creates user, and adds to class list/
    public User CreateUser(String name, String email, String password) {
        User user = new User(name, email, password);
        users.add(user);
        return user;
    }

    // Check if email exists and returns email in list of class.
    public User EmailExists(String email)
    {
        for (User user : users)
        {
            if (users.contains(email))
            {
                return user;
            }
        }
        return null;
    }
}
