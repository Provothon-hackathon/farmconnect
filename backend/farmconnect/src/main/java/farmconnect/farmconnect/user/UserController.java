package farmconnect.farmconnect.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import farmconnect.farmconnect.beans.LoggedInUserBean;
import farmconnect.farmconnect.order.Order;
import farmconnect.farmconnect.user.DTO.CartItemDTO;
import jakarta.validation.Valid;

@RestController
@SessionAttributes({ "username" })
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private LoggedInUserBean loggedInUserBean;

    @GetMapping("/profile")
    @PreAuthorize("hasAuthority('USER')")
    public User profile() {

        // call api /products to get user profile
        return userService.getUserByEmail(loggedInUserBean.getUsername());

    }

    @PostMapping("/profile")
    @PreAuthorize("hasAuthority('USER')")
    public User updateProfile(@RequestParam String email, @RequestParam String name, @RequestParam String address) {

        // call api /products to get user profile
        return userService.updateProfile(email, name, address);
    }

    @GetMapping("/farmers")
    @PreAuthorize("hasAuthority('USER')")
    public List<User> getFarmers() {

        // call api /products to get user profile
        return userService.getFarmers();
    }
    @GetMapping("/farmers/{id}")
    @PreAuthorize("hasAuthority('USER')")
    public User getFarmer(@RequestParam String id) {

        // call api /products to get user profile
        return userService.getFarmer(id);
    }

    @PostMapping("/add-to-cart")
    @PreAuthorize("hasAuthority('USER')")
    public List<CartItemDTO> addToCart(@RequestParam(value = "id") String id) {
        return userService.addToCart(loggedInUserBean.getUsername(), id);
    }

    @PostMapping("/remove-from-cart")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Object> removeFromCart(@RequestParam(value = "id") String id) {

       List<CartItemDTO> cart = userService.removeFromCart(loggedInUserBean.getUsername(), id);
        int total = userService.getCartTotal(cart);

        // create a new json object with cart and total
        Map<String, Object> cartAndTotal = new HashMap<>();
        cartAndTotal.put("cart", cart);
        cartAndTotal.put("total", total);
        return ResponseEntity.status(HttpStatus.OK).body(cartAndTotal);
    }

    @GetMapping("/cart")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Object> cart() {
        List<CartItemDTO> cart = userService.getUserCart(loggedInUserBean.getUsername());
        int total = userService.getCartTotal(cart);

        // create a new json object with cart and total
        Map<String, Object> cartAndTotal = new HashMap<>();
        cartAndTotal.put("cart", cart);
        cartAndTotal.put("total", total);
        return ResponseEntity.status(HttpStatus.OK).body(cartAndTotal);
    }

    @GetMapping("/inc-cart-qty")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Object> incCartQty(@RequestParam(value = "id") String id) {
        List<CartItemDTO> cart = userService.addToCart(loggedInUserBean.getUsername(), id);
        int total = userService.getCartTotal(cart);
         Map<String, Object> cartAndTotal = new HashMap<>();
        cartAndTotal.put("cart", cart);
        cartAndTotal.put("total", total);
        return ResponseEntity.status(HttpStatus.OK).body(cartAndTotal);

    }

    @GetMapping("/dec-cart-qty")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Object> decCartQty(@RequestParam(value = "id") String id) {
        List<CartItemDTO> cart = userService.updateCart(loggedInUserBean.getUsername(), id);
        int total = userService.getCartTotal(cart);
         Map<String, Object> cartAndTotal = new HashMap<>();
        cartAndTotal.put("cart", cart);
        cartAndTotal.put("total", total);
        return ResponseEntity.status(HttpStatus.OK).body(cartAndTotal);
    }

    @PostMapping("/checkout")
    @PreAuthorize("hasAuthority('USER')")
    public Order checkout() {

        return userService.checkout(loggedInUserBean.getUsername());

    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody User user) {

        try{
            userService.addUser(user);
            // Return a success response after successful registration
            return ResponseEntity.status(HttpStatus.OK).body("Registration successful");
        }
        catch(Exception e){
            // Return a failure response after unsuccessful registration
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed");
        }
    }

}
