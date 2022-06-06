package me.techday.carrefour.topzera.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Product {
    @JsonProperty("productId")
    private String id;
    private Long totalLikes;

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

    public void setTotalLikes(Long totalLikes) {
        this.totalLikes = totalLikes;
    }
}
