package farmconnect.farmconnect.user;


import org.springframework.data.mongodb.core.mapping.DBRef;

import farmconnect.farmconnect.product.Product;

public class CartItem {

    @DBRef
    private Product product;

    private int quantity;

    public CartItem() {
    }

    public CartItem(Product product, int quantity) {
        super();
        this.product = product;
        this.quantity = quantity;
    }

    public Product getProduct() {

        if (this.product == null) {
            return null;
        }

        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getId() {

        if (this.product == null) {
            return null;
        }

        return this.product.getId();
    }

    @Override
    public String toString() {
        return "CartItem [product=" + product + ", quantity=" + quantity + "]";
    }

}
