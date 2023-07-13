package farmconnect.farmconnect.product;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {

    @Id
    @Indexed(unique = true)
    private String id;
    // @DBRef(db = "users")
    private String farmerId;
    private int quantity;
    private String name;
    private String description;
    private int price;
    private List<String> categories;
    private List<String> images;

    public Product() {
    }

    public Product(String id, String farmerId, int quantity, String name, String description, int price,
            List<String> categories, List<String> images) {
        this.id = id;
        this.farmerId = farmerId;
        this.quantity = quantity;
        this.name = name;
        this.description = description;
        this.price = price;
        this.categories = categories;
        this.images = images;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFarmerId() {
        return farmerId;
    }
 
    public void setFarmerId(String farmerId) {
        this.farmerId = farmerId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    @Override
    public String toString() {
        return "Product [id=" + id + ", farmerId=" + farmerId + ", quantity=" + quantity + ", name=" + name
                + ", description=" + description + ", price=" + price + ", categories=" + categories + ", images="
                + images + "]";
    }

}
