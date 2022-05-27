package me.techday.carrefour.topzera.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Seller {
    @JsonProperty("sellerId")
    private String id;

    @JsonProperty("sellerName")
    private String name;

    private String addToCartLink;
    private Boolean sellerDefault;

    @JsonProperty("CommertialOfferPrice")
    private BigDecimal price;

    @JsonProperty("CommertialOfferIsAvailable")
    private Boolean isAvailable;

}
