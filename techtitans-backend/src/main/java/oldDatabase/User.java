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
    public String getUsername() {
        return username;
    }

    public String getPhone() {
        return phone;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
