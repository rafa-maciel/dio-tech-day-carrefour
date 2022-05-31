package me.techday.carrefour.topzera.repository;

import me.techday.carrefour.topzera.model.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {

    Long countByProductId(String productId);
    List<Like> findByUserEmail(String userEmail);
}
