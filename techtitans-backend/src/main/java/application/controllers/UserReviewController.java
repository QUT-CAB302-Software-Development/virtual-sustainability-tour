package application.controllers;

import application.Exceptions.InvalidMessageException;
import application.Main;
import application.database.ReviewDatabase;
import application.model.EditUser;
import application.model.UserReview;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

public class UserReviewController {

    ReviewDatabase reviewDatabase = Main.reviewDatabase;

    @PostMapping("/review/new")
    public ResponseEntity<Map<String, Object>> createReview(@RequestBody Map<String, String> payload) throws SQLException, InvalidMessageException {

        String username = payload.get("username");
        String password = payload.get("password");
        Integer rating =  Integer.parseInt(payload.get("rating"));
        String message = payload.get("message");
        Long timestamp = Long.parseLong(payload.get("timestamp"));
        String location = payload.get("location");

        UserReview review = new UserReview(message, rating, timestamp, username, location);

        reviewDatabase.addReview(review);

        return null;
    }

    @GetMapping("/review/get")
    public ResponseEntity<Map<String, Object>> getReviews() throws SQLException {



        return null;
    }
}
