package me.techday.carrefour.topzera.domain.wrappers;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import me.techday.carrefour.topzera.domain.Product;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProductList {
    private List<Product> products;
}
