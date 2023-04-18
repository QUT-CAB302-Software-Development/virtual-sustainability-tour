package example.database;
import database.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

// Basic user testing for constructor and setting private fields.
public class UserTests {
    private User user;

    // creating date constructor
    Date birthDate = new Date(2023, 4, 17);
    @BeforeEach
    void setUp() {
        user = new User("username", "0412345678", "name", "name@gmail.com", "password", birthDate, "name@gmail.com","password",
                "nickname", "country");
    }

    @Test
    void testUserConstructor() {
        assertEquals("username", user.getUsername());
        assertEquals("0412345678", user.getPhone());
        assertEquals("name", user.getName());
        assertEquals("name@gmail.com", user.getEmail());
        assertEquals("password", user.getPassword());
        assertEquals(birthDate, user.getBirthday());
        assertEquals("name@gmail.com", user.getConfirmemail());
        assertEquals("password", user.getPassword());
        assertEquals("nickname", user.getNickname());
        assertEquals("country", user.getCountry());
    }

    @Test
    void testUserSetUserName() {
        user.setUserName("newName");
        assertEquals("newName", user.getUsername());
    }

    @Test
    void testUserSetPhone() {
        user.setPhone("0487654321");
        assertEquals("0487654321", user.getPhone());
    }

    @Test
    void testUserSetEmail() {
        user.setEmail("newEmail@example.com");
        assertEquals("newEmail@example.com", user.getEmail());
    }

    @Test
    void testUserSetPassword() {
        user.setPassword("NewPass0");
        assertEquals("NewPass0", user.getPassword());
    }

    @Test
    void testUserSetBirthday() {
        user.setBirthday(new Date(2023, 04, 18));
        assertEquals(new Date (2023, 04, 18), user.getBirthday());
    }

    @Test
    void testUserConfirmEmail() {
        user.setConfirmemail("confirmEmail@example.com");
        assertEquals("confirmEmail@example.com", user.getConfirmemail());
    }

    @Test
    void testUserConfirmPassword() {
        user.setConfirmemail("ConfirmPassword");
        assertEquals("ConfirmPassword", user.getConfirmpassword());
    }

    @Test
    void testUserSetNickname() {
        user.setNickname("newNickname");
        assertEquals("newNickname", user.getNickname());
    }

    @Test
    void testUserSetCountry() {
        user.setCountry("Australia");
        assertEquals("Australia", user.getCountry());
    }

}