package farmconnect.farmconnect.user;


import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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

    @GetMapping("/profile")
    @PreAuthorize("hasAuthority('USER')")
    public User profile(Model model, Principal principal) {

        // call api /products to get user profile
        User user = userService.getUserByEmail(principal.getName());
        return user;
        
    }

    @PostMapping("/profile")
    @PreAuthorize("hasAuthority('USER')")
    public User updateProfile(@RequestParam String email, @RequestParam String name, @RequestParam String address) {

        // call api /products to get user profile
        return userService.updateProfile(email, name, address);
    }

    @PostMapping("/add-to-cart")
    @PreAuthorize("hasAuthority('USER')")
    public String addToCart(Model model, @RequestParam String SKU, @RequestParam int page, Principal principal) {
        return userService.addToCart(principal.getName(), SKU);
    }

    @PostMapping("/remove-from-cart")
    @PreAuthorize("hasAuthority('USER')")
    public String removeFromCart(@RequestParam String sku, Model model, Principal principal) {

        return userService.removeFromCart(principal.getName(), sku);
    }

    @GetMapping("/cart")
    @PreAuthorize("hasAuthority('USER')")
    public String cart(Model model, Principal principal) {
        List<CartItem> cart = userService.getUserCart(principal.getName());
        int total = userService.getCartTotal(cart);
        User user = userService.getUserByEmail(principal.getName());
        model.addAttribute("user", user);
        model.addAttribute("cart", cart);
        model.addAttribute("total", total);
        return "cart";
    }

    @GetMapping("/inc-cart-qty")
    @PreAuthorize("hasAuthority('USER')")
    public String incCartQty(@RequestParam String sku, Model model, Principal principal) {
        return userService.addToCart(principal.getName(), sku);
    }

    @GetMapping("/dec-cart-qty")
    @PreAuthorize("hasAuthority('USER')")
    public String decCartQty(@RequestParam String sku, Model model, Principal principal) {
        return userService.updateCart(principal.getName(), sku);
    }

    @PostMapping("/checkout")
    @PreAuthorize("hasAuthority('USER')")
    public String checkout(Model model, Principal principal) {

        return userService.check(principal.getName());

    }

     @GetMapping("/register")
    public ResponseEntity<String> register() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {
            // If the user is already authenticated, return an appropriate response
            return ResponseEntity.status(HttpStatus.OK).body("User is already authenticated");
        } else {
            // If the user is not authenticated, return a response indicating that they can proceed with registration
            return ResponseEntity.status(HttpStatus.OK).body("Proceed with registration");
        }
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


