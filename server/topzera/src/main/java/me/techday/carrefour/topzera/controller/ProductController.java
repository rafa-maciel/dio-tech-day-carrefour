package me.techday.carrefour.topzera.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.techday.carrefour.topzera.model.dto.Product;
import me.techday.carrefour.topzera.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/products")
@AllArgsConstructor
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    private final ProductService service;

    @GetMapping
    public ResponseEntity<Collection<Product>> getAllByCEP(@RequestParam String cep) {
        log.info("Starting search by cep");
        List<Product> products = service.findAllProductsByCEP(cep);;
        log.info("finished search by cep");
        return ResponseEntity.ok(products);
    }
}
