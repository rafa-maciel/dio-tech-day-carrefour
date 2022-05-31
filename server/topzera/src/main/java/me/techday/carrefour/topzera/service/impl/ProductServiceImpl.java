package me.techday.carrefour.topzera.service.impl;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.techday.carrefour.topzera.consumer.ApiConsumer;
import me.techday.carrefour.topzera.model.dto.Product;
import me.techday.carrefour.topzera.repository.LikeRepository;
import me.techday.carrefour.topzera.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class ProductServiceImpl implements ProductService {

    private final ApiConsumer apiConsumer;
    private final LikeRepository likeRepository;

    @Override
    public List<Product> findAllProductsByCEP(String cep) {
        log.info("Starting API consumer and searching by cep");
        List<Product> products = apiConsumer
                .findAllByProductsByCEP(cep);

        return products.stream()
                .map(this::getProductWithLikes)
                .collect(Collectors.toList());
    }

    private Product getProductWithLikes(Product product) {
        Long totalLikes = likeRepository.countByProductId(product.getId());
        product.setTotalLikes(totalLikes);

        return product;
    }
}
