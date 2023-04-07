package oldDatabase;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

// Locations class for implementing database to update locations
public class Location implements Database {

    private int id;
    private String name;
    private String address;
    private String description;
    private String link;
    private Connection conn;

    public Location(int id, String name, String address, String description, String link, DatabaseConnection dbConnection) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.description = description;
        this.link = link;
        this.conn = dbConnection.getConnection();
    }

    @Override
    public void addData() {
        // implementation for adding data to the Locations database
    }

    @Override
    public void removeData() {
        // implementation for removing data from the Locations database
    }

    @Override
    public void updateData() {
        // implementation for updating data in the Locations database
    }

    @Override
    public List<Object> fetchData() {
        // implementation for fetching data from the Locations database and returning it as a list of Location objects
        return new ArrayList<Object>();
    }
}

