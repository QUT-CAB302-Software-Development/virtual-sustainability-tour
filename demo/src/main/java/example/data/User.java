package example.data;

/**
 * Represents a user of the application.
 */
public class User {
    private String name;
    private String password;
    private String email;

    /**
     * Creates a new User.
     *
     * @param name     The name of the user.
     * @param password The password of the user.
     * @param email    The email of the user.
     */
    public User(String name, String password, String email) {
        this.name = name;
        this.password = password;
        this.email = email;
    }

    /**
     * Gets the name of the user.
     *
     * @return The name of the user.
     */
    public String getName() {
        return name;
    }

    /**
     * Gets the password of the user.
     *
     * @return The password of the user.
     */
    public String getPassword() {
        return password;
    }

    /**
     * Gets the email of the user.
     *
     * @return The email of the user.
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the name of the user.
     *
     * @param newName The new name of the user.
     */
    public void setName(String newName) {
        this.name = newName;
    }

    /**
     * Sets the password of the user.
     *
     * @param newPassword The new password of the user.
     */
    public void setPassword(String newPassword) {
        this.password = newPassword;
    }

    /**
     * Sets the email of the user.
     *
     * @param newEmail The new email of the user.
     */
    public void setEmail(String newEmail) {
        this.email = newEmail;
    }
}
