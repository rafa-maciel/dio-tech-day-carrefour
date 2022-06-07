package me.techday.carrefour.topzera.service.impl;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.techday.carrefour.topzera.consumer.ApiConsumer;
import me.techday.carrefour.topzera.model.dto.ProductDTO;
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
    public List<ProductDTO> findAllProductsByCEP(String cep) {
        log.info("Starting API consumer and searching by cep");

        // Get products from api and convert them to product DTO using static method convertFrom
        List<ProductDTO> products = apiConsumer
                .findAllByProductsByCEP(cep)
                .stream().map(ProductDTO::convertFrom)
                .collect(Collectors.toList());

        return products.stream()
                .map(this::getProductWithLikes)
                .collect(Collectors.toList());
    }

    /**
     * Get likes total from product and
     * add to the totallikes attribute
     * @param ProductDTO
     * @return ProductDTO with totalLikes
     */
    private ProductDTO getProductWithLikes(ProductDTO product) {
        Long totalLikes = likeRepository.countByProductId(product.getId());
        product.setTotalLikes(totalLikes);

        return product;
    }
}
