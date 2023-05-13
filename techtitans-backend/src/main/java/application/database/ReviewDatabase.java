package application.database;

import application.model.User;
import application.model.UserReview;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ReviewDatabase {

    private static List<UserReview> reviews = new ArrayList<>();

    private DbConnection dbConnection;


    public ReviewDatabase(DbConnection dbConnection) {
        this.dbConnection = dbConnection;
    }


    public void addReview(UserReview review) {
        reviews.add(review);
    }

    public ArrayList<UserReview> getAllReviews() {

        return null;
    }

    public void saveReview(UserReview review) throws SQLException {
        String sql = "INSERT INTO USER_REVIEW (MESSAGE, RATING, TIMESTAMP, USERNAME, LOCATION) " +
                "VALUES (?, ?, ?, ?, ?)";

        List<String> data = Arrays.asList(
            review.getUsername(),
            review.getRating().toString(),
            review.getTimestamp().toString(),
            review.getUsername().toString(),
            review.getLocation().toString()
        );
    }

    public void saveReviews() throws SQLException {

        for (UserReview review : reviews) {
            saveReview(review);
        }

    }

    public void save() {
        try {
            System.out.println(reviews.size());
            saveReviews();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
