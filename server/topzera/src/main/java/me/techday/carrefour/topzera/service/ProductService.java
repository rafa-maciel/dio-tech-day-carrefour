package me.techday.carrefour.topzera.service;

import me.techday.carrefour.topzera.domain.Product;

import java.util.List;

public interface ProductService {
    public List<Product> findAllProductsByCEP(String cep);
}
