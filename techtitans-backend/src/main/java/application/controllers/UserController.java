
package application.controllers;

import application.database.UserDatabase;
import application.model.User;
import application.model.UserLogin;
import application.Main;

import application.database.DbConnection;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.sql.Array;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


@RestController
public class UserController {

    // Temp list to store a list of tokens
    // Move the database later with expiry functionality


    private ArrayList<String> tokenList = new ArrayList<String>();
    private UserDatabase userDatabase = Main.userDatabase;


    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody UserLogin userLogin) {

        String username = userLogin.getUsername();
        String password = userLogin.getPassword();

        HashMap<String, Object> body = new HashMap<>();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.valueOf("application/json"));

        if(userDatabase.passwordMatch(username, password)) {
            // Return some kind of token

            String token = String.valueOf(UUID.randomUUID());

            tokenList.add(token);

            body.put("error", false);
            body.put("message", "login successful");
            body.put("token", token);

            return new ResponseEntity<>(body, headers, HttpStatus.OK);
        } else {

            body.put("error", true);
            body.put("message", "incorrect username or password");

            return new ResponseEntity<>(body, headers, HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody User user) throws SQLException {

        String username = user.getUsername();
        String password = user.getPassword();
        String email = user.getEmail();
        String phone = user.getPhone();
        String name = user.getName();

        HashMap<String, Object> body = new HashMap<>();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.valueOf("application/json"));

        if (!userDatabase.userExists(username)) {
            // user does not exist yet
            body.put("error", false);
            body.put("message", "user created successfully");

            userDatabase.createUser(username, phone, name, email, password);

            return new ResponseEntity<>(body, headers, HttpStatus.CREATED);

        } else {
            // user already exists
            body.put("error", true);
            body.put("message", "username already exists");

            return new ResponseEntity<>(body, headers, HttpStatus.CONFLICT);
        }
    }


}
