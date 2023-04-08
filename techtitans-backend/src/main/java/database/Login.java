package database;

public class Login {
    private User user;

    public Login(User user) {
        this.user = user;
    }

    public boolean authenticate(String username, String password) {
        return user.getUsername().equals(username) && user.getPassword().equals(password);
    }

    public User getUser() {
        return user;
    }
}
