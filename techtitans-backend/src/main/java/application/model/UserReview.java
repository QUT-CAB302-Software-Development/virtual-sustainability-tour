package application.model;

import application.Exceptions.InvalidMessageException;

public class UserReview {

    private String message;

    private Integer rating;

    private Long timestamp;

    private String username;

    private String location;


    public UserReview(String message, Integer rating, Long timestamp, String username, String location) throws InvalidMessageException {
        setMessage(message);
        setRating(rating);
        setTimestamp(timestamp);
        setUsername(username);
        setLocation(location);
    }


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) throws InvalidMessageException {
        // max length = 250 characters

        if (message.length() > 250) {
            throw new InvalidMessageException("Too many characters in feedback messag");
        } else if (message.length() == 0) {
            throw new InvalidMessageException("The feedback message is empty");
        }

        this.message = message;
    }

    public Integer getRating() {



        return rating;
    }

    public void setRating(Integer rating) throws InvalidMessageException {

        if (rating > 10) {
            throw new InvalidMessageException("Rating cannot be greater than 10");
        } else if (rating < 1) {
            throw new InvalidMessageException("Rating cannot be less than 1");
        }

        this.rating = rating;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) throws InvalidMessageException {


        if (timestamp > System.currentTimeMillis() / 1000L) {
            throw new InvalidMessageException("Feedback date cannot be in the future");
        }

        this.timestamp = timestamp;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {


        this.username = username;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
