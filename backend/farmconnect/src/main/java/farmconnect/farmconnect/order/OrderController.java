package farmconnect.farmconnect.order;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

public class OrderController {

    @Autowired
    private OrderService orderService;
    
    private final String username;

    public OrderController(Principal principal) {
        this.username = principal.getName();
    }



    @GetMapping("/orders")
    @PreAuthorize("hasAuthority('USER')")
    public List<Order> getOrders() {
        return orderService.getUserOrders(username);
    }

    @GetMapping("/orders/{orderId}")
    @PreAuthorize("hasAuthority('USER')")
    public Order getOrder(@RequestParam String orderId) {
        return orderService.getUserOrder(username, orderId);
    }

    @GetMapping("/admin/orders")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<Order> getAdminOrders() {
        return orderService.getAdminOrders(username);
    }

    @GetMapping("/admin/orders/{orderId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Order getAdminOrder(@RequestParam String orderId) {
        return orderService.getAdminOrder(username, orderId);
    }
}
