package example.data;

import java.util.Set;

/**
 * Provides basic CRUD functionality needed by a data access object to store and retrieve
 * information about a User.
 */
public interface UserDAO {
    /**
     * Adds a User to the user list, if they are not already in the list
     *
     * @param user User to add
     */
    void addUser(User user);

    /**
     * Extracts all the details of a User from the address book based on the
     * email passed in.
     *
     * @param email The email as a String to search for.
     * @return all details in a User object for the email
     */
    User getUser(String email);

    /**
     * Updates a User in the user list.
     *
     * @param user User to update
     */
    void updateUser(User user);

    /**
     * Deletes a User from the address book.
     *
     * @param email The email of the User to delete from the address book.
     */
    void deleteUser(String email);

    /**
     * Gets a list of all the users in the address book.
     *
     * @return A Set of all the users in the address book.
     */
    Set<User> listUsers();

    /**
     * Finalizes any resources used by the data source and ensures data is
     * persisited.
     */
    void close();
}