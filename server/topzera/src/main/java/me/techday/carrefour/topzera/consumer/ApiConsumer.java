package me.techday.carrefour.topzera.consumer;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import me.techday.carrefour.topzera.model.dto.Product;
import me.techday.carrefour.topzera.model.dto.wrappers.SellerStoreList;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.Duration;
import java.util.Arrays;
import java.util.List;

@Component
@Slf4j
@AllArgsConstructor
public class ApiConsumer {
    private static final String SELLERS_URL = "checkout/pub/regions?country=BRA&postalCode=%s";
    private static final String PRODUCTS_URL = "catalog_system/pub/products/search?fq=%s";
    private static final Duration TIMEOUT = Duration.ofSeconds(8);

    private final WebClient webClient;

    public List<Product> findAllProductsBySellerId(String sellerId) {
        log.info("Searching products by seller id: {}", sellerId);
        String url = String.format(PRODUCTS_URL, sellerId);
        log.info("Search URL: {}", url);

        Product[] products = buildWebClientRequest(url)
                .bodyToMono(Product[].class)
                .block(TIMEOUT);

        log.info("Products Found");

        return Arrays.asList(products);
    }

    public List<Product> findAllByProductsByCEP(String cep) {
        log.info("Searching sellers by CEP {}", cep);
        String url = String.format(SELLERS_URL, cep);
        log.info("Search URL: {}", url);

        SellerStoreList[] sellersStores = buildWebClientRequest(url)
                .bodyToMono(SellerStoreList[].class)
                .block(TIMEOUT);

        String sellerId = getFirstSellerIdFromSellersList(sellersStores);
        log.info("Sellers found {}", sellerId);
        return findAllProductsBySellerId(sellerId);
    }

    private WebClient.ResponseSpec buildWebClientRequest(String url) {
        return webClient.get()
                .uri(url)
                .retrieve();
    }

    private String getFirstSellerIdFromSellersList(SellerStoreList[] sellerList) {
        return sellerList[0]//Get first result from list sellers
                .getSellers() // Get sellers from this result
                .get(0) // Get the first Seller
                .getId();
    }


}
