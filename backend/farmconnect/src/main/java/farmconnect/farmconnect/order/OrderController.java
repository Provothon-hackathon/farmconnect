package farmconnect.farmconnect.order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import farmconnect.farmconnect.beans.LoggedInUserBean;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private LoggedInUserBean loggedInUserBean;

    @GetMapping("/orders")
    @PreAuthorize("hasAuthority('USER')")
    public List<Order> getOrders() {
        return orderService.getUserOrders(loggedInUserBean.getUsername());
    }

    @GetMapping("/orders/{orderId}")
    @PreAuthorize("hasAuthority('USER')")
    public Order getOrder(@PathVariable String orderId) {
        try {
            return orderService.getUserOrder(loggedInUserBean.getUsername(), orderId);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @GetMapping("/admin/orders")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<Order> getAdminOrders() {
        return orderService.getAdminOrders(loggedInUserBean.getUsername());
    }

    @GetMapping("/admin/orders/{orderId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Order getAdminOrder(@PathVariable String orderId) {
        try {
            return orderService.getAdminOrder(loggedInUserBean.getUsername(), orderId);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }

    }
}
