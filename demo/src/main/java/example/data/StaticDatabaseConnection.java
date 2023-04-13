package example.data;

import java.util.ArrayList;

/**
 * Represents a static database connection. Should be replaced with a real
 * database connection that provides access to a real database.
 */
public class StaticDatabaseConnection {
    /**
     * The list of users. This is a placeholder for a User table in a real
     * database.
     */
    private final ArrayList<User> users;

    /**
     * Constructor initializes the static "tables".
     */
    public StaticDatabaseConnection() {
        users = new ArrayList<>();
    }

    /**
     * Gets the "tables" of users as a list.
     *
     * @return The list of users.
     */
    public ArrayList<User> getUsers() {
        return users;
    }
}

