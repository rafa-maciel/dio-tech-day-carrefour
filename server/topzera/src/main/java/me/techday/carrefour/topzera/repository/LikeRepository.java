package me.techday.carrefour.topzera.repository;

import me.techday.carrefour.topzera.model.Like;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeRepository extends MongoRepository<Like, String> {

    Long countByProductId(String productId);
    List<Like> findByUserEmail(String userEmail);
}
