package me.techday.carrefour.topzera.model.dto.wrappers;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import me.techday.carrefour.topzera.model.dto.Product;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProductList {
    private List<Product> products;
}
