package me.techday.carrefour.topzera.service.impl;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.techday.carrefour.topzera.consumer.ApiConsumer;
import me.techday.carrefour.topzera.domain.Product;
import me.techday.carrefour.topzera.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class ProductServiceImpl implements ProductService {

    private final ApiConsumer apiConsumer;

    @Override
    public List<Product> findAllProductsByCEP(String cep) {
        log.info("Starting API consumer and searching by cep");
        return apiConsumer
                .findAllByProductsByCEP(cep);
    }
}
