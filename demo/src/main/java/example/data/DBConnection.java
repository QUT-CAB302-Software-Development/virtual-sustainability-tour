package example.data;

/**
 * Provides a singleton instance of the database connection.
 */
public class DBConnection {
    /**
     * The singleton instance of the database connection.
     */
    private static StaticDatabaseConnection instance = null;

    /**
     * Constructor intializes the connection.
     */
    private DBConnection() {
        instance = new StaticDatabaseConnection();
    }

    /**
     * Provides global access to the singleton instance of the UrlSet.
     *
     * @return a handle to the singleton instance of the UrlSet.
     */
    public static StaticDatabaseConnection getInstance() {
        if (instance == null) {
            new DBConnection();
        }
        return instance;
    }
}
