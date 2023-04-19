package application.model;

// Contains private user data for encapsulation
public class User {
    private String username;
    private String phone;
    private String name;
    private String email;
    private String password;

    public User(){}

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

    public void setUserName(String username) {
        this.username = username;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}
