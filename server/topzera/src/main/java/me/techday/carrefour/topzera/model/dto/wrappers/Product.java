package me.techday.carrefour.topzera.model.dto.wrappers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Product {
    @JsonProperty("productId")
    private String id;

    @JsonProperty("productName")
    private String name;
    private String brand;
    private Integer brandId;

    @JsonProperty("productReferenceCode")
    private String referenceCode;
    private String categoryId;

    @JsonProperty("productTitle")
    private String title;

    @JsonProperty("metaTagDescription")
    private String metaDescription;

    private LocalDateTime releaseDate;
    private String link;
    private String description;

    private List<Item> items;

    public BigDecimal getPrice() {
        return items.get(0).getSellers().get(0).getCommertialOffer().getPrice();
    }

    public BigDecimal getLastPrice() {
        return items.get(0).getSellers().get(0).getCommertialOffer().getListPrice();
    }

    public Integer getAvailableQuantity() {
        return items.get(0).getSellers().get(0).getCommertialOffer().getAvailableQuantity();
    }

    public String getAddCartUrl() {
        return items.get(0).getSellers().get(0).getAddToCartLink();
    }

    public Boolean isAvailable() {
        return items.get(0).getSellers().get(0).getCommertialOffer().getIsAvailable();
    }

    public List<Image> getImages() {
        return items.get(0).getImages();
    }
}
