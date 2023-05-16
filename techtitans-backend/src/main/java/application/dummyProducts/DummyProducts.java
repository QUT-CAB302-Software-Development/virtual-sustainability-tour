package application.dummyProducts;

import com.google.gson.Gson;

public class DummyProducts {

    private DummyProduct[] products;


    public DummyProduct[] getProducts() {
        return products;
    }

    public static DummyProducts fromJson(String json) {
        Gson gson = new Gson();
        return gson.fromJson(json, DummyProducts.class);
    }
}
