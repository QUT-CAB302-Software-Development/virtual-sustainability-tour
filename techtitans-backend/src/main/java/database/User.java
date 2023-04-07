package database;

// Contains private user data for encapsulation
public class User {
    private String username;
    private String phone;
    private String name;
    private String email;
    private String password;

    // Constructor for new user
    public User(String username, String phone, String name, String email, String password)
    {
        this.username = username;
        this.phone = phone;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public String fetchPassword(User user) {
        return user.password;
    }
}
