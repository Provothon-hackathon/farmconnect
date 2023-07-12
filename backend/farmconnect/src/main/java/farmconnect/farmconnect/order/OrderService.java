package farmconnect.farmconnect.order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getUserOrders(String consumerId) {
        return orderRepository.findByConsumerId(consumerId);
    }

    public Order getUserOrder(String consumerId, String id) {
        return orderRepository.findByIdAndConsumerId(id, consumerId);
    }

    public List<Order> getAdminOrders(String farmerId) {
        return orderRepository.findByFarmerId(farmerId);
    }

    public Order getAdminOrder(String farmerId, String id) {
        return orderRepository.findByIdAndFarmerId(id, farmerId);
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }
}
