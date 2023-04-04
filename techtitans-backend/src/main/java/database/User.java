package database;

// Contains private user data for encapsulation
public class User {
    private String name;
    private String email;
    private String password;

    // Constructor for new user
    public User(String name, String email, String password)
    {
        this.name = name;
        this.email = email;
        this.password = password;
    }

}
