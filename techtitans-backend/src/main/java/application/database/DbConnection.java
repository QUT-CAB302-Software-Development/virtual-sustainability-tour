package application.database;
import application.model.User;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

// Establishes the database connection and saves file.
public class DbConnection {

    public Connection connection;

    // Constructor which establishes DbConnection and creates a table if it does not exist
    public DbConnection(String url, String username, String password) throws SQLException {
        connection = DriverManager.getConnection(url, username, password);
        createTableIfNotExists();
    }

    //Creates table if does not exist already
    private void createTableIfNotExists() throws SQLException {


        String sql = "CREATE TABLE IF NOT EXISTS USERS " +
                "(USERNAME VARCHAR(255), " +
                "FIRST_NAME VARCHAR(255), " +
                "LAST_NAME VARCHAR(255)," +
                "PHONE VARCHAR(255), " +
                "EMAIL VARCHAR(255), " +
                "PASSWORD VARCHAR(255), " +
                "PRIMARY KEY (USERNAME));";
        Statement stmt = connection.createStatement();
        stmt.execute(sql);
        stmt.close();

        // theres something wrong with this SQL string and I can't find out why - Sean



        sql = "CREATE TABLE IF NOT EXISTS COMPANY " +
                "(COMPANY_NAME VARCHAR(255)," +
                // "YEAR VARCHAR(255)," +
//                "COUNTRY VARCHAR(255)," +
//                "SUB_INDUSTRY VARCHAR(255)," +
//                "GHG_TOTAL VARCHAR(255)," +
//                "SALES VARCHAR(255)," +
//                "OPERATING_INCOME VARCHAR(255)," +
//                "WATER_WITHDRAWN VARCHAR(255)," +
//                "WATER_DISCHARGE VARCHAR(255)," +
//                "SOX VARCHAR(255)," +
//                "NOX VARCHAR(255)," +
//                "VOC VARCHAR(255)," +
                "PRIMARY KEY (COMPANY_NAME));";
        stmt = connection.createStatement();
        stmt.execute(sql);
        stmt.close();

        sql = "CREATE TABLE IF NOT EXISTS SUSTAINABILITY_DATA (\n" +
                "  name VARCHAR(255),\n" +
                "  ghgTotal BIGINT,\n" +
                "  sales BIGINT,\n" +
                "  operatingIncome BIGINT,\n" +
                "  waterWithdrawn BIGINT,\n" +
                "  waterDischarge BIGINT,\n" +
                "  sox BIGINT,\n" +
                "  nox BIGINT,\n" +
                "  voc BIGINT\n" +
                ");";

        stmt = connection.createStatement();
        stmt.execute(sql);
        stmt.close();

        sql = "CREATE TABLE IF NOT EXISTS REVIEW " +
                "(REVIEW_ID bigint auto_increment," +
                "MESSAGE VARCHAR(255)," +
                "RATING VARCHAR(255)," +
                "TIMESTAMP VARCHAR(255)," +
                "USERNAME VARCHAR(255)," +
                "LOCATION VARCHAR(255)," +
                "PRIMARY KEY (MESSAGE));";


        stmt = connection.createStatement();
        stmt.execute(sql);
        stmt.close();
    }

    public boolean executeDeleteAllStmt(String tableName) throws SQLException {
        String sqlString = "DELETE FROM " + tableName + ";";
        PreparedStatement pstmt = connection.prepareStatement(sqlString);

        pstmt.executeUpdate();

        pstmt.close();

        return true;

    }



    public boolean executeInsertStmt(String sqlString, List<String> data) throws SQLException {

        PreparedStatement pstmt = connection.prepareStatement(sqlString);

        for (int i = 0; i < data.size(); i++) {
            pstmt.setString(i + 1, data.get(i));
        }

        pstmt.executeUpdate();


        pstmt.close();

        return true;
    }

    public void close() throws SQLException {
        connection.close();
    }

}

