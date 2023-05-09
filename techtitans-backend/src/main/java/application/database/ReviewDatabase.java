package application.database;

import application.model.User;
import application.model.UserReview;

import java.sql.SQLException;
import java.util.ArrayList;
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

    public void save() {
        try {
            System.out.println(reviews.size());
            dbConnection.saveReviews(reviews);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
