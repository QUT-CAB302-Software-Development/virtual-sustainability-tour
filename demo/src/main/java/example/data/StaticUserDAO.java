package example.data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

/**
 * Provides basic CRUD functionality needed by a data access object to store and retrieve
 * information about a User. This implementation uses a static database connection.
 */
public class StaticUserDAO implements UserDAO {
    /**
     * The singleton instance of the database connection.
     */
    private final StaticDatabaseConnection connection;

    /**
     * Constructor intializes the connection.
     */
    public StaticUserDAO() {
        connection = DBConnection.getInstance();
    }

    @Override
    public void addUser(User user) {
        connection.getUsers().add(user);
    }

    @Override
    public User getUser(String email) {
        return connection.getUsers().stream()
                .filter(user -> user.getEmail().equals(email))
                .findFirst()
                .orElse(null);
    }

    @Override
    public void updateUser(User user) {
        deleteUser(user.getEmail());
        addUser(user);
    }

    @Override
    public void deleteUser(String email) {
        connection.getUsers().removeIf(user -> user.getEmail().equals(email));
    }

    @Override
    public Set<User> listUsers() {
        return new HashSet<>(connection.getUsers());
    }

    @Override
    public void close() {
        // No resources to close, nothing to implement.
    }
}