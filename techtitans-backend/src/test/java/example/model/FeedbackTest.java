package example.model;

import application.Exceptions.InvalidMessageException;
import application.model.Feedback;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;


public class FeedbackTest {

    private Feedback feedback;

    @BeforeEach
    void createFeedback() throws InvalidMessageException {
        feedback = new Feedback(
                "I love this place",
                6,
                10000000L,
                "user123",
                "brisbane"
        );
    }

    @Test
    void testFeedbackConstructor() throws InvalidMessageException {

        assertEquals("I love this place", feedback.getMessage());
        assertEquals(6, feedback.getRating());
        assertEquals(10000000L, feedback.getTimestamp());
        assertEquals("user123", feedback.getUsername());
        assertEquals("brisbane", feedback.getLocation());
    }

    @Test
    void testSetEmptyMessage() throws InvalidMessageException {
        assertThrows(InvalidMessageException.class, () -> feedback.setMessage(""));
    }

    @Test
    void testSetTooLongMessage() throws InvalidMessageException {
        assertThrows(InvalidMessageException.class, () -> feedback.setMessage(new String(new char[300]).replace('\0', ' ')));
    }

    @Test
    void testSetTooLowRating() throws InvalidMessageException {
        assertThrows(InvalidMessageException.class, () -> feedback.setRating(0));
    }

    @Test
    void testSetTooHighRating() throws InvalidMessageException {
        assertThrows(InvalidMessageException.class, () -> feedback.setRating(11));
    }

}
