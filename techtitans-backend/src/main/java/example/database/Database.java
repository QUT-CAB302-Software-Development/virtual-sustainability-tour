package example.database;
import java.util.List;

// Database interface defines methods for data access object
public interface Database {

    void addData();

    void removeData();

    void updateData();

    List<Object> fetchData();
}
