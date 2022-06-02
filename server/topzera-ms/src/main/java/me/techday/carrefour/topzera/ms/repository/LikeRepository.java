package me.techday.carrefour.topzera.ms.repository;

import me.techday.carrefour.topzera.ms.model.Like;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LikeRepository extends MongoRepository<Like, String> {
}
