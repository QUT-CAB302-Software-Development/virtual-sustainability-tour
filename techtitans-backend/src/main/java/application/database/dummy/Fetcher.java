package application.database.dummy;
import application.database.UserDatabase;
import application.model.User;
import java.net.URI;
import java.net.http.*;
import java.util.List;

public class Fetcher {
    private HttpClient client = HttpClient.newHttpClient();

    public User fetchUser(String username) {
        String url = "https://dummyjson.com/users/" + username;
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .build();
        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            return User.fromJson(response.body());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<User> fetchUsers() {
        String url = "https://dummyjson.com/users";
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .build();
        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            return UserDatabase.fromJson(response.body()).getDummyUsers();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
