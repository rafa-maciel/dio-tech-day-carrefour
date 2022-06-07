package me.techday.carrefour.topzera.service;

import me.techday.carrefour.topzera.model.dto.ProductDTO;

import java.util.List;

public interface ProductService {
    public List<ProductDTO> findAllProductsByCEP(String cep);
}
