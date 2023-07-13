package farmconnect.farmconnect.user;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import farmconnect.farmconnect.order.Order;
import farmconnect.farmconnect.order.OrderService;
import farmconnect.farmconnect.product.Product;
import farmconnect.farmconnect.product.ProductService;
import farmconnect.farmconnect.user.DTO.CartItemDTO;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductService productService;
    @Autowired
    private OrderService orderService;
    

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getFarmers() {
        return userRepository.findByRole("ADMIN");
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    public String getUserId(String email) {
        return userRepository.findByEmail(email).getId();
    }

    public User getFarmer(String id) {
        return userRepository.findById(id).get();
    }

    public User addUser(User user) {

        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("User already exists");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        user.setAddresses(new ArrayList<>());
        user.setCart(new ArrayList<>());
        user.setOrders(new ArrayList<>());

        return userRepository.save(user);
    }

    public User updateProfile(String username, String name, String address) {
        User user = userRepository.findByEmail(username);
        user.setName(name);
        List<String> addresses = user.getAddresses();
        if (addresses == null) {
            addresses = new ArrayList<String>();
        }
        addresses.add(address);
        user.setAddresses(addresses);
        return userRepository.save(user);
    }

    public void deleteUser(String email) {
        userRepository.deleteByEmail(email);
    }

    public User updateUser(User updatedUser) {
        User existingUser = userRepository.findByEmail(updatedUser.getEmail());
        if (existingUser != null) {
            updatedUser.setId(existingUser.getId()); // Set the existing ObjectId value
            return userRepository.save(updatedUser);
        } else {
            return null;
        }
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public List<CartItemDTO> addToCart(String email, String id) {
        User user = userRepository.findByEmail(email);

        List<CartItemDTO> cart = user.getCart();

        Product product = productService.getProductByID(id);

        if (product != null) {

            String prodId = product.getId();
            boolean found = false;

            for (CartItemDTO cartItem : cart) {
                if (cartItem.getProduct() == null) {
                    cart.remove(cartItem);
                } else if (cartItem.getId().equals(prodId)) {
                    if (product.getQuantity() < cartItem.getQuantity() + 1) {
                        throw new RuntimeException("Not enough stock");
                    }
                    cartItem.setQuantity(cartItem.getQuantity() + 1);
                    found = true;
                    break;
                }
            }
            if (!found) {
                if (product.getQuantity() < 1) {
                    throw new RuntimeException("Not enough stock");
                }
                CartItemDTO cartItem = new CartItemDTO();
                cartItem.setProduct(product);
                cartItem.setQuantity(1);
                cart.add(cartItem);
            }
            user.setCart(cart);
            this.updateUser(user);
            return getUserCart(email);

        }

        throw new RuntimeException("Product not found");

    }

    public List<CartItemDTO> removeFromCart(String email, String id) {
        User user = userRepository.findByEmail(email);
        List<CartItemDTO> cart = user.getCart();

        if (cart == null) {
           throw new RuntimeException("Cart is empty");
        }

        for (CartItemDTO cartItem : cart) {
            if (cartItem.getId().equals(id)) {
                cart.remove(cartItem);
                break;
            }
        }

        user.setCart(cart);
        userRepository.save(user);
        return getUserCart(email);

    }

    public List<CartItemDTO> updateCart(String email, String sku) {
        User user = userRepository.findByEmail(email);
        List<CartItemDTO> cart = user.getCart();

        if (cart == null) {
            throw new RuntimeException("Cart is empty");
        }

        for (CartItemDTO cartItem : cart) {
            if (cartItem.getId().equals(sku)) {
                cartItem.setQuantity(cartItem.getQuantity() - 1);
                if (cartItem.getQuantity() == 0) {
                    cart.remove(cartItem);
                }
                break;
            }
        }

        user.setCart(cart);

        userRepository.save(user);

        return getUserCart(email);
    }

    public List<CartItemDTO> removeNullCartItem(List<CartItemDTO> cart) {
        List<CartItemDTO> newCart = new ArrayList<>();
        for (CartItemDTO cartItem : cart) {
            if (cartItem.getProduct() != null) {
                newCart.add(cartItem);
            }
        }
        return newCart;
    }

    public int getCartTotal(List<CartItemDTO> cart) {
        int total = 0;
        for (CartItemDTO cartItem : cart) {
            int price = 0;
            if (cartItem.getProduct() != null)
                price = cartItem.getProduct().getPrice();
            total += cartItem.getQuantity() * price;
        }
        return total;
    }

    public List<CartItemDTO> getUserCart(String email) {
        User user = userRepository.findByEmail(email);
        List<CartItemDTO> cart = user.getCart();
        List<CartItemDTO> newCart = removeNullCartItem(cart);
        user.setCart(newCart);
        userRepository.save(user);
        return newCart;
    }

    public Order checkout(String email) {

        Order order = new Order();
        order.setConsumerId(getUserId(email));
        List<CartItemDTO> cart = getUserCart(email);
        order.setSubOrders(cart);
        order.setStatus("Confirmed");
        Product prod = cart.get(0).getProduct();
        order.setFarmerId(prod.getFarmerId());

        for (CartItemDTO cartItem : cart) {
            Product product = cartItem.getProduct();
            String id = product.getId();
            int quantity = cartItem.getQuantity();
            product.setQuantity(product.getQuantity() - quantity);
            productService.updateProduct(product);
            removeFromCart(email, id);
        }

        order.setDate(new Date());

        return orderService.saveOrder(order); 

    }

    public String getRoleBYUsername(String username){
        User user = userRepository.findByEmail(username);
        return user.getRole();
    }
  

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username);
    }

}