package database;
import java.util.ArrayList;
import java.util.List;

// User database contains user update methods
public class UserDatabase {
    List<User> users = new ArrayList<>();

    // initialises new user, creates user, and adds to class list/
    public User CreateUser(String userid, String username, String phone, String name, String email, String password) {
        User user = new User(userid, username, phone, name, email, password);
        users.add(user);
        return user;
    }

    // Check if user exists and returns user in list of class.
    public User UserExists(String userid)
    {
        for (User user : users)
        {
            if (users.contains(userid))
            {
                return user;
            }
        }
        return null;
    }
}
