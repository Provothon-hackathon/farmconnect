package farmconnect.farmconnect.user;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import jakarta.validation.Valid;

@Controller
@SessionAttributes({ "username" })
public class UserController {

    @Autowired
    private UserService userService;

    private final String username;

    public UserController(Principal principal) {
        this.username = principal.getName();
    }

    @GetMapping("/profile")
    @PreAuthorize("hasAuthority('USER')")
    public User profile() {

        // call api /products to get user profile
        return userService.getUserByEmail(username);

    }

    @PostMapping("/profile")
    @PreAuthorize("hasAuthority('USER')")
    public User updateProfile(@RequestParam String email, @RequestParam String name, @RequestParam String address) {

        // call api /products to get user profile
        return userService.updateProfile(email, name, address);
    }

    @PostMapping("/add-to-cart")
    @PreAuthorize("hasAuthority('USER')")
    public String addToCart(@RequestParam String SKU) {
        return userService.addToCart(username, SKU);
    }

    @PostMapping("/remove-from-cart")
    @PreAuthorize("hasAuthority('USER')")
    public String removeFromCart(@RequestParam String sku) {

        return userService.removeFromCart(username, sku);
    }

    @GetMapping("/cart")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<Object> cart() {
        List<CartItem> cart = userService.getUserCart(username);
        int total = userService.getCartTotal(cart);

        // create a new json object with cart and total
        Map<String, Object> cartAndTotal = new HashMap<>();
        cartAndTotal.put("cart", cart);
        cartAndTotal.put("total", total);
        return ResponseEntity.status(HttpStatus.OK).body(cartAndTotal);
    }

    @GetMapping("/inc-cart-qty")
    @PreAuthorize("hasAuthority('USER')")
    public String incCartQty(@RequestParam String sku) {
        return userService.addToCart(username, sku);
    }

    @GetMapping("/dec-cart-qty")
    @PreAuthorize("hasAuthority('USER')")
    public String decCartQty(@RequestParam String sku) {
        return userService.updateCart(username, sku);
    }

    @PostMapping("/checkout")
    @PreAuthorize("hasAuthority('USER')")
    public String checkout() {

        return userService.checkout(username);

    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody User user) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {
            // If the user is already authenticated, return an appropriate response
            return ResponseEntity.status(HttpStatus.OK).body("User is already authenticated");
        }

        userService.addUser(user);

        // Return a success response after successful registration
        return ResponseEntity.status(HttpStatus.OK).body("Registration successful");
    }
}
