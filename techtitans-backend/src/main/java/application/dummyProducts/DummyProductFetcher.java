package application.dummyProducts;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class DummyProductFetcher {

    private HttpClient client = HttpClient.newHttpClient();


    public DummyProduct fetchProduct(int id) {
        String url = "https://dummyjson.com/products" + id;

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            return DummyProduct.fromJson(response.body());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public DummyProduct[] fetchAllProducts() {
        String url = "https://dummyjson.com/products";

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            return DummyProducts.fromJson(response.body()).getProducts();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
