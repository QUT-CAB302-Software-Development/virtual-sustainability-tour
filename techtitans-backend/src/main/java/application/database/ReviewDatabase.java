package application.database;

import application.Exceptions.InvalidMessageException;
import application.model.User;
import application.model.UserReview;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
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

    public List<UserReview> getAllReviews() {
        return reviews;
    }

    public List<UserReview> getReviewsByLocation(String location) {

        List<UserReview> data = new ArrayList<>();

        for (UserReview review : reviews) {
            if (review.getLocation() == location) {
                data.add(review);
            }
        }

        return data;
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

        dbConnection.executeInsertStmt(sql, data);
    }

    public void saveReviews() throws SQLException {

        for (UserReview review : reviews) {
            saveReview(review);
        }

    }

    public void load() throws SQLException, InvalidMessageException {

        String sql = "SELECT * FROM REVIEW";

        PreparedStatement pstmt = dbConnection.connection.prepareStatement(sql);

        ResultSet rs = pstmt.executeQuery();

        while (rs.next()) {
            String message = rs.getString("MESSAGE");
            String location = rs.getString("LOCATION");
            Integer rating = Integer.parseInt(rs.getString("RATING"));
            Long timestamp = Long.parseLong(rs.getString("TIMESTAMP"));
            String username = rs.getString("USERNAME");

            UserReview review = new UserReview(message, rating, timestamp, username, location);

            reviews.add(review);
        }

        pstmt.close();
    }

    public void save() {
        try {
            dbConnection.executeDeleteAllStmt("REVIEW");
            saveReviews();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
