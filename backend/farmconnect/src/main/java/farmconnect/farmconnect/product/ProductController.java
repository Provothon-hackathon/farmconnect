package farmconnect.farmconnect.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import jakarta.validation.Valid;

@RestController
@SessionAttributes({ "username" })
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/{farmerId}/products")
    @PreAuthorize("hasAuthority('USER')")
    public List<Product> getProducts(@RequestParam String farmerId) {
        return productService.getProducts(farmerId);
    }

    @GetMapping("/admin/products")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<Product> getFarmerProducts() {
        String farmerId = productService.getUser().getId();
        return productService.getProducts(farmerId);
    }

    @PostMapping("/admin/delete-product/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Object> deleteProduct(@RequestParam String id) {

        productService.deleteProduct(id);

        return ResponseEntity.ok().build();

    }

    @GetMapping("/admin/update-product/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Product addProduct(@PathVariable String id) {
        return productService.getProductByID(id);
    }

    @PostMapping("/admin/update-product")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Product updateProduct(@Valid Product product) {
        return productService.updateProduct(product);
    }

    @PostMapping("/admin/add-product")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Product addProduct(@Valid Product product) {
        String farmerId = productService.getUser().getId();
        product.setFarmerId(farmerId);
        return productService.addProduct(product);
    }

}
