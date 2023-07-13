package farmconnect.farmconnect.order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import farmconnect.farmconnect.user.UserService;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserService userService;

    public List<Order> getUserOrders(String username) {
        String consumerId = userService.getUserId(username);
        return orderRepository.findByConsumerId(consumerId);
    }

    public Order getUserOrder(String username, String id) {
        String consumerId = userService.getUserId(username);
        Order order= orderRepository.findByIdAndConsumerId(id, consumerId);
        if(order==null){
            throw new RuntimeException("Order not found");
        }
        return order;
    }

    public List<Order> getAdminOrders(String username) {
        String farmerId = userService.getUserId(username);
        return orderRepository.findByFarmerId(farmerId);
    }

    public Order getAdminOrder(String username, String id) {
        String farmerId = userService.getUserId(username);
        Order order= orderRepository.findByIdAndFarmerId(id, farmerId);
        if(order==null){
            throw new RuntimeException("Order not found");
        }
        return orderRepository.findByIdAndFarmerId(id, farmerId);
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }
}
