package application.dummyProducts;

import com.google.gson.Gson;

public class DummyProduct {
    private int id;
    private String title;
    private String description;

    private int price;

    private String brand;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    @Override
    public String toString() {
        return "dummyProduct{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", brand='" + brand + '\'' +
                '}';
    }

    public static DummyProduct fromJson(String json) {
        Gson gson = new Gson();
        return gson.fromJson(json, DummyProduct.class);
    }
}
