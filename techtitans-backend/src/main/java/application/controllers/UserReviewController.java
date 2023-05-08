package application.controllers;

import application.model.EditUser;
import application.model.UserReview;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

public class UserReviewController {

    @PostMapping("/review/new")
    public ResponseEntity<Map<String, Object>> updateUserInfo(@RequestBody UserReview review) throws SQLException {


        return null;
    }
}
