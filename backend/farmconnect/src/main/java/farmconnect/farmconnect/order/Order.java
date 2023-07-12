package farmconnect.farmconnect.order;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import farmconnect.farmconnect.user.CartItem;

@Document(collection = "orders")
public class Order {

    @Id
    @Indexed(unique = true)
    private String id;
    private String consumerId;
    private String farmerId;
    private List<CartItem> subOrders;
    private String status;
    private Date date;

    public Order() {
    }

    public Order(String id, String consumerId, String farmerId, List<CartItem> subOrders, String status, Date date) {
        this.id = id;
        this.consumerId = consumerId;
        this.farmerId = farmerId;
        this.subOrders = subOrders;
        this.status = status;
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getConsumerId() {
        return consumerId;
    }

    public void setConsumerId(String consumerId) {
        this.consumerId = consumerId;
    }

    public String getFarmerId() {
        return farmerId;
    }

    public void setFarmerId(String farmerId) {
        this.farmerId = farmerId;
    }

    public List<CartItem> getSubOrders() {
        return subOrders;
    }

    public void setSubOrders(List<CartItem> subOrders) {
        this.subOrders = subOrders;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Order [id=" + id + ", consumerId=" + consumerId + ", farmerId=" + farmerId + ", subOrders=" + subOrders
                + ", status=" + status + ", date=" + date + "]";
    }

}
