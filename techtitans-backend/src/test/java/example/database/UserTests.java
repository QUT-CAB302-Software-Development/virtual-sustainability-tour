package example.database;
import database.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

// Basic user testing for constructor and setting private fields.
public class UserTests {
    private User user;
    @BeforeEach
    void setUp() {
        user = new User("username", "0412345678", "name", "name@gmail.com", "password");
    }

    @Test
    void testUserConstructor() {
        assertEquals("username", user.getUsername());
        assertEquals("0412345678", user.getPhone());
        assertEquals("name", user.getName());
        assertEquals("name@gmail.com", user.getEmail());
        assertEquals("password", user.getPassword());
    }

    @Test
    void testUserSetUserName() {
        user.setUserName("newUsername");
        assertEquals("newUsername", user.getUsername());
    }
    @Test
    void testUserGetUserName() {
        assertEquals("username", user.getUsername());
    }

    @Test
    void testUserSetName() {
        user.setName("newName");
        assertEquals("newName", user.getName());
    }
    @Test
    void testUserGetName() {
        assertEquals("name", user.getName());
    }

    @Test
    void testUserSetPhone() {
        user.setPhone("0487654321");
        assertEquals("0487654321", user.getPhone());
    }
    @Test
    void testUserGetPhone() {
        assertEquals("0412345678", user.getPhone());
    }

    @Test
    void testUserSetEmail() {
        user.setEmail("newEmail@example.com");
        assertEquals("newEmail@example.com", user.getEmail());
    }
    @Test
    void testUserGetEmail() {
        assertEquals("name@gmail.com", user.getEmail());
    }

    @Test
    void testUserSetPassword() {
        user.setPassword("NewPass0");
        assertEquals("NewPass0", user.getPassword());
    }
    //hi
    @Test
    void testUserGetPassword() {
        assertEquals("password", user.getPassword());
    }
}