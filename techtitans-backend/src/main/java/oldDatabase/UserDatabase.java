package database;
import java.util.ArrayList;
import java.util.List;

// User database contains user update methods
public class UserDatabase {
    List<User> users = new ArrayList<>();

    // initialises new user, creates user, and adds to class list/
    public User CreateUser(String username, String phone, String name, String email, String password) {
        User user = new User(username, phone, name, email, password);
        users.add(user);
        return user;
    }

    // Check if user exists and returns user in list of class.
    public User UserExists(String email)
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

    public User PasswordMatch(String email, String password)
    {
        User user = UserExists(email);
        if (user.getPassword() == password)
        {
            return user;
        }
        return null;
    }
}
