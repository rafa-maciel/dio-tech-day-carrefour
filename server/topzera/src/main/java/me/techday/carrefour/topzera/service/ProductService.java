package me.techday.carrefour.topzera.service;

import me.techday.carrefour.topzera.model.dto.Product;

import java.util.List;

public interface ProductService {
    public List<Product> findAllProductsByCEP(String cep);
}
