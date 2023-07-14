package farmconnect.farmconnect.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import farmconnect.farmconnect.beans.LoggedInUserBean;
import farmconnect.farmconnect.user.User;
import farmconnect.farmconnect.user.UserService;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserService userService;

    @Autowired
    private LoggedInUserBean loggedInUserBean;

    public List<Product> getProducts(String farmerId) {
         return productRepository.findByFarmerId(farmerId);
    }

    public Page<Product> getPaginatedProducts(int page, int size) {

        Page<Product> products = productRepository.findAll(PageRequest.of(page, size));

        return products;
    }

    public User getUser() {
        return userService.getUserByEmail(loggedInUserBean.getUsername());
    }

    public Product getProductByID(String id) {
        Product prod = productRepository.findById(id).get();
        if (prod == null) {
            throw new RuntimeException("Product not found");
        }
        return prod;
    }

    public Product addProduct(Product product) {

        if (productRepository.findById(product.getId()).isPresent()) {
            throw new RuntimeException("Product already exists");
        }
        return productRepository.save(product);
    }

    public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }

    public Product updateProduct(Product updatedProduct) {
        Product existingProduct = productRepository.findById(updatedProduct.getId()).get();
        if (existingProduct != null) {
            updatedProduct.setId(existingProduct.getId());
            return productRepository.save(updatedProduct);
        } else {
             throw new RuntimeException("Product not found");
        }
    }

    public List<Product> getProductsByName(String name) {
        return productRepository.findByName(name);
    }

}
