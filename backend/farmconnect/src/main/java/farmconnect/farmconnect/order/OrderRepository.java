package farmconnect.farmconnect.order;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {
    List<Order> findByConsumerId(String consumerId);
    Order findByIdAndConsumerId(String id, String consumerId);
    List<Order> findByFarmerId(String farmerId);
    Order findByIdAndFarmerId(String id, String farmerId);
}
