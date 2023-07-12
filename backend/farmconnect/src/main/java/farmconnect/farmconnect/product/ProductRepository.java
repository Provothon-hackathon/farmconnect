package farmconnect.farmconnect.product;


import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
    //find by Id only 
    Optional<Product> findById(String id);
    //find by Id and farmerId
    List<Product> findByFarmerId(String farmerId);

    //delete by Id only
    void deleteById(String id);
    
    //delete by Id and farmerId
    Product deleteByIdAndFarmerId(String id, String farmerId);

    List<Product>  findByName(String name);
}
